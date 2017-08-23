# encoding: UTF-8
require 'mimemagic'
require 'colorize'
require 'mixlib/versioning'
require 'highline/import'
require 'yaml'

class Mixlib::Versioning::Format::SemVer
  # 1.8.3 is an internal version, with compatible changes & bugfixes only (not communicated)
  # 1.8 is the external, public version (always pointing to the last patch)
  def external_version
    "#{major}.#{minor}"
  end
end

task :default => :'build:development'

namespace :release do

  # Upload every files in `dist`
  FILES_TO_RELEASE = 'dist/**/*'

  SECRETS_FILE_PATH = 'secrets.yml'

  GITHUB_RELEASE_URL = 'https://github.com/mmorisset/aocreativestudio/releases/tag/%{version}'

  PRODUCTION_URL_PREFIX = '//aocreativestudio.com'
  STAGING_URL_PREFIX = '//aocreativestudio.com/staging'

  desc "Release SDK in staging"
  task :staging => :'build:staging' do
    release :staging, STAGING_URL_PREFIX
  end

  desc "Release SDK in production"
  task :production => :'build:production' do
    release :production, PRODUCTION_URL_PREFIX
  end

  def release(environment, url_prefix)
    ensure_no_uncommited_changes!
    # Brunch automatically adds sourcemap comments when generating sourcemap files.
    # Since these files aren't served publicly alongside the sources, but rather sent explicitely
    # (and privately) to Sentry to de-obfuscate error stacktraces, we want:
    # - those comments stripped in the SDK snippet
    # - `augment.(js|css).map` to be empty files (to avoid 404s in the browser)
    modify_file_contents('dist/snippet.js') { |src| strip_sourcemaps_comments(src) }

    # Here we ensure `augment.(js|css).map` are emptied before being deployed
    %w( css js ).each do |ext|
      modify_file_contents("dist/augment.#{ext}.map") { '' }
    end

    puts
    puts "[ #{environment.upcase} RELEASE ]".yellow
    puts

    secret = YAML.load_file(SECRETS_FILE_PATH)

    entries = Dir.glob('FILES_TO_RELEASE').sort
    Net::FTP.open(secret.ftp_url, secret.username, secret.password) do |ftp|
      entries.each do |name|
        if File::directory?(name)
          ftp.mkdir name
        else
          File.open(name) { |file| ftp.putbinaryfile(file, name) }
        end
      end
    end
  end

  def modify_file_contents(filename)
    File.write(filename, yield(File.read(filename)))
  end
end # namespace :release

namespace :build do

  desc "Builds production website"
  task :production do
    brunch_build :production
  end

  desc "Builds staging website"
  task :staging do
    brunch_build :staging
  end

  desc "Builds development website"
  task :development do
    brunch_build :development
  end

  def brunch_build(environment)
    `brunch build --env #{environment}`
  end

end # namespace :build

namespace :version do
  desc "Bump VERSION file to the prompted version and create a corresponding tag"
  task :bump do
    ensure_no_uncommited_changes!
    v = website_version
    default_next_version = if v.prerelease?
      v.to_s.sub(v.prerelease, v.prerelease.succ)
    else
      "#{v.external_version}.#{v.patch.succ}"
    end
    puts "Current version: #{v}"
    next_version = ask("Next version: ") { |q|
      q.default = default_next_version
      q.validate = ->(version_string) {
        version = Mixlib::Versioning.parse(version_string)
        version && version.to_semver_string == version_string
      }
    }
    File.write('VERSION', next_version)
    system(%{
      git add VERSION &&
      git commit -m "Bump version to #{next_version}" &&
      git tag -a #{next_version} -m "Release #{next_version}"
      git status
    }) || warn("Unable to commit & tag new version")
    puts "Don't forget to push version-bump commit & tag!"
  end
end # namespace :version

def website_version
  @website_version ||= Mixlib::Versioning.parse(File.read('VERSION').chomp)
end

def strip_sourcemaps_comments(source)
  lines = source.lines.to_a
  lines.pop if lines.last.start_with?('//# sourceMappingURL=')
  lines.join
end

def ensure_no_uncommited_changes!
  if uncommited_changes? && !ENV['FORCE']
    raise "You have uncommited changes in your repository, if you're sure what you're doing, add FORCE=1"
  end
end

def uncommited_changes?
  !system('git diff-index --quiet HEAD --')
end

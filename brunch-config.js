module.exports = {
  npm: {
    enabled: true,
    globals: { // bootstrap-less' JavaScript requires both '$' and 'jQuery' in global scope
      $: 'jquery',
      jQuery: 'jquery',
      bootstrap: 'bootstrap-less'
    },
    styles: {
      pace: ['public/pace.css']
    }
  },
  files: {
    javascripts: {
      joinTo: 'app.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    },
  },
  plugins: {
    "less": {
      dumpLineNumbers: 'comments'
    },
    "static": {
      processors: [
        require('html-brunch-static')({
          handlebars: {
            enableProcessor: true
          },
          processors: [
            require('marked-brunch-static')(),
            require('pug-brunch-static')({
              pretty: true
            })
          ]
        })
      ]
    }
  }
};

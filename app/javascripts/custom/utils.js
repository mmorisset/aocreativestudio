exports.whenPageReady = whenPageReady;
exports.whenPageReadyIfExists = whenPageReadyIfExists;

function whenPageReady(callback) {
  $(function() { callback });
}

function whenPageReadyIfExists(selector, callback) {
  $(function() {
    ifExists(selector, callback);
  });
}

function ifExists(selector, callback) {
  var $collection = $(selector);
  if ($collection.length) callback($collection);
}

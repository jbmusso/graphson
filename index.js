var ReadableStream = require('readable-stream');
var JSONStream = require('JSONStream');

module.exports.parse = function(source) {
  var elementStream = new ReadableStream();

  source.pipe(JSONStream.parse('graph.*.*', function(k) {
    elementStream.emit(k._type, k);
    elementStream.emit('element', k);
  }));

  source.on('end', function() {
    elementStream.emit('end');
  });

  return elementStream;
};

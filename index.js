var JSONStream = require('JSONStream');
var through = require('through');


module.exports.parse = function() {
  return JSONStream.parse('graph.*.*');
};

module.exports.vertices = function() {
  return through(function(element) {
    if (element._type === 'vertex') {
      this.push(element);
    }
  });
};

module.exports.edges = function() {
  return through(function(element) {
    if (element._type === 'edge') {
      this.push(element);
    }
  });
};

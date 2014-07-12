var fs = require('fs');
var GraphSON = require('../');


console.time("parsetime");

var stream = fs.createReadStream(__dirname +'/tinkergraph-normal.json');

var g = GraphSON.parse(stream);
var vertices = 0;
var edges = 0;


g.on('vertex', function(vertex) {
  console.log("Vertex:", vertex);
  vertices++;
});

g.on('edge', function(edge) {
  console.log("Edge:", edge);
  edges++;
});

g.on('element', function(element) {
  // console.log('Element:', element);
});

g.on('end', function() {
  console.timeEnd("parsetime");
  console.log('Reached end of GraphSON file.');
  console.log('- total vertices parsed:', vertices);
  console.log('- total edges parsed', edges);
});

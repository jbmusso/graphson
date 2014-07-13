var fs = require('fs');
var GraphSON = require('../');


var elements = 0;

console.time("Parsetime");

var g = fs.createReadStream(__dirname +'/tinkergraph-normal.json')
.pipe(GraphSON.parse())
.pipe(GraphSON.vertices());

g.on('data', function(element) {
  console.log(element);
  elements++;
});

g.on('end', function() {
  console.timeEnd("Parsetime");
  console.log('Reached end of GraphSON file.');
  console.log('- Total graph elements parsed:', elements);
});

graphson
========

GraphSON file format parsing library using Node.js Streams


## Install

```
npm install graphson --save
```

## Example

### Reading a graphson file in Node.js

```javascript
var fs = require('fs');
var GraphSON = require('graphson');

// Create a readable stream for a given file
var stream = fs.createReadStream('/path/to/file.graphson');

// Start parsing. Will emit 'vertex', 'edge' and 'element' events.
var g = GraphSON.parse(stream);

g.on('vertex', function(vertex) {
  console.log("Vertex:", vertex);
});

g.on('edge', function(edge) {
  console.log("Edge:", edge);
});

g.on('element', function(element) {
  // console.log('Element:', element);
});

g.on('end', function() {
  console.log('Reached end of GraphSON file');
});
```

## Performance

This library parses approximately 100 000 vertices per second on my laptop (using 4 properties vertices stored in a ~10.8 Mb file).

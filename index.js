var p = require('./models/sample.js').schema.tree;
var x = require('./generator.js')

console.log(x(p))
// console.log(JSON.stringify(x(p)))


var p       = require('./models/sample.js').schema.tree;
var x       = require('./generator.js')
var fs		  = require('fs');
var records = parseInt(process.argv[2]) || 10;
var mocked  = x(p,records);

var output  = '/output/'+process.argv[4] || '/output/mocked-'+Math.random().toString().split('.')[1]+'.json';
var type    = process.argv[3]
if(type == 'false' || type == false || type == 'min') type = "min";
else type = "pretty";

var data = type == "min"? JSON.stringify(mocked) : JSON.stringify(mocked,null," ") ;


fs.writeFile(__dirname + output, data, function (err) {
  if (err) return console.log(err);
  console.log("Successfully wrote data to: ", output);
});
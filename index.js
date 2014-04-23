#!/usr/bin/env node
var 
  g    = require('./generator.js')
, fs	 = require('fs')
, argv = require('optimist')
				.usage("Generate some mock data.")
				.default({
					'o': 'mocked-'+Math.random().toString().split('.')[1]+'.json',
					'r': 10,
					't': 2,
					'p': true
				})
				.demand('s')
				.alias('t','tabsize')
				.alias('s','schema')
				.alias('o','output')
				.alias('r','records')
				.alias('p','pretty')
				.describe('s','Use a file e.g: models/sample.js')
				.describe('o','Output file, prefixed with "output/", & random filename as default.')
				.describe('r','Number of records to print!')
				.describe('p','Pretty print output')
				.describe('t','Tab size if pretty print.')
				.string('s')
				.string('o')
				.boolean('p')
				.argv
;


var output  = '/output/'+argv.o
var s       = require('./'+argv.s).schema.tree;

var mocked  = g(s,argv.r);

var x = new Array(argv.t).join(" ");

var data = argv.p  == false ? JSON.stringify(mocked) : JSON.stringify(mocked,null, x ) ;


fs.writeFile(__dirname + output, data, function (err) {
  if (err) return console.log(err);
  console.log("Successfully wrote data to: ", output);
});
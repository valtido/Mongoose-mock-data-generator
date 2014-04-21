var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var schema =  new Schema({
		title    : String,
		name       : {
			first: String,
			other: String,
			last : String,
		},
		email   : String,
		dob     : Date,
		add1    : String,
		add2    : String,
		add3    : String,
		add4    : String,
		add5    : String,
		postcode: String,
});
var users = mongoose.model( 'users', schema );
module.exports = users;
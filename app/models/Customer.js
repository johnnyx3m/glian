(function(){
	var mongoose = require('mongoose');
	var schema = mongoose.Schema({
		id		: {type:String,required:true, unique:true},
		name	: {type:String,required:true},
		address	: {type:String}
	});

	module.exports = mongoose.model('customers',schema);
}());
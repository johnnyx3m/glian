(function(){
	var mongoose = require('mongoose');
	var schema = mongoose.Schema({
		id			: {type:String,required:true, unique:true},
		name		: {type:String,required:true},
		longitude	: {type:Number,required:true},
		latitude	: {type:Number,required:true}
	});

	module.exports = mongoose.model('agents',schema);
}());
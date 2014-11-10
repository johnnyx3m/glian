(function(){
	var mongoose = require('mongoose');
	var salesman = require('../models/Salesman');
	var controller = require('../base/Controller');

	exports.getsalesmen = function(req,res,next){
		salesman.find({},function(err,data){
			if(err) controller.send(500,res,{status:'Failed getsalesmen...'});
			console.log('retrieving getsalesmen...');
			controller.send(200,res,data);
		});
	}

	exports.addsalesman = function(req,res,next){
		var source = req.body.id ? req.body : req.query;
		var Salesman = new salesman({
			id: source.id,
			name: source.name,
			longitude: source.longitude,
			latitude: source.latitude
		});

		Salesman.save(function(err,data){
			if(err) controller.send(403, res, {status:'Failed saving salesman...'});
			console.log('saving salesman...');
			controller.send(200,res,data);
		});
	}

	exports.deletesalesman = function(req,res){
		console.log('delete salesman');
		salesman.remove({id:req.params.id},function(err,data){
			console.log('deleting salesman...'+data);
		});
	}

}())
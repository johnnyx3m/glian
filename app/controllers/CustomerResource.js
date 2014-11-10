(function(){
	var mongoose = require('mongoose');
	var customer = require('../models/Customer');
	var controller = require('../base/Controller');

	exports.getcustomers = function(req,res,next){
		customer.find({},function(err,data){
			if(err) controller.send(500,res,{status:'Failed getcustomers...'});
			console.log('retrieving customers...');
			controller.send(200,res,data);
		});
	}

	exports.addcustomer = function(req,res,next){
		var source = req.body.id ? req.body : req.query;
		var Customer = new customer({
			id: source.id,
			name: source.name,
			address: source.address
		});

		Customer.save(function(err,data){
			if(err) controller.send(403, res, {status:'Failed saving customer...'});
			console.log('saving customer...');
			controller.send(200,res,data);
		});
	}

	exports.deletecustomer = function(req,res){
		console.log('delete customer');
		customer.remove({id:req.params.id},function(err,data){
			console.log('deleting customer...'+data);
		});
	}

}())
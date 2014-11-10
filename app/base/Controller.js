(function(){
	module.exports = {
		send:function(status,res,data){
			//res.setHeader('Access-Control-Allow-Methods','POST, GET, PUT, DELETE, OPTIONS')
			//res.setHeader('Access-Control-Allow-Origin','*')
			//res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept')
			if(!status) status = 200;
			res.status(status).send(data);
		}
	}
}())
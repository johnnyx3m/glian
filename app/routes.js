var customerResource = require( './controllers/CustomerResource.js' );
var salesmanResource = require( './controllers/SalesmanResource.js' );
var schema      = require( './models/Customer' );

module.exports = function( app ) {
	app.all( '/getcustomers', customerResource.getcustomers );
	app.all( '/addcustomer', customerResource.addcustomer );
	app.all( '/deletecustomer/:id', customerResource.deletecustomer );

	app.get( '/getsalesmen', salesmanResource.getsalesmen );
	app.post( '/addsalesman', salesmanResource.addsalesman );
	app.delete( '/deletesalesman/:id', salesmanResource.deletesalesman );

};
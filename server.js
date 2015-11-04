var express		= require( 'express' );
var mongoose	= require( 'mongoose' );
var connect		= require( 'connect' );
var bodyParser 	= require( 'body-parser' );
var db			= require( './config/db.js' );

var app      = express();
mongoose.connect( db.url );

app.use( bodyParser.json() );
app.use( express.static( __dirname + '/public' ) );
require( './app/routes' )( app );

app.listen( db.port );
console.log( 'App is starting in port '+db.port );

console.log('test');
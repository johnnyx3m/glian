( function () {
'use strict';

requirejs.config( {
	baseUrl : '	js',
	paths : {
		'jquery'              : '../bower_components/jquery/dist/jquery',
		'underscore'          : '../bower_components/underscore/underscore',
		'angular'             : '../bower_components/angular/angular'
	},

	shim : {
		underscore : {
			exports : "_"
		},
		angular : {
			exports: 'angular'
		}
	}
} );

} () );

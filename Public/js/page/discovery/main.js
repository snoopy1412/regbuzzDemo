define(function(require) {

	var $ = require('jquery'),
		raty = require('./raty'),
		jRange = require('./jRange');

	// 全局bootstrap 启用tootip
	$(document).on('mouseover', '[data-toggle="tooltip"]', function() {
		$(this).tooltip('show');
	})
	raty.init();
	jRange.init();

	require('./connect');
	require('./hire');
	require('./controller');
});
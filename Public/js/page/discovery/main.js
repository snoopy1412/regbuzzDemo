require([
	'./page/discovery/raty',
	'./page/discovery/jRange',
	'./page/discovery/controller'
], function(raty, jRange) {
	// 全局bootstrap 启用tootip
	$(document).on('mouseover', '[data-toggle="tooltip"]', function() {
		$(this).tooltip('show');
	})
	raty.init();
	jRange.init();
});
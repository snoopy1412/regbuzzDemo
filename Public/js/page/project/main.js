require(
	[
		'./page/project/common', // 公用
		'./page/project/project-started', // project-started 页面
		'./page/project/project-participated', // project-participated 页面
		'./page/project/draft', // draft 页面
		'./page/project/bookmark' // bookmark 页面
	],
	function() {

		// // 自定义事件，配合tab事件，触发hashchange事件
		// $('[data-toggle="tab"]').on('hash.change', function() {
		// 	var originUrl = window.location.pathname,
		// 		hash = $(this).attr('href'),
		// 		newUrl = originUrl + hash;
		// 	window.location.hash = hash;
		// })

		// $(window).on('hash.show', function() {
		// 	var hash = window.location.hash;
		// 	var $tabs = $('[data-toggle="tab"]');
		// 	var $containers = $('.tab-pane');

		// 	$containers.each(function(i, item) {
		// 		this.index = i;
		// 		if ($(this).attr('id') === hash.substr(1)) {
		// 			$(this).addClass('active').siblings().removeClass('active');
		// 			$tabs.eq(this.index).parent().addClass('active').siblings().removeClass('active');
		// 		}
		// 	})
		// })

		// // 事件触发
		// $('[data-toggle="tab"]').on('click', function() {
		// 	$(this).trigger('hash.change');
		// })

		// $(window).on('hashchange', function() {
		// 	$(this).trigger('hash.show');
		// })

		// // 初始化页面
		// $(function() {
		// 	$(document).trigger('hash.show');
		// })
	}
);
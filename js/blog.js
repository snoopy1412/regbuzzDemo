define(['jquery','popoverCustom'], function($, popoverCustom) {
	
	// 人名hover效果
	$('.author-name').popoverCustom({
		method: 'hover',
		defaultPosition : false,
		content: $('.js-modal-author')
	});
});
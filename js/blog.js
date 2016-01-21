define(['jquery', 'popover'], function($, popover) {
	$('.author-name').popover({
		method: 'hover',
		defaultPosition : false,
		content: $('.js-modal-author'),
		dir:'down'
	});
});
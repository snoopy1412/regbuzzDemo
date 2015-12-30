define(['jquery', 'popover'], function($, popover) {
	$('.author-name').popover({
		method: 'hover',
		defaultPosition : false,
		content: $('.modal-author'),
		dir:'down'
	});
});
define(['jquery', 'ellipsis'], function($, ellipsis) {
	var ellipsis = function() {
		// 溢出隐藏，省略号
		$(".home-push-des").ellipsis({
			childNodes: 'p'
		})

		$('.home-push-title').ellipsis({
			childNodes: 'a'
		})
	}
	return {
		ellipsis : ellipsis
	}
})
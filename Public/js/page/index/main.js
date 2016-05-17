define(['jquery', 'bootstrap', 'popoverCustom', 'revealOnScroll', 'hoverMask'], function($, bootstrap, popoverCustom, revealOnScroll, hoverMask) {

	// 首页滚动监听元素添加渐入效果
	new revealOnScroll.RevealOnScroll();

	// 首页二级菜单的调用
	$('.js-dropdown-hover').popoverCustom();

	// 首页八种分类的hover效果
	new hoverMask.HoverMask('.js-HoverMask-hover');

	$('.panel-body-list a').click(function(event) {
		event.preventDefault();
		if ($(this).data('showInfo') === undefined) {
			$(this).data('showInfo', true);
		}
		if ($(this).data('showInfo')) {
			$(this).next().css('display', 'block');
			$(this).data('showInfo', false);
		} else {
			$(this).next().css('display', 'none');
			$(this).data('showInfo', true);
		}
	})
});
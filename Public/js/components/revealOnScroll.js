define(function(require) {

	var $ = require('jquery');
	/**
	 * RevealOnScroll
	 * 该函数用于网页滚动时，元素的渐变出现效果，需要在页面对应元素配置
	 * 1. 添加class = 'revealOnScroll',表示该元素已被监听；
	 * 2. data-animation    默认 = 'fadeIn' , 可选有 fadeInUp fadeIn，可拓展； 
	 * 3. [data-timeout]    可选函数，number值，延时触发时间；
	 */
	function RevealOnScroll() {
		this.window = $(window);
		this.scrolled = $(window).scrollTop();
		this.win_height_padded = this.window.height() * 1.2;
		this.show(this.scrolled);
		this.init();
	}

	// 原型函数
	// ------------------------------------------------------------------
	RevealOnScroll.prototype = {
		constructor: RevealOnScroll,
		init: function() {
			var _this = this;
			$(window).on('scroll', function() {
				var scrolled = _this.window.scrollTop();

				// 在初始化函数中载入show,或者hide函数
				_this.show(scrolled);
			});
		},
		show: function(scrolled) {
			var _this = this;
			$(".js-revealOnScroll").each(function(i, item) {
				var $this = $(this),
					offsetTop = $this.offset().top;
				if (scrolled + _this.win_height_padded > offsetTop) {
					if ($this.data('timeout')) {
						window.setTimeout(function() {
							if ($this.css('opacity') === '0') {
								_show($this);
							}
						}, parseInt($this.data('timeout'), 10));
					} else {
						if ($this.css('opacity') === '0') {
							_show($this);
						}
					}
				}
			});
		},
		hide: function(scrolled) {
			//可拓展 
		}
	};

	// 私有函数
	// ------------------------------------------------------------------
	// 可以拓展的show函数
	function _show(obj, velocity) {
		var moveStyle = obj.data('animation') || 'fadeIn';
		var speed = velocity || 600;
		switch (moveStyle) {
			case 'fadeIn':
				obj.velocity({
					'opacity': 1
				}, speed);
				break;
			case 'fadeInUp':
				obj.velocity({
					'opacity': [1, 0],
					'translateY': [0, -20]
				}, speed);
				break;
			default:
				break;
		}
	}

	// 返回值
	// -----------------------------------------------------------------
	return {
		RevealOnScroll: RevealOnScroll
	};
});
define(function(require) {

	var $ = require('jquery');

	/**
	 * HoverMask
	 * 该函数用于首页对八种分类的hover效果
	 * 参数 node , 主要是指 '.js-hover' 的class;；
	 */
	function HoverMask(node) {
		this.hoverElements = $(node);
		this.text = '';
		this.caption = null;
		this.mask = null;
		this.figure = null;
		this.init();
	}

	// 原型函数
	// ------------------------------------------------------------------
	HoverMask.prototype = {
		constructor: HoverMask,
		init: function() {
			return this.hover();
		},
		hover: function() {
			this.hoverElements.each(function() {
				var _this = this;
				$(this).hover(

					// show
					function() {
						var link = $(this).find('figure').data('link'),
							title = $(this).find('figure').data('title'),
							hoverLink = $('<a href="' + link + '">' + title + '</a>');
						hoverLink.addClass('btn btn-secondary-outline js-hoverLink');

						_this.mask = $(this).find('.js-mask');
						_this.figure = $(this).find('figure');
						_this.caption = $(this).find('figcaption');
						_this.text = _this.caption.text();

						_this.mask.css('display', 'block').html(hoverLink);
						_this.caption.text('');
						_this.figure.addClass('dimmed');
					},

					// hide
					function() {
						_this.mask.css('display', 'none').html('');
						_this.caption.text(_this.text);
						_this.figure.removeClass('dimmed');
					}
				);
			});
		}
	};

	// 返回值
	// ------------------------------------------------------------------
	return {
		HoverMask: HoverMask
	};
});
define(['jquery','velocity'],function($,velocity) {

	/**
	 * PopoverCustom
	 * 该函数用于鼠标移入菜单时，出现的二级菜单
	 * parma : obj 绑定的元素class或者id; 
	 */
	function PopoverCustom(obj, options) {
		this.obj = $(obj);
		this.options = $.extend({}, PopoverCustom.defaults, options);

		this.callback = this.options.callback;
		this.content = this.options.content;
		this.defaultPosition = this.options.defaultPosition;
		this.offset = this.options.offset;
		this.dir = this.options.dir;

		this.init();
	}

	PopoverCustom.defaults = {
		content: false,
		defaultPosition: true,
		dir: 'down',
		callback: function() {}
	};

	// 原型函数
	// ------------------------------------------------------------------
	PopoverCustom.prototype = {
		constructor: PopoverCustom,

		init: function() {
			this.hover();
		},
		hover: function() {
			var _this = this;
			this.obj.each(function() {
				var that = this,
					popoverContent;
				if (_this.content) {
					popoverContent= _this.content;
				} else {
					popoverContent = _this.obj.parent().children('.js-popover-content');
				}

				// 添加判断条件,为this 绑定 data-isShow
				_isShow(this, popoverContent);

				$(this).hover(
					function() {

						//不清除定时器会造成bug 
						clearTimeout(this.timer2);
						
						this.timer2 = setTimeout(function(){
							// alert($(that).data('isShow'))
							if ($(that).data('isShow') === false) {

								if (_this.content && _this.defaultPosition === false) {
									var offset = _offset(_this.dir, popoverContent, $(that));
									
									$(window).resize(function() {
										offset = _offset(_this.dir, popoverContent, $(that));
									});
									
									$('html body').scroll(function() {
										offset = _offset(_this.dir, popoverContent, $(that));
									});
									
									popoverContent.css({
										left: offset.left,
										top: offset.top
									});
								}
								popoverContent.show();
								$(that).data('isShow', true);

								// 绑定回调函数
								// _this.callback && _this.callback(_this.obj); //此条无法通过jsint检查，但是我觉得无所谓
								if(_this.callback){
									_this.callback(_this.obj);
								}
							}
						},150);					
					},
					function() {
						var This = this;

						// 防止鼠标移动到子元素前子元素消失
						this.timer = setTimeout(function() {
							if ($(that).data('isShow') === true) {
								popoverContent.hide();
								$(that).data('isShow', false);
							}
						}, 150);
					}
				);

				// 对单独的元素进行绑定
				popoverContent.hover(function() {
					$(that).data('isShow', false);
				}, function() {
					$(this).hide();
					$(that).data('isShow', false);
				});

			});
		}
	};

	// 私有函数
	// ------------------------------------------------------------------
	// 缓动出现
	function _show(obj) {
		obj.show();
		obj.velocity({
			'opacity': [1, 0],
			'translateY': [0, -10]
		}, 200);
	}

	// 缓动消失
	function _hide(obj) {
		obj.velocity({
			'opacity': 0,
			'translateY': '-10px'
		}, 100, function() {
			obj.hide();
		});
	}

	// 方向判断
	function _offset(dir, targetObj, obj) {
		var offset = {},
			leftDir = obj.offset().left - $(document).scrollLeft(),
			rightDir = $(window).width() + $(document).scrollLeft() - obj.offset().left,
			topDir = obj.offset().top - $(document).scrollTop(),
			bottomDir = $(window).height() + $(document).scrollTop() - obj.offset().top;

		if (arguments.length == 3) {
			switch (dir) {
				case 'down':
					if (targetObj.height() - bottomDir > 0 && bottomDir < topDir) {
						console.log(targetObj.height(),bottomDir)
						offset = {
							left: obj.offset().left,
							top: obj.offset().top - targetObj.height() - 10
						};
					} else {
						offset = {
							left: obj.offset().left,
							top: obj.offset().top + obj.height() + 10
						};
					}

					break;
				case 'up':
					if (targetObj.height() - bottomDir < 0 && bottomDir > topDir)
						offset = {
							left: obj.offset().left,
							top: obj.offset().top - targetObj.height() - 10
						};
					break;
				case 'left':
					if (targetObj.width() - rightDir < 0  && leftDir < rightDir) {
						offset = {
							left: obj.offset().left + obj.width() + 10,
							top: obj.offset().top
						};
					} else {
						offset = {
							left: obj.offset().left - targetObj.width() - 10,
							top: obj.offset().top
						};
					}
					break;
				case 'right':
					if (targetObj.width() - leftDir < 0 && leftDir > rightDir) {
						offset = {
							left: obj.offset().left - targetObj.width() - 10,
							top: obj.offset().top
						};
					} else {
						offset = {
							left: obj.offset().left + obj.width() + 10,
							top: obj.offset().top
						};
					}

					break;
				default:
					break;
			}
		}
		return offset;
	}

	// 为元素添加判断条件
	function _isShow(obj, targetObj){
		var isShow = targetObj.css('display') === 'block' ? true : false;
		if (isShow === true) {
			$(obj).data('isShow', true);
		} else {
			$(obj).data('isShow', false);
		}
	}

	// 生成jquery插件
	$.fn.extend({
		popoverCustom: function(options) {
			this.each(function() {
				new PopoverCustom(this, options);
			});
			return this;
		}
	});

});
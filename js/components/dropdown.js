define(['jquery'], function() {

	/**
	 * [使用方式 $('.js-dropdown').dropdown()，配合class:open]
	 * @return {[type]} [description]
	 */
	$.fn.dropdown = function() {
		var _this = this;
		this.each(function() {
			var element = $(this);
			element.on('click', function(e) {
				e.stopPropagation();
				e.preventDefault();
				
				var parent = $(this).parent(),
					isActive = parent.hasClass('js-open');

				_this.each(function() {
					$(this).parent().removeClass('js-open');
				});

				if (!isActive) {
					parent.toggleClass('js-open');
				}

				// 为js-dropdown-menu绑定事件
				parent.find('.js-dropdown-menu').on('click',function(event){
					event.stopPropagation();
					parent.addClass('js-open');
				});
			});
		});

		$(document).on('click', function(event) {

			_this.each(function() {
				$(this).parent().removeClass('js-open');
			});
		});
	};
});
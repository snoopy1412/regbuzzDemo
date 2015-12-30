define(function() {

	function ResponsiveNav(obj) {
		this.obj = $(obj);
		this.collapse = this.obj.next('.collapse');
		this.height = this.collapse.css('height');
		this.onOff = true;
		this.init();
	}

	ResponsiveNav.prototype = {
		constructor: ResponsiveNav,
		init: function() {
			this.click();
		},
		click: function() {
			var _this = this;
			this.obj.on('click', function() {

				if (_this.collapse.css('display') == 'none') {
					_this.collapse.css('height', 0);
					_this.collapse.css('display', 'block').velocity({
						'height': _this.height
					}, function() {
						_this.collapse.css('height', 'auto');
					});
				} else {
					$(this).next('.collapse').velocity({
						'height': 0
					}, function() {
						_this.collapse.css('display', 'none');
					});
				}
			});
		}
	};

	return {
		ResponsiveNav: ResponsiveNav
	};
});
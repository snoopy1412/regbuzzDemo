define(['jquery'], function($) {
	function Ellipsis(node, options) {
		this.node = node;
		this.options = $.extend({}, Ellipsis.default, options);
		this.init();
	}

	Ellipsis.default = {
		childNodes: false
	}

	Ellipsis.prototype.init = function() {
		var self = this;
		$(this.node).each(function() {
			var divH = $(this).height(),
				re = /(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/,
				$box = null;

			if (self.options.childNodes) {
				var $childNode = $(self.options.childNodes, $(this)).eq(0);
				$box = $childNode;

			} else {
				$box = $(this);
			}

			while ($childNode.outerHeight() > divH) {
				var newText = $childNode.text().replace(re, "...");
				$childNode.text(newText);
			};
		})
	}

	// jquery插件
	$.fn.extend({
		ellipsis : function(options){
			this.each(function(i, item) {
				new Ellipsis(this,options);
			});
			return this;
		}
	})
})
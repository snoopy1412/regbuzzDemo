define(['jquery','layerInit'], function($) {
	return {

		/**
		 * [判断输入框的输入情况]
		 * @param {[string]} content [输入内容]
		 * @param {[object]} options [输入选项]
		 */
		StringValidator: function(content, options) {

			var defaults = {
				overSizeNum: false, // 最大输入值，number
				noContentMsg: false, // 未填入内容提示
				overMaxMsg: false, //超过最大输入值提示
				illegalMsg: false //非法输入提示
			}
			var options = $.extend({}, defaults, options);

			// 过滤html标签，主要还是要靠后台验证
			var reg = /<\/?[^>]*>/g;

			if (!reg.test(content)) { // 未发现html标签

				if (options.noContentMsg !== false) {
					if (content.trim() === '') { // 情况1 ，未填入字符
						layer.alert(options.noContentMsg, {
							icon: 0
						});
						return false;
					}
				}
				if (options.overMaxMsg !== false) {
					if (content.trim().length > options.overSizeNum) { // 情况2 ，超过最大值
						layer.alert(options.overMaxMsg, {
							icon: 0
						});
						return false;
					}
				}
				return true;
			} else {
				if (options.illegalMsg !== false) {
					layer.alert(options.illegalMsg, {
						icon: 0
					});
					return false;
				}
				return true;
			}

		}
	}
})
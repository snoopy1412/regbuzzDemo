define(['jquery', 'layerInit'], function($) {
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

		},
		bindEvent: function(target, callback) {
			$(document).on('click', target, function(event) {
				event.preventDefault();

				callback && callback.apply(this);
			})
		},
		getWidth: function() {
			var width = $(window).width(),
				resultWidth;
			if (width >= 768) {
				resultWidth = '600px';
			} else {
				resultWidth = (width - 30) + 'px';
			}
			return resultWidth;
		},
		addVerify: function(str, overSizeNum, noStrMsg, overMaxMsg, illegalMsg) {
			var re = /<\/?[^>]*>/g;
			if (!re.test(str)) {
				// 错误提示
				if (noStrMsg !== '') {
					if (str.trim() === '') { // 情况1 ，未填入字符
						layer.alert(noStrMsg, {
							icon: 0
						});
						return false;
					}
				}
				if (overMaxMsg !== '') {
					if (str.trim().length > overSizeNum) { // 情况2 ，超过最大值
						layer.alert(overMaxMsg, {
							icon: 0
						});
						return false;
					}
				}
				return true;
			} else {
				if (illegalMsg !== '') {
					layer.alert(illegalMsg, {
						icon: 0
					});
					return false;
				}
				return true;

			}

		},
		getData: function(element) {
			var projectId = $(element).data('projectid'),
				projectAction = $(element).data('projectacton'),
				projectReason = $(element).data('projectreason');

			return {
				projectId: projectId,
				projectAction: projectAction,
				projectReason: projectReason

			}
		},
		canclick: function(self, callback) {
			$(self).data('canclick', true);
			if ($(self).data('canclick')) {
				$(self).data('canclick', false).addClass('action-active');
				callback && callback.apply(self);
			}
		},
		beforeSend: function() {
			loadIndex = layer.load(2, {
				time: 5 * 1000
			});
			return loadIndex;
		},
		complete: function(self, loadIndex) {
			layer.close(loadIndex);
			$(self).data('canclick', true).removeClass('action-active');
		},
		error: function(msg) {
			layer.msg(msg, {
				icon: 3,
				time: 1500
			});
		},
		success: function(self, data, index, successMsg, failMsg, successCallback) {
			if (data === 'true') {
				layer.msg(successMsg, {
					icon: 1,
					time: 500
				}, successCallback);
				// 执行回调函数
				layer.close(index);
			} else {
				layer.msg(failMsg, {
					icon: 2,
					time: 1000
				});
				$(self).data('canclick', true)
					// 执行回调函数
				layer.close(index);
			}
		},
		cancel: function(self) {
			$(self).data('canclick', true).removeClass('action-active');
		}
	}
})
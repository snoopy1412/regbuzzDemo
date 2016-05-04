define(['jquery'], function($) {
	var action = {
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
		addVerify: function(str,overSizeNum,noStrMsg,overMaxMsg, illegalMsg) {
			var re = /<\/?[^>]*>/g;
			if (!re.test(str)) {
				// 错误提示
				if (str.trim() === '') { // 情况1 ，未填入字符
					layer.alert(noStrMsg, {
						icon: 0
					});
					return false;
				} else if (str.trim().length > overSizeNum) { // 情况2 ，超过最大值
					layer.alert(overMaxMsg, {
						icon: 0
					});
					return false;
				}else{
					return true;
				}
			} else{
				layer.alert(illegalMsg, {
					icon: 0
				});
				return false;
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
		success: function(self, data, index, successMsg, failMsg) {
			if (data === 'true') {
				layer.msg(successMsg, {
					icon: 1,
					time: 500
				});
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
	return {
		action: action
	}
})
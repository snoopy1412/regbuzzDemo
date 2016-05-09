define(['jquery', 'layerInit'], function($, layerInit) {
	function popupConfirm(options) {
		this.options = $.extend({}, popupConfirm.defaults, options);
		this.init();
	}

	popupConfirm.defaults = {
		modalTitle: '',
		modalContent: '',
		ajaxUrl: '',
		successMsg: '',
		failMsg: '',
		errorMsg: '',
		popupBtn: '',
		activeClass: 'action-active'
	};
	popupConfirm.prototype = {
		constructor: popupConfirm,
		init: function() {
			var self = this;
			$(document).on('click', self.options.popupBtn, function(evnet) {
				var This = this;
				evnet.preventDefault();
				self._beginPopUpEvent(This);
			});
		},
		getData: function() {
			this.projectId = $(self.options.popupBtn).data('projectid');
			this.projectAction = $(self.options.popupBtn).data('projectacton');
		},
		_beginPopUpEvent: function(that) {
			var self = this;
			$(that).data('canclick', true);
			if ($(that).data('canclick')) {
				$(that).data('canclick', false).addClass(self.options.activeClass);
				layer.confirm(self.options.modalContent, {
					title: self.options.modalTitle
				}, function(index) {
					self._confirm(index);
				}, function() {
					self._cancel(that)
				});
			}
		},
		_confirm: function(index) {
			var loadIndex,
				status = false,
				self = this;

			var submitData = {
				projectAction: self.projectAction,
				projectId: self.projectId
			}

			if (!status) {
				$.ajax({
					url: self.options.ajaxUrl,
					type: 'get',
					data: submitData,
					timeout: 5 * 1000,
					beforeSend: function() {
						self._beforeSend();
					},
					success: function(data) {
						self._success(data, index);
					},
					complete: function(that) {
						self._complete();
					},
					error: function(xhr, error) {
						self._error();
					}
				})
			}
		},
		_cancel: function(that) {
			$(that).data('canclick', true).removeClass('action-active');
		},
		_beforeSend: function() {
			status = true; // 防止重复提交
			loadIndex = layer.load(2, {
				time: 5 * 1000
			});
		},
		_success: function(data, index) {
			var self = this;
			if (data === 'true') {
				layer.msg(self.options.successMsg, {
					icon: 1,
					time: 500
				}, function() {
					window.location.reload();
				});
				// 执行回调函数
				layer.close(index);
			} else {
				layer.msg(self.options.failMsg, {
					icon: 2,
					time: 1000
				});
				$(this).data('canclick', true)
					// 执行回调函数
				layer.close(index);
			}
		},
		_complete: function(that) {
			layer.close(loadIndex);
			status = false;
			$(that).data('canclick', true).removeClass('action-active');
		},
		_error: function() {
			var self = this;
			layer.msg(self.options.errorMsg, {
				icon: 3,
				time: 1500
			});
		}
	};

	// 生成jquery插件
	$.extend({
		popupConfirm: function(options) {
			new popupConfirm(options);
		}
	});

})
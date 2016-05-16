define(['jquery', 'tools', 'layerInit', 'emoji'], function($, tools, layerInit, emoji) {
	var emojiObj = emoji.emoji; // 引入emoji工具

	var Message = function(node, options) {
		this.node = node;
		this.options = $.extend({}, Message.defaults, options);
		this.init();
	}
	Message.defaults = {
		type: 1, // 1 私聊，2 群聊
		modalBox: '#connect-message',
		inputBox: '#js_message-textarea',
		emojiBtn: '#js_emojiBtn',
		emojiContainer: '#emoji',
		ajaxUrl: 'data.js'
	};

	Message.prototype = {
		constructor: Message,
		init: function() {
			var self = this;
			this._getDom();

			// 表情相关设置
			emojiObj.renderEmoji(this.emojiContainer);
			emojiObj.bindEmojiEvent(this.emojiContainer, this.emojiBtn, this.inputBox, false);

			// 主要逻辑
			this.showChatBox();
		},

		_getDom: function() {
			this.type = this.options.type;
			this.modalBox = this.options.modalBox;
			this.inputBox = this.options.inputBox;
			this.emojiBtn = this.options.emojiBtn;
			this.emojiContainer = this.options.emojiContainer;
			this.ajaxUrl = this.options.ajaxUrl;
			if (this.type === 2) {
				this.$checkboxs = $('.connect-list-section').find('.connect-frends-checkbox');
				this.userIds = [];
			}
		},
		_renderHeader: function(userId) {
			var self = this;
			if (this.type === 1) {
				var $avatorImg = $('#avator_' + userId),
					$avatorName = $('#avator_name_' + userId),
					$avatorPosition = $('#avator_position_' + userId),
					$avatorDescription = $('#avator_description_' + userId),
					$avatorCompany = $("#avator_company_" + userId);
				var imgUrl = $avatorImg.prop('src'),
					name = $avatorName.text(),
					position = $avatorPosition.text(),
					des = $avatorDescription.text() + $avatorCompany.text();

				// 写死是为了模拟
				var html = "<header class='message-header-private'>" +
					"<a href='' class='header-img-warp'>" +
					"<img src='" + imgUrl + "' alt='' class='header-img'>" +
					"</a>" +
					"<div class='header-des pull-left'>" +
					"<h3 class='name'><a href ='' title='" + name + "'> " + name + " </a><small> - " + position + "</small > </h3><p class ='headline'>" + des + " </p> </div> </header>";
				$(self.modalBox).find('.message-main').prepend(html);

			} else if (this.type === 2) {
				console.log(userId)
				var names = [],
					html = '',
					size = 0;
				$.each(userId, function() {
					names.push($('#avator_name_' + this).text())
				})
				size = names.length;

				for (var i = 0; i < names.length; i++) {
					html += "<span><a href=''>" + names[i] + "</a></span>";
				}
				// 写死是为了模拟
				var template = "<header class='message-header-all'>" + "<p class='firends'>Message to " + html + "等" + size + "人" + "</p>" + "</header>";
				$(self.modalBox).find('.message-main').prepend(template);

			}
		},
		_destroyHeader: function() {
			if (this.type === 1) {
				$(this.modalBox).find('.message-header-private').remove();
			} else if (this.type === 2) {
				$(this.modalBox).find('.message-header-all').remove();
			}

		},
		showChatBox: function() {
			var self = this;
			$(document).on('click', self.node, function(event) {
				event.preventDefault();
				var This = this;
				self.userIds = [];

				if (self.type === 1) {
					var userId = $(this).data('userid');
					self._renderHeader(userId);
				}

				if (self.type === 2) {
					self.$checkboxs.each(function(i, elem) {
						if ($(this).prop('checked')) {
							self.userIds.push($(this).data('userid'));
						}
					})
					self._renderHeader(self.userIds);
					if (!self.userIds.length) {
						layer.alert('还没有选定')
						return false;
					}
				}
				self.layer(This);
			})
		},
		layer: function(This) {
			var self = this;
			if (this.type === 1) {
				layer.open({
					type: '1',
					title: false,
					content: $(self.modalBox),
					area: ['500px', '300px'],
					btn: ['Submit', 'Cancel'],
					success: function(layero, index) {
						self.success(layero)
					},
					yes: function(index, layero) {
						var userId = $(This).data('userid');
						self.yes(index, layero, userId, This);
					},
					cancel: function(index) { //cancel回调
						self.cancel(This);
					}
				})
			} else if (this.type === 2) {
				layer.open({
					type: '1',
					title: '群发消息',
					content: $(self.modalBox),
					area: ['500px', 'auto'],
					btn: ['Submit', 'Cancel'],
					success: function(layero, index) {
						self.success(layero)
					},
					yes: function(index, layero) {
						self.yes(index, layero, self.userIds, This);
					},
					cancel: function(index) { //cancel回调
						self.cancel(This);
					}
				})
			}

		},
		success: function(layero) {
			// fix bug
			$(layero).find('.layui-layer-content').css({
				overflow: 'visible'
			})
		},
		yes: function(index, layero, userId, This) {
			var inputStr = $(this.inputBox).val(),
				Verify,
				loadIndex,
				status,
				self = this;

			Verify = tools.StringValidator(inputStr, {
				overSizeNum: 100, // 最大输入值，number
				noContentMsg: '输入不能为空', // 未填入内容提示
				overMaxMsg: '超过输入的最大值', //超过最大输入值提示
				illegalMsg: '请勿输入非法字符' //非法输入提示
			});

			if (!Verify) {
				return false;
			}
			// 先验证，再替换
			inputStr = emojiObj.emojiResolution(inputStr);

			// 需要上传的数据
			// userId 可能是单数，可能是负数
			var submitData = {
				userId: userId,
				inputStr: inputStr
			}

			// ajax操作，最关键的还是后台的验证方式，保证安全性
			if (!status) {
				$.ajax({
					url: self.ajaxUrl,
					type: 'get',
					data: submitData,
					timeout: 5 * 1000,
					beforeSend: function() {
						status = true; // 防止重复提交
						loadIndex = tools.beforeSend();
					},
					success: function(data) {
						tools.success(This, data, index, '发送成功', '发送失败')
					},
					complete: function() {
						tools.complete(This, loadIndex);
						status = false;
						$(self.inputBox).val('');
					},
					error: function(xhr, error) {
						tools.error('网络错误，请重试')
					}
				})
			}
		},
		cancel: function(This) {
			$(this.inputBox).val('');
			this._destroyHeader();
			tools.cancel(This);
		}
	}

	return {
		Message: Message
	}
})
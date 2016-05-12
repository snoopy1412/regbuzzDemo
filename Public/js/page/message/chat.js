define(['jquery', 'layerInit', 'tools', 'emoji'], function($, layerInit, tools, emoji) {

	// 表情初始化	
	var emojiObj = emoji.emoji,
		emojiContainer = '#emoji',
		emojiBtn = '#js_emojiBtn',
		inputBox = '#js_char-input';

	emojiObj.renderEmoji(emojiContainer);
	emojiObj.bindEmojiEvent(emojiContainer, emojiBtn, inputBox, {
		left: 0,
		bottom: '30px'
	});

	// 格式化时间
	Date.prototype.format = function(format) {
		var o = {
			"M+": this.getMonth() + 1, //month 
			"d+": this.getDate(), //day 
			"h+": this.getHours(), //hour 
			"m+": this.getMinutes(), //minute 
			"s+": this.getSeconds(), //second 
			"q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
			"S": this.getMilliseconds() //millisecond 
		}

		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		}

		for (var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
			}
		}
		return format;
	}
	var sendMessage = function() {
		var emojiObj = emoji.emoji,
			$inputBox = $('#js_char-input'),
			status = false,
			venderId = 322, // 对方id 如何获得？聊天对方
			userId = 1; // 本人id


		if (!status) {
			status = true;
			$('#js_message-reply').on('click', function() {
				var content = $inputBox.val();
				var self = this;
				var loadIndex;
				var verify = tools.StringValidator(content, {
					overSizeNum: 100, // 最大输入值，number
					noContentMsg: '未输入任何内容', // 未填入内容提示
					overMaxMsg: false, //超过最大输入值提示
					illegalMsg: '请勿输入html标签' //非法输入提示
				})
				if (!verify) {
					return verify;
				}

				var date = new Date(); //记录当前点击的时间;
   				var nowStr = date.format("yyyy-MM-dd hh:mm:ss"); 
				// 表情转换为html语句
				content = emojiObj.emojiResolution(content);
				var data = {
					userId: 1,
					venderId: venderId,
					time: date, //后台需处理
					content: content
				}
				$.ajax({
					url: 'data.js',
					type: 'get',
					data: data,
					timeout: 5 * 1000,
					beforeSend: function() {
						loadIndex = layer.load(2, {
							time: 5 * 1000
						});
						$(self).prop('disabled', 'true');
					},
					success: function(data) {
						var item = {
							name: 'Aaron Su',
							face: './Public/img/index/servers/2.jpg',
							content: content,
							time: nowStr
						}

						var $container = $('.message-detail-content');
						var html = "<div class='message message-right clearfix'>" +
							"<a href='' title='" + item.name + "' class='person-img pull-right'>" +
							"<img src='" + item.face + "'>" +
							"</a>" +
							"<div class='person-message pull-right'>" +
							"<p>" + item.content + "</p>" +
							"<span class='timeago pull-right'>" + item.time + "</span>" +
							"</div>" +
							"</div>";
						$container.append(html);

						// 滚动条一直在最底部
						$container.scrollTop($container[0].scrollHeight);
					},
					complete: function() {
						$(self).prop('disabled', false);
						layer.close(loadIndex);
						status = false;
						$inputBox.val('');
					},
					error: function(xhr, error) {
						tools.error('网络错误，请重试')
					}
				})
			})
		}
	}

	return {
		sendMessage: sendMessage
	}
})
define(['jquery'], function($) {
	var emoji = {
		renderEmoji: function(emojiContainer) {
			var html = '';
			for (var i = 1; i <= 12; i++) {
				html += "<li><img src='./Public/img/emoji/" + i + ".gif' title='[emoji:" + i + "]' data-title='[emoji:" + i + "]'/></li>";
			};
			html = '<ul>' + html + '</ul>'
			$(emojiContainer).append(html);
		},
		bindEmojiEvent: function(emojiContainer, emojiBtn, inputBox, position) {
			var self = this;

			// 显示表情
			$(emojiBtn).on('click', function(event) {
				var This = this;
				self.emojiShow(event, This, emojiContainer, position);
			})

			// 关闭表情
			$(document).on('click', function(event) {
				event.stopPropagation();
				$(emojiContainer).hide();
			})

			// 表情点击
			$(emojiContainer + ' li').off('click').on('click', function(event) {
				var This = this;
				self.emojiClick(This, inputBox);
			})
		},
		emojiShow: function(event, This, emojiContainer, position) {

			event.preventDefault();
			event.stopPropagation();
			if ($(emojiContainer).css('display') === 'none' || !$(emojiContainer).css('display')) {
				var left = $(This).position().left,
					top = $(This).position().top;
				if (position) {
					$(emojiContainer).css({
						display: 'block',
						left: position.left,
						bottom: position.bottom
					})
				} else {
					$(emojiContainer).css({
						display: 'block',
						left: left,
						bottom: 10
					})
				}

			} else {
				$(emojiContainer).hide()
			}
		},
		emojiClick: function(This, inputBox) {
			var str = $(This).find('img').attr('title'),
				inputStr = $(inputBox).val();
			inputStr += str;
			$(inputBox).val(inputStr);
		},
		emojiResolution: function(msg) { // 解析表情里面的图片并转化为html代码
			var reg = /\[emoji:\d+\]/g,
				result = msg;
			while (match = reg.exec(msg)) {
				emojiIndex = match[0].slice(7, -1);
				result = result.replace(match[0], "<img src='./Public/img/emoji/" + emojiIndex + ".gif'/>");
			};
			return result;
		}
	}
	return {
		emoji: emoji
	}
})
define(['jquery', './chat'], function($, chat) {
	var sendMessage = chat.sendMessage;
	var userId = 1;

	$.ajax({
		type: 'get',
		url: './Public/data/message.json',
		timeout: 5 * 1000,
		beforeSend: function() {
			$('.loading2').show();
			$('.message-detail').hide();
		},
		success: function(data) {
			var html='', dividerHtml;
			$.each(data.message, function(i, item) {

				if (item.spokesmanId == userId) {
					html += "<div class='message message-right clearfix'>" +
						"<a href='' title='" + item.name + "' class='person-img pull-right'>" +
						"<img src='" + item.face + "'>" +
						"</a>" +
						"<div class='person-message pull-right'>" +
						"<p>" + item.content + "</p>" +
						"<span class='timeago'>" + item.time + "</span>" +
						"</div>" +
						"</div>";
				} else {
					html += "<div class='message message-left clearfix'>" +
						"<a href='' title='" + item.name + "' class='person-img pull-left'>" +
						"<img src='" + item.face + "'>" +
						"</a>" +
						"<div class='person-message pull-left'>" +
						"<p>" + item.content + "</p>" +
						"<span class='timeago'>" + item.time + "</span>" +
						"</div>" +
						"</div>";
				}
				dividerHtml = "<div class='divider divider-horizontal'>历史信息</div>";

				
			})
			$('.message-detail-content').append(html).append(dividerHtml);
			// chat 初始化
				sendMessage();

		},
		complete: function() {
			$('.loading2').hide();
			$('.message-detail').fadeIn();
		},
		error: function(xhr, error) {
			console.log(error)
		}
	})
})
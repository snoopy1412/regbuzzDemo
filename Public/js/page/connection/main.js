define(function(require) {

	var $ = require('jquery'),
		check = require('check'),
		message = require('message');

	require('./delete');
	require('./invite');

	// 全选或不选
	$.check({
		checkall_name: "connectionAll",
		checkbox_name: "connectionBox"
	})

	// 私聊
	new message.Message('.js_connection-message');

	// 选中群聊
	new message.Message('#js_connection-message-all', {
		type: 2, // 1 私聊，2 群聊
		modalBox: '#connect-message-all',
		inputBox: '#js_message-textarea-all',
		emojiBtn: '#js_emojiBtn-all',
		emojiContainer: '#emoji-all',
		ajaxUrl: 'data.js'
	});
});
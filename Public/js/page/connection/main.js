require(['jquery','check','message','./page/connection/delete','./page/connection/invite'],function($,check,message){
	// 全选或不选
	$.check({
		checkall_name: "connectionAll",
		checkbox_name: "connectionBox"
	})

	// 私聊
	new message.Message('.js_connection-message');

	// 选中群聊
	new message.Message('#js_connection-message-all',{
		type: 2, // 1 私聊，2 群聊
		modalBox: '#connect-message-all',
		inputBox: '#js_message-textarea-all',
		emojiBtn: '#js_emojiBtn-all',
		emojiContainer: '#emoji-all',
		ajaxUrl: 'data.js'
	});
});
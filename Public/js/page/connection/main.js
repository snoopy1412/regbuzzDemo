require(['jquery','check','message'],function($,check,message){
	// 全选或不选
	$.check({
		checkall_name: "connectionAll",
		checkbox_name: "connectionBox"
	})

	// 私聊
	// new message.Message('.js_connection-message');

	// 选中群聊
	new message.Message('#js_connection-message-all',{
		type:2
	});
});
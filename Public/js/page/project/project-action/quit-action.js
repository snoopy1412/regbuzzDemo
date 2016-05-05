define(['jquery', 'popupConfirm'], function($) {
	$.popupConfirm({
		popupBtn: '.action_quit',
		modalTitle: '放弃任务',
		modalContent: 'Are your sure to quit your project?',
		ajaxUrl: 'data.js',
		successMsg: '成功放弃',
		failMsg: '放弃失败',
		errorMsg: '网络错误，请重试',
	});
})
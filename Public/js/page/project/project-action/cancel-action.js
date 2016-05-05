define(['jquery', 'popupConfirm'], function($) {
	$.popupConfirm({
		popupBtn: '.action_cancel',
		modalTitle: '取消项目',
		modalContent: 'Are your sure to cancel your project?',
		ajaxUrl: 'data.js',
		successMsg: '取消成功',
		failMsg: '取消失败',
		errorMsg: '网络错误，请重试',
	});
})
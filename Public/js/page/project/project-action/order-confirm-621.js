define(['jquery', 'popupConfirm'], function($) {
	$.popupConfirm({
		popupBtn: '.action_621',
		modalTitle: '确认延期',
		modalContent: '确定收到订单吗?',
		ajaxUrl: 'data.js',
		successMsg: '确认成功',
		failMsg: '确认失败',
		errorMsg: '网络错误，请重试',
	});
})
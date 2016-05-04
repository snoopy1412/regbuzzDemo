define(['jquery', '../../../layerInit', 'popupConfirm'], function($) {
	$.popupConfirm({
		popupBtn: '.action_711',
		modalTitle: '确认完成项目',
		modalContent: '确定完成了工作吗？',
		ajaxUrl: 'data.js',
		successMsg: '确认成功',
		failMsg: '确认失败',
		errorMsg: '网络错误，请重试',
	});
})
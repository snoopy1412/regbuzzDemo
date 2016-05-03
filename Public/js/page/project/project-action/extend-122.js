define(['jquery', '../../../layerInit', 'popupConfirm'], function($) {
	$.popupConfirm({
		popupBtn: '.action_122',
		modalTitle: '确认延期',
		modalContent: '确定延长3个工作日的招标时间吗？',
		ajaxUrl: 'data.js',
		successMsg: '确认成功',
		failMsg: '确认失败',
		errorMsg: '网络错误，请重试',
	});
})
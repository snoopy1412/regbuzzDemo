define(['jquery', '../../../layerInit', 'popupConfirm'], function($) {
	$.popupConfirm({
		popupBtn: '.action_331',
		modalTitle: '项目确认',
		modalContent: '是否确认项目已经顺利完成？',
		ajaxUrl: 'data.js',
		successMsg: '确认成功',
		failMsg: '确认失败',
		errorMsg: '网络错误，请重试',
	});
})
define(['jquery', '../../../layerInit', 'popupConfirm'], function($) {
    $.popupConfirm({
        popupBtn:'.action_341',
        modalTitle: '付款确认',
        modalContent: '是否将佣金支付给咨询师？?',
        ajaxUrl: 'data.js',
        successMsg: '交易成功',
        failMsg: '交易失败',
        errorMsg: '网络错误，请重试',
    });
})
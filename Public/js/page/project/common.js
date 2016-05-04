define(function(require) {

	// 引入库
	var $ = require('jquery');
	require('bootstrapTable');

	// 公用action
	// 公共取消
	require('./project-action/cancel-action');
	require('./project-action/quit-action');
	require('./project-action/add-action');
	require('./project-action/reason-action');
})
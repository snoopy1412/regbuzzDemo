define(function(require) {
	var hashChange = require('./hash-change'); //引入hash-change , bootstrap的tab事件本身无法保存相应的tab-pane
	hashChange.hashChange.init();

	// 公共取消
	require('./project-action/quit-action');

	/**
	 * 一些定义	
	 * 	项目对应状态的动作 data-action
	 */

	// 5. Active Bids
	// 	5-1 Opening for bids		
	// 		5-1-1 add
	// require('./project-action/add-action');
	// 		5-1-2 quit
	// 	5-2 Waiting for Result
	// 		5-2-1 quit

	// 6. order-placing;
	// 	6-1 Waiting for the order	
	// 		6-1-1 quit
	// 	6-2 Order received
	// 		6-2-1 Order Confirm
	require('./project-action/order-confirm-621');
	// 		6-2-2 quit	
	// 	6-3 Waiting for payment
	// 		6-3-1 quit

	// 7. Current Work;
	// 	7-1 Working	
	// 		7-1-1 Job Done
	require('./project-action/job-done-711');
	// 		7-1-2 Quit
	// 	7-2 Waiting for Receipt confirm	
	// 	7-3 Waiting for Payment	
	// 	7-4 Waiting for Comments	
	// 	
	// 8. past-placeing
	// 	8-1 Success	
	// 	8-2 Failed
	// 		8-2-1 Reason
	require('./project-action/reason-action');
})
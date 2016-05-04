define(function(require) {
	var hashChange = require('./hash-change'); //引入hash-change , bootstrap的tab事件本身无法保存相应的tab-pane
	hashChange.hashChange.init();

	/**
	 * 一些定义	
	 * 	项目对应状态的动作 data-action
	 */

	// 1. open-for-bidding;
	// 	1-1 Waiting for bids	
	// 		1-1-1 add
	// 		1-1-2 invite
	// 		1-1-3 select 
	// 		1-1-4 cancel
	// 	1-2 Proposal Selecting	
	// 		1-2-1 select
	// 		1-2-2 extend
	// 		1-2-3 cancel

	// 2. order-placing;
	// 	2-1 Order Drafting
	// 		2-1-1 Edit
	// 		2-1-2 Cancel
	// 	2-2 Waiting for confirmation
	// 		2-2-1 Edit
	// 		2-2-2 Cancel	
	// 	2-3 Order confirmed	
	// 		2-3-1 Pay
	// 		2-3-2 Cancel

	// 3. work-in-progress;
	// 	3-1 Waiting for Deliverables	
	// 		3-1-1 Extend
	// 		3-1-2 Cancel
	// 	3-2 Time out	
	// 		3-2-1 Extend
	// 		3-2-2 Refund
	// 	3-3 Job done	
	// 		3-3-1 Receipt Confirm
	// 		3-3-2 Refund
	// 	3-4 Receipt confirmed	
	// 		3-4-1 Release Money
	// 	3-5 Payed
	// 		3-5-1 Write Reviews


	// 4. past-placeing
	// 	4-1 Success
	// 		4-1-1 Add Comment
	// 		4-1-2 Dispute	
	// 	4-2 Failed
	// 		4-2-1 Reason
	// 		4-2-2 Dispute

	require('./project-action/extend-122');
	require('./project-action/pay-231');
	require('./project-action/extend-action-3');
	require('./project-action/refund-action-3');
	require('./project-action/receipt-confirm-331');
	require('./project-action/release-money-341');
	require('./project-action/write-reviews-351');
	require('./project-action/dispute-action-4');
	require('./project-action/add-comment-411');
})
define(function(require) {
	var hashChange = require('./hash-change'); //引入hash-change , bootstrap的tab事件本身无法保存相应的tab-pane
	hashChange.hashChange.init();

	// 公共
	require('./project-action/cancel-action');
	require('./project-action/quit-action');
	require('./project-action/reason-action');
	require('./project-action/add-action');

	// 雇主
	require('./project-action/invite-112');
	require('./project-action/extend-122');
	require('./project-action/pay-231');
	require('./project-action/extend-action-3');
	require('./project-action/refund-action-3');
	require('./project-action/receipt-confirm-331');
	require('./project-action/release-money-341');
	require('./project-action/write-reviews-351');
	require('./project-action/dispute-action-4');
	require('./project-action/add-comment-411');

	// 咨询师
	require('./project-action/order-confirm-621');
	require('./project-action/job-done-711');
})

/**
 * 一些定义	
 * 	项目对应状态的动作 data-action 雇主行为
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
// 	

/**
 * 一些定义	
 * 	项目对应状态的动作 data-action 咨询师部分
 */
// 5. Active Bids
// 	5-1 Opening for bids		
// 		5-1-1 add
// 		5-1-2 quit
// 	5-2 Waiting for Result
// 		5-2-1 quit

// 6. order-placing;
// 	6-1 Waiting for the order	
// 		6-1-1 quit
// 	6-2 Order received
// 		6-2-1 Order Confirm
// 		6-2-2 quit	
// 	6-3 Waiting for payment
// 		6-3-1 quit

// 7. Current Work;
// 	7-1 Working	
// 		7-1-1 Job Done
// 		7-1-2 Quit
// 	7-2 Waiting for Receipt confirm	
// 	7-3 Waiting for Payment	
// 	7-4 Waiting for Comments	
// 	
// 8. past-placeing
// 	8-1 Success	
// 	8-2 Failed
// 		8-2-1 Reason
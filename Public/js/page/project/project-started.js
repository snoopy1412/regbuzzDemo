define(function(require) {
	var hashChange = require('./hash-change'); //引入hash-change , bootstrap的tab事件本身无法保存相应的tab-pane
	hashChange.hashChange.init();


	/**
	 * 一些定义
	 * 			
     * 	项目对应的状态 data-status
		open-for-bidding;
			11 Waiting for bids	
			12 Proposal Selecting	

		order-placing;
			21 Order Drafting	
			22 Waiting for confirmation	
			23 Order confirmed	

		work-in-progress;
			31 Waiting for Deliverables	
			32 Time out	
			33 Job done	
			34 Receipt confirmed	
			35 Payed
		
		// past-placeing
			41 Success	
			42 Failed
	 */
	
	require('./project-started/e_open-for-bidding');
	require('./project-started/e_order-placing');
	require('./project-started/e_work-in-progress');
	require('./project-started/e_past-project');
})
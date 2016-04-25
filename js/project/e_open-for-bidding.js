define(['jquery'], function($) {

	// Waiting for bids 的相关action

	// add 操作
	$('.open-waiting-add').on("show.bs.modal", function(event) {
		var self = this,
			$button = $(event.relatedTarget),
			userId = $button.data('userId'),
			projectId = $button.data('projectId');
		var $text = $(this).find('.js_open-waiting-add-content'); //获得textarea

		/* open-waiting-add 内部的操作 */
		$(document).on('click', '.js_open-waiting-add', function() {
			var textStr = $text.val().replace(/<\/?[^>]*>/g, ''), //去除HTML tag
				strSize = 20; // 能输入的最大值

			// 错误提示
			// 情况1 ，为空
			if (textStr.trim() === '') {
				alert('请输入添加的内容')
				return false;

			} else if (textStr.trim().length > strSize) {

				// 情况2 ，超过最大值
				alert('超过最大输入值')
				return false;
			}

			// $.ajax 操作，由于已经获得了userId和projectId，可以很容易的进行API操作
			// $.ajax({
			// 	type : 'post',
			// 	data : data ,
			// 	timeout : 5 * 1000,
			// 	success:function(data){
			// 		// 执行回调函数
			// 		$(self).modal('hide');
			// 	},
			// 	error:function(){

			// 	}
			// })
		}) // 模态框show事件
	})

	$('.open-waiting-add').on("hide.bs.modal", function(event) {
		var self = this,
			$button = $(event.relatedTarget),
			userId = $button.data('userId'),
			projectId = $button.data('projectId');
		var $text = $(this).find('.js_open-waiting-add-content'); //获得textarea

		$text.val(''); //值清空 // 模态框hide事件
	})

	// cancel 操作
	$('.modal-cancel').on("show.bs.modal", function(event) {
		var self = this,
			$button = $(event.relatedTarget),
			userId = $button.data('userId'),
			projectId = $button.data('projectId');

			$(document).on('click','.js_open-waiting-cancel',function(){

				/**
				 * userId,projectId
				 */
				
				// $.ajax 操作，并记得关闭模态框	

			})
	})

})
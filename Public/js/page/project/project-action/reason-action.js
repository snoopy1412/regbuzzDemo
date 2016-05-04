define(['jquery', 'raty', '../../../layerInit'], function($, raty) {
	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	// data-reason 模拟的失败原因
	// 1. 可能是因为双方友好的协商
	// 2. 可命名为咨询师无法按时完成任务
	var width = $(window).width();
	if (width >= 768) {
		resultWidth = '600px';
	} else {
		resultWidth = (width - 30) + 'px';
	}

	$(document).on('click', '.action_reason', function(event) {
		event.preventDefault();
		var self = this,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			projectReason = $(this).data('projectreason'),
			url, obj, param;
		obj = {
			projectid: projectId,
			projectaction: projectAction,
			projectreason: projectReason
		}
		param = $.param(obj);
		url = 'reason.js?' + param;
		
		$(this).data('canclick', true);
		$.get(url, {}, function(data) {
			msgStr = data;
			console.log(msgStr)
			if ($(self).data('canclick')) {
				$(self).data('canclick', false).addClass('action-active');
				layer.alert(msgStr, {
					title:'失败原因'
				}, function(index) {
					$(self).data('canclick', true).removeClass('action-active');
					layer.close(index);
				});
			}
		})



	})
})
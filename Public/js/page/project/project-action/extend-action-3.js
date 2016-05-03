define(['jquery', 'datetimepicker', '../../../layerInit'], function($, datetimepicker) {
	$(document).on('click', '.action_extend', function(event) {
		event.preventDefault();
		var self = this,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			layerDom,
			choiceTime; //选取的日期

		$(this).data('canclick', true);
		if ($(this).data('canclick')) {
			$(this).data('canclick', false).addClass('action-active');
			layer.open({
				type: '1',
				title: '申请延期',
				content: $('#work-extend'),
				btn: ['Confirm', 'Cancel'],
				success: function(layero, index) {

					layerDom = layero;

					// 日历插件初始化
					$(layero).find('.layui-layer-content').css({
						overflow: 'visible'
					})
					$('#datetimepicker6').datetimepicker({
						format: 'YYYY-MM-DD',
						useCurrent: true
					});

					$("#datetimepicker6").on("dp.change", function(e) {
						choiceTime = e.date._d;
						$('#datetimepicker6').data("DateTimePicker").minDate(e.date);
					});
				},
				yes: function(index, layero) { //add的回调
					var loadIndex,
						status = false;
					
					if(!choiceTime){
						layer.alert('未选定时间',{icon:3});
						return false;
					}

					// 需要上传的数据
					var submitData = {
						projectId: projectId,
						projectAction: projectAction
					}

					// ajax操作，最关键的还是后台的验证方式，保证安全性
					if (!status) {
						$.ajax({
							url: 'data.js',
							type: 'get',
							data: submitData,
							timeout: 5 * 1000,
							beforeSend: function() {
								status = true; // 防止重复提交
								loadIndex = layer.load(2, {
									time: 5 * 1000
								});
							},
							success: function(data) {
								if (data === 'true') {
									layer.msg('延期成功', {
										icon: 1,
										time: 500
									});
									// 执行回调函数
									layer.close(index);
								} else {
									layer.msg('延期失败', {
										icon: 2,
										time: 1000
									});
									$(this).data('canclick', true)
										// 执行回调函数
									layer.close(index);
								}
							},
							complete: function() {
								layer.close(loadIndex);
								status = false;
								$('#js_datatime-text').val('');
								$(self).data('canclick', true).removeClass('action-active');
							},
							error: function(xhr, error) {
								console.log(xhr, error)
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					$(layerDom).find('.layui-layer-content').css({
						overflow: 'auto'
					})
					$('#js_datatime-text').val('');
					$(self).data('canclick', true).removeClass('action-active');
				}
			})
		}

	})
})
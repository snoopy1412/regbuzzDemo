define(['jquery', 'datetimepicker', 'tools', '../../../layerInit'], function($, datetimepicker,tools) {

	tools.bindEvent('.action_extend', function() {
		var self = this,
			projectId = tools.getData(this).projectId,
			projectAction = tools.getData(this).projectAction,
			layerDom,
			choiceTime; //选取的日期

		tools.canclick(this, function() {
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

					if (!choiceTime) {
						layer.alert('未选定时间', {
							icon: 3
						});
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
								loadIndex = tools.beforeSend();
							},
							success: function(data) {
								tools.success(self, data, index, '延期成功', '延期失败')
							},
							complete: function() {
								tools.complete(self, loadIndex);
								status = false;
								$('#js_datatime-text').val('');
							},
							error: function(xhr, error) {
								tools.error('网络错误，请重试')
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					$(layerDom).find('.layui-layer-content').css({
						overflow: 'auto'
					})
					$('#js_datatime-text').val('');
					tools.cancel(self);
				}
			})
		})
	})
})
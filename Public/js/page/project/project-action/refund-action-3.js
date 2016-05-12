define(['jquery', 'datetimepicker', 'tools', '../../../layerInit'], function($, datetimepicker, tools) {
	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var resultWidth = tools.getWidth();
	tools.bindEvent('.action_refund', function() {
		var self = this,
			status = false,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			$reason = $('#work-refund-reason'),
			$reasonAdd = $("#work-refund-reason_add"),
			selectData = [];
		tools.canclick(this, function() {
			layer.open({
				type: '1',
				title: '申请退款',
				area: [resultWidth, 'auto'],
				content: $('#work-refund'),
				btn: ['Confirm', 'Cancel'],
				yes: function(index, layero) { //add的回调
					var loadIndex,
						selectVal = $reason.val(), // 数组
						addVal = $reasonAdd.val(); //字符串	
					//情况判断
					if (selectVal === null && addVal === '') {
						layer.alert('原因不能为空', {
							icon: 3
						});
						return false;
					}

					if (selectVal !== null) {
						for (var i = 0; i < selectVal.length; i++) {
							selectData.push({
								text: selectVal[i]
							})
						}
					}
					if (addVal !== '') {
						selectData.push({
							text: addVal
						})
					}


					// ajax操作，最关键的还是后台的验证方式，保证安全性
					if (!status && selectData.length) {

						// 需要上传的数据
						var submitData = {
							projectId: projectId,
							projectAction: projectAction,
							selectData: selectData
						}
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
								tools.success(self, data, index, '申请成功', '申请失败')
							},
							complete: function() {
								tools.complete(self, loadIndex);
								status = false;
								$reason.val('');
								$reasonAdd.val('');
							},
							error: function(xhr, error) {
								tools.error('网络错误，请重试')
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					tools.cancel(self);
					$reason.val('');
					$reasonAdd.val('');
				}
			})
		})
	})
})
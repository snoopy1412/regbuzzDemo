define(['jquery', 'datetimepicker', '../../../layerInit'], function($, datetimepicker) {
	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var width = $(window).width();

	if (width >= 768) {
		resultWidth = '600px';
	} else {
		resultWidth = (width - 30) + 'px';
	}
	$(document).on('click', '.action_refund', function(event) {
		event.preventDefault();
		var self = this,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			$reason = $('#work-refund-reason'),
			$reasonAdd = $("#work-refund-reason_add"),
			selectData = [];

		$(this).data('canclick', true);
		if ($(this).data('canclick')) {
			$(this).data('canclick', false).addClass('action-active');
			layer.open({
				type: '1',
				title: '申请退款',
				area: [resultWidth, 'auto'],
				content: $('#work-refund'),
				btn: ['Confirm', 'Cancel'],
				success: function(layero, index) {

				},
				yes: function(index, layero) { //add的回调
					var loadIndex,
						status = false,
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
								loadIndex = layer.load(2, {
									time: 5 * 1000
								});
							},
							success: function(data) {
								if (data === 'true') {
									layer.msg('申请成功', {
										icon: 1,
										time: 500
									});
									// 执行回调函数
									layer.close(index);
								} else {
									layer.msg('申请失败', {
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
								$(self).data('canclick', true).removeClass('action-active');
								$reason.val('');
								$reasonAdd.val('');
							},
							error: function(xhr, error) {
								console.log(xhr, error)
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					$(self).data('canclick', true).removeClass('action-active');
					$reason.val('');
					$reasonAdd.val('');
				}
			})
		}

	})
})
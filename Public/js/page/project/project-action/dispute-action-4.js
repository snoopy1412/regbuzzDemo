define(['jquery', 'raty', './library', '../../../layerInit'], function($, raty, library) {
	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var library = library.action;

	$(document).on('click', '.action_dispute', function(event) {
		event.preventDefault();
		var self = this,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			titleMaxSize = 20,
			textareaMaxSize = 100,
			$title = $('#js_dispute-title-4'),
			$textarea = $('#js_dispute-description-4');

		$(this).data('canclick', true);
		if ($(this).data('canclick')) {
			$(this).data('canclick', false).addClass('action-active');
			layer.open({
				type: '1',
				title: '纠纷',
				content: $('#past-dispute'),
				area: [resultWidth, 'auto'],
				btn: ['Add', 'Cancel'],
				yes: function(index, layero) { //add的回调
					var loadIndex,
						titleStr = $title.val(),
						textareaStr = $textarea.val(),
						status = false;

					// 错误提示
					if (titleStr.trim() === '' || textareaStr.trim() === '') { // 情况1 ，未填入字符
						layer.alert('缺少纠纷标题或描述', {
							icon: 0
						});
						return false;
					} else if (titleStr.trim().length > titleMaxSize || textareaStr.trim().length > textareaMaxSize) { // 情况2 ，超过最大值
						layer.alert('标题或描述超过最大输入值', {
							icon: 0
						});
						return false;
					}

					// 需要上传的数据
					var submitData = {
						projectId: projectId,
						projectAction: projectAction,
						titleStr: titleStr,
						textareaStr: textareaStr
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
									layer.msg('评价成功', {
										icon: 1,
										time: 500
									});
									// 执行回调函数
									layer.close(index);
								} else {
									layer.msg('评价失败', {
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
								$title.val('');
								$textarea.val('');
								$(self).data('canclick', true).removeClass('action-active');
							},
							error: function(xhr, error) {
								console.log(xhr, error)
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					$title.val('');
					$textarea.val('');
					$(self).data('canclick', true).removeClass('action-active');
				}
			})
		}

	})
})
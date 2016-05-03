define(['jquery', '../../../layerInit'], function($) {
	$(document).on('click', '.action_111', function(event) {
		event.preventDefault();
		var self = this,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			inputMaxSize = 100,
			$textarea = $('#js_111_content');

		$(this).data('canclick', true);
		if ($(this).data('canclick')) {
			$(this).data('canclick', false).addClass('action-active');
			layer.open({
				type: '1',
				title: '附加要求',
				content: $('.open-waiting-add'),
				btn: ['Add', 'Cancel'],
				yes: function(index, layero) { //add的回调
					var str = $textarea.val().replace(/<\/?[^>]*>/g, ''), //去除HTML tag
						loadIndex,
						status = false;

					// 错误提示
					if (str.trim() === '') { // 情况1 ，未填入字符
						layer.alert('输入不能为空', {
							icon: 0
						});
						return false;
					} else if (str.trim().length > inputMaxSize) { // 情况2 ，超过最大值
						layer.alert('超过输入的最大值', {
							icon: 0
						});
						return false;
					}

					// 需要上传的数据
					var submitData = {
						projectId: projectId,
						projectAction: projectAction,
						str: str
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
									layer.msg('添加成功', {
										icon: 1,
										time: 500
									});
									// 执行回调函数
									layer.close(index);
								} else {
									layer.msg('添加失败', {
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
					$textarea.val('');
					$(self).data('canclick', true).removeClass('action-active');
				}
			})
		}

	})
})
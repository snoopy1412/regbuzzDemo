define(['jquery', './library', '../../../layerInit'], function($, library) {

	$(document).on('click', '.action_411', function(event) {
		event.preventDefault();
		var self = this,
			projectId = library.getData().projectId,
			projectAction = library.getData().projectAction,
			inputMaxSize = 100,
			$textarea = $('#js_411-content');

		library.canclick(this, function() {
			layer.open({
				type: '1',
				title: '追加评论',
				content: $('#past-success-comment'),
				btn: ['Add', 'Cancel'],
				yes: function(index, layero) { //add的回调
					var loadIndex,
						str = $textarea.val(),
						status = false;

					// 错误提示
					if (str.trim() === '') { // 情况1 ，未填入字符
						layer.alert('您还没有进行评分', {
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
								loadIndex = library.beforeSend();
							},
							success: function(data) {
								library.success(self, data, index, '评价成功', '评价失败')
							},
							complete: function() {
								library.complete(self, loadIndex);
								status = false;
								$textarea.val('');
							},
							error: function(xhr, error) {
								library.error('网络错误，请重试')
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					library.cancel(self);
					$textarea.val('');
				}
			})
		})


	})
})
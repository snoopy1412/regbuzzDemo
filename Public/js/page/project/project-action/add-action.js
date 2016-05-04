define(['jquery', './library', '../../../layerInit'], function($, library) {
	var library = library.action;
	$(document).on('click', '.action_add', function(event) {
		event.preventDefault();
		var self = this,
			projectId = library.getData().projectId,
			projectAction = library.getData().projectAction,
			inputMaxSize = 100,
			$textarea = $('#js_111_content');
		library.canclick(this, function() {
			layer.open({
				type: '1',
				title: '附加要求',
				content: $('.open-waiting-add'),
				btn: ['Add', 'Cancel'],
				yes: function(index, layero) { //add的回调
					var loadIndex, status, str = $textarea.val();

					// 验证字符串的有效性
					var Verify = library.addVerify(str, 100, '输入不能为空', '超过输入的最大值', '请勿输入非法字符');
					if(!Verify){
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
								library.success(self, data, index, '添加成功', '添加失败')
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
					$textarea.val('');
					library.cancel(self);
				}
			})
		})
	})
})
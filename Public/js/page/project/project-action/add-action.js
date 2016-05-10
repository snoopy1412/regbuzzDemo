define(['jquery', 'tools', '../../../layerInit'], function($, tools) {

	tools.bindEvent('.action_add', function() {
		var self = this,
			projectId = tools.getData(this).projectId,
			projectAction = tools.getData(this).projectAction,
			$textarea = $('#js_111_content');

		tools.canclick(this, function() {
			layer.open({
				type: '1',
				title: '附加要求',
				content: $('.open-waiting-add'),
				btn: ['Add', 'Cancel'],
				yes: function(index, layero) { //add的回调
					var loadIndex, status, str = $textarea.val();

					// 验证字符串的有效性
					var verify = tools.StringValidator(str, {
						overSizeNum: 100, // 最大输入值，number
						noContentMsg: '输入不能为空', // 未填入内容提示
						overMaxMsg: '超过输入的最大值', //超过最大输入值提示
						illegalMsg: '请勿输入非法字符'
					})

					if (!verify) {
						return verify;
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
								loadIndex = tools.beforeSend();
							},
							success: function(data) {
								tools.success(self, data, index, '添加成功', '添加失败')
							},
							complete: function() {
								tools.complete(self, loadIndex);
								status = false;
								$textarea.val('');
							},
							error: function(xhr, error) {
								tools.error('网络错误，请重试')
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					$textarea.val('');
					tools.cancel(self);
				}
			})
		})
	})
})
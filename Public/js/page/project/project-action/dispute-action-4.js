define(['jquery', 'raty', './library', '../../../layerInit'], function($, raty, library) {

	var library = library.action;

	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var resultWidth = library.getWidth();
	library.bindEvent('.action_dispute', function() {
		var self = this,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			$title = $('#js_dispute-title-4'),
			$textarea = $('#js_dispute-description-4');

		library.canclick(this, function() {
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

						
					// 验证字符串的有效性
					var VerifyTitle = library.addVerify(titleStr, 20, '标题输入不能为空', '标题超过输入的最大值', '请勿输入非法字符');
					if (!VerifyTitle) {
						return false;
					}
					var VerifyTextarea = library.addVerify(textareaStr, 100, '内容输入不能为空', '内容超过输入的最大值', '请勿输入非法字符');
					if (!VerifyTextarea) {
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
								loadIndex = library.beforeSend();
							},
							success: function(data) {
								library.success(self, data, index, '评价成功', '评价失败')
							},
							complete: function() {
								library.complete(self, loadIndex);
								status = false;
								$title.val('');
								$textarea.val('');
							},
							error: function(xhr, error) {
								library.error('网络错误，请重试')
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					$title.val('');
					$textarea.val('');
					library.cancel(self);
				}
			})
		})
	})

})
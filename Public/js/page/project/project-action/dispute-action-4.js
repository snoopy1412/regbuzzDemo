define(['jquery', 'raty', 'tools', '../../../layerInit'], function($, raty, tools) {

	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var resultWidth = tools.getWidth();
	tools.bindEvent('.action_dispute', function() {
		var self = this,
			projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			$title = $('#js_dispute-title-4'),
			$textarea = $('#js_dispute-description-4');

		tools.canclick(this, function() {
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

					var titleVerify = tools.StringValidator(titleStr, {
						overSizeNum: 100, // 最大输入值，number
						noContentMsg: '标题输入不能为空', // 未填入内容提示
						overMaxMsg: '标题超过输入的最大值', //超过最大输入值提示
						illegalMsg: '请勿输入非法字符'
					})
					if (!titleVerify) {
						return titleVerify;
					}

					var textareaVerify = tools.StringValidator(textareaStr, {
						overSizeNum: 100, // 最大输入值，number
						noContentMsg: '内容输入不能为空', // 未填入内容提示
						overMaxMsg: '内容超过输入的最大值', //超过最大输入值提示
						illegalMsg: '请勿输入非法字符'
					})
					if(!textareaVerify){
						return textareaVerify;
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
								loadIndex = tools.beforeSend();
							},
							success: function(data) {
								tools.success(self, data, index, '评价成功', '评价失败')
							},
							complete: function() {
								tools.complete(self, loadIndex);
								status = false;
								$title.val('');
								$textarea.val('');
							},
							error: function(xhr, error) {
								tools.error('网络错误，请重试')
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					$title.val('');
					$textarea.val('');
					tools.cancel(self);
				}
			})
		})
	})

})
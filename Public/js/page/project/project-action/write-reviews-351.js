define(['jquery', 
	'raty', 
	'tools', 
	'../../../layerInit'
	], function($, raty, tools) {

	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var resultWidth = tools.getWidth();
	tools.bindEvent('.action_351', function() {
		var self = this,
			status = false,
			projectId = tools.getData(this).projectId,
			projectAction = tools.getData(this).projectAction,
			inputMaxSize = 100,
			$textarea = $('#js_351-content'),
			evaluatedScore;

		tools.canclick(this, function() {
			layer.open({
				type: '1',
				title: '服务评价',
				content: $('#work-payed-reviews'),
				area: [resultWidth, 'auto'],
				btn: ['Add', 'Cancel'],
				success: function() {
					// 获得评分
					$('.work-reviews-score-container').raty({
						half: true,
						score: 'bad',
						precision: false,
						hints: ['Poor!', 'Fair!', 'Average!', 'Good!', 'Excellent!'],
						path: './Public/img/stars',
						target: '.work-reviews-score',
						targetKeep: true,
						click: function(score, evt) {
							evaluatedScore = score;
						}
					});
				},
				yes: function(index, layero) { //add的回调
					var loadIndex,
						str = $textarea.val();

					// 错误提示
					if (evaluatedScore === undefined) { // 情况1 ，未填入字符
						layer.alert('您还没有进行评分', {
							icon: 0
						});
						return false;
					}

					// 情况2 ，超过最大值
					var verify = tools.addVerify(str, 100, '', '超过输入的最大值', '请勿输入非法字符');
					if (!verify) {
						return verify;
					}

					// 需要上传的数据
					var submitData = {
						projectId: projectId,
						projectAction: projectAction
					}

					if (evaluatedScore !== undefined) {
						submitData['evaluatedScore'] = evaluatedScore;
					}
					if (str.trim() !== '') {
						submitData['str'] = str;
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
					$textarea.focus();
					tools.cancel(self);
				}
			})
		})
	})
})
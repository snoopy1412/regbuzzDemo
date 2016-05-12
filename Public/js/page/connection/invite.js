define(['jquery', 'layerInit', 'tools'], function($, layerInit, tools) {

	$(document).on('click', '.js_connection-invite', function(event) {
		event.preventDefault();

		var userId, type, submitData, self = this,
			status;
		if ($(this).data('userid')) {
			type = 1; // 删除单人
			userId = $(this).data('userid');
		} else {
			type = 2;
		}

		layer.alert('是否邀请好友参加您的项目', {
			icon: 3
		}, function(index) {
			if (type === 1) {
				var loadIndex;

				// 需要上传的数据
				var submitData = {
					userId: userId
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
							tools.success(self, data, index, '已发出邀请', '邀请失败', function() {
								window.location.reload();
							})
						},
						complete: function() {
							layer.close(loadIndex);
							status = false;
						},
						error: function(xhr, error) {
							tools.error('网络错误，请重试')
						}
					})
				}
			} else if (type === 2) {
				var loadIndex, status;

				// userId
				var $checkboxs = $('.connect-list-section').find('.connect-frends-checkbox'),
					userIds = [];
				$checkboxs.each(function(i, elem) {
					if ($(this).prop('checked')) {
						userIds.push($(this).data('userid'));
					}
				})
				if (!userIds.length) {
					layer.alert('还没有选定')
					return false;
					// 需要上传的数据
				}
				var submitData = {
					userId: userIds
				}

				console.log(submitData.userId)

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
							tools.success(self, data, index, '已发出邀请', '邀请失败', function() {
								window.location.reload();
							})
						},
						complete: function() {
							layer.close(loadIndex);
							status = false;
						},
						error: function(xhr, error) {
							tools.error('网络错误，请重试')
						}
					})
				}
			}
		})



	})
})
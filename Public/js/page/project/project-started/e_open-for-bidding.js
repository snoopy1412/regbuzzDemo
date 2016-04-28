define(['jquery'], function($) {

	// add 操作
	$('.open-waiting-add').on("show.bs.modal", function(event) {
		var self = this,
			status = false,
			$button = $(event.relatedTarget), // 获得
			$text = $(this).find('#js_open-waiting-add-content'), //获得textarea
			userId = $button.data('userId'), // 获得用户id
			projectId = $button.data('projectId'), // 获得项目id
			projectStatus = $button.data('data-status'); // 项目状态

		/* open-waiting-add 内部的操作 */
		function openWaitingAdd() {
			var textStr = $text.val().replace(/<\/?[^>]*>/g, ''), //去除HTML tag
				strSize = 20; // 能输入的最大值

			// 错误提示
			// 情况1 ，未填入字符
			if (textStr.trim() === '') {
				alert('请输入添加的内容')
				return false;

			} else if (textStr.trim().length > strSize) {

				// 情况2 ，超过最大值
				alert('超过最大输入值')
				return false;
			}

			// 需要上传的数据
			var data = {
				userId: userId,
				projectId: projectId,
				projectStatus: projectStatus,
				text: textStr
			}

			// ajax操作，最关键的还是后台的验证方式，保证安全性\
			if (!status) {
				$.ajax({
					url: 'data.json',
					type: 'post',
					data: data,
					timeout: 5 * 1000,
					beforeSend: function() {
						status = true; // 防止重复提交
					},
					success: function(data) {
						// 执行回调函数
						$(self).modal('hide');
						status = false;
					},
					error: function(xhr, error) {
						console.log(xhr, error)
					}
				})
			}
		}

		$(document).on('click', '#js_open-waiting-add', openWaitingAdd) // 模态框show事件
	})

	$('.open-waiting-add').on("hide.bs.modal", function(event) {
		var $text = $(this).find('#js_open-waiting-add-content'); //获得textarea
		$text.val(''); //值清空
		$(document).off('click', '#js_open-waiting-add');
	})


	// cancel 操作
	$('.modal-cancel').on("show.bs.modal", function(event) {
		var self = this,
			status = false,
			$button = $(event.relatedTarget), // 获得
			userId = $button.data('userId'), // 获得用户id
			projectId = $button.data('projectId'); // 获得项目id

		$(document).on('click', '#js_open-waiting-cancel', function() {

			var data = {
				userId: userId,
				projectId: projectId
			}

			// ajax操作，最关键的还是后台的验证方式，保证安全性
			if (!status) {
				$.ajax({
					url: 'data.json',
					type: 'post',
					data: data,
					timeout: 5 * 1000,
					beforeSend: function() {
						status = true; // 防止重复提交
					},
					success: function(data) {
						// 执行回调函数
						$(self).modal('hide');
						status = false;
					},
					error: function(xhr, error) {
						console.log(xhr, error)
					}
				})
			}
		})
	})

	$('.modal-cancel').on("hide.bs.modal", function(event) {
		$(document).off('click', '#js_open-waiting-cancel');
	})
})
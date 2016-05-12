define(['jquery', 'layerInit'], function($, layerInit) {
	var $followBtn = $('[data-followed="0"]');
	$followBtn.data('canClick', true);
	$followBtn.each(function() {

		if ($(this).data('canClick') === true) {
			$(this).on('click', function() {
				var _this = this,
					provideId = $(this).data('provideid');
				$(this).data('canClick', false);

				$.ajax({
					type: 'get',
					url: 'data.js',
					data: {
						provideId: provideId
					},
					beforeSend: function() {
						$(_this).prop('disabled', true);
						$(_this).prepend('<i class="fa fa-refresh fa-spin"></i> ')
					},
					success: function(data) {
						if (data === 'true') {
							layer.msg('添加好友成功', {
								icon: 1,
								time: 500
							}, function() {
								$(_this).html('Followed');
								$(_this).data('followed', '1');
							});
						} else {
							layer.msg('添加好友失败', {
								icon: 2,
								time: 1000
							}, function() {
								$(_this).html('Follow');
								$(_this).data('canClick', false);
								$(_this).prop('disabled', false);
							});
						}
					},
					complete: function() {

					},
					error: function() {

					}
				})
			})
		}
	})


})
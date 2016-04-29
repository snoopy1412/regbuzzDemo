define(['jquery', 'Vue'], function($, Vue) {

	// 获取值
	// pay 操作
	$('.order-confirmed-pay').on("show.bs.modal", function(event) {
		var self = this,
			status = false,
			$button = $(event.relatedTarget), // 获得
			userId = $button.data('userid'), // 获得用户id
			projectId = $button.data('projectid'), // 获得项目id
			projectStatus = $button.data('status'); // 项目状态

		// 余额的操作
		new Vue({
			el: "#order-confirmed-pay",
			data: {
				currentMoney: 50,
				inputMoney: 0,
				isBalancePaid: false
			},

			ready: function() {
				var self = this;
				var url;
				url = 'www.baidu.com?userId=' + userId;
				$.get(url, function(data) {
					// 返回data，获得currentMoney
					// self.currentMoney = data.currentMoney; 
				})
			},
			computed: {
				isOverMax: function() {
					return this.currentMoney >= this.inputMoney ? false : true
				}
			},
			methods: {
				confirmPay: function() {
					var self = this;
					// 前端只负责把内容传递给后台，后台需要进过严密的安全措施
					// 
					// 逻辑判断
					if (this.isOverMax ) {
						alert('余额不足');
						this.inputMoney = 0;
						return false;
					}
					if( this.inputMoney === 0){
						alert('未输入金额');
						return false;
					}

					var data = {
						userId: userId,
						projectId: projectId,
						projectStatus: projectStatus,
						inputMoney: self.inputMoney
					}

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
								// $(self).modal('hide');
								// 成功的展示

							},
							complete: function() {
								status = false;
							},
							error: function(xhr, error) {
								console.log(xhr, error)
							}
						})
					}
				}
			}
		})

		// 信用卡操作，跳转链接
		var $otherDom = $('#js_order-confirmed-method-other'),
			userid = userId,
			projectid = projectId,
			originUrl = 'top-up.html',
			currentUrl = '';
			currentUrl = originUrl + "?userid=" + userid + "&projectid=" + projectid;
			$otherDom.prop('href',currentUrl);
	})
})
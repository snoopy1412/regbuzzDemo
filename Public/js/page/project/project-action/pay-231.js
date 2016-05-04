define(['jquery', 'Vue', './library', '../../../layerInit'], function($, Vue, library) {
	var library = library.action;

	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var resultWidth = library.getWidth();

	library.bindEvent('.action_231', function() {
		var self = this,
			projectId = library.getData(this).projectId,
			projectAction = library.getData(this).projectAction,
			payVM;

		library.canclick(this, function() {
			// 余额支付
			layer.open({
				type: "1",
				title: "支付金额",
				area: [resultWidth, 'auto'],
				content: $('#order-confirmed-pay'),
				success: function(layero, index) {
					// fix bug
					$('.layui-layer-content').css({
						height: 'auto'
					})
					payVM = new Vue({
						el: "#order-confirmed-pay",
						data: {
							currentMoney: 50,
							inputMoney: '',
							isBalancePaid: false
						},
						ready: function() {
							var _this = this;
							var url;
							url = 'money.js';
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
								var _this = this,
									loadIndex,
									status = false;
								// 前端只负责把内容传递给后台，后台需要进过严密的安全措施

								// 逻辑判断
								if (this.isOverMax) {
									layer.alert('余额不足', {
										icon: 3
									});
									this.inputMoney = 0;
									return false;
								}
								if (this.inputMoney === 0) {
									layer.alert('未输入金额', {
										icon: 3
									});
									return false;
								}

								// 数据绑定并上传
								var submitData = {
									projectId: projectId,
									projectAction: projectAction,
									inputMoney: _this.inputMoney
								}

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
											_this.inputMoney = '';
										},
										error: function(xhr, error) {
											library.error('网络错误，请重试')
										}
									})
								}
							}
						}
					})
				},
				cancel: function(index) { //cancel回调
					payVM.inputMoney = '';
					payVM.isBalancePaid = false;
					library.cancel(self);
				}
			})

			// 信用卡操作
			var $otherDom = $('#js_231-otherMethod'),
				projectaction = projectAction,
				projectid = projectId,
				originUrl = 'top-up.html',
				currentUrl = '';
			currentUrl = originUrl + "?projectaction=" + projectAction + "&projectid=" + projectid;
			$otherDom.prop('href', currentUrl);
		})
	})
})
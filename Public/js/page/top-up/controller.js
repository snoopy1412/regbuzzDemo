define(['jquery', 'Vue'], function($, Vue) {
	new Vue({
		el: "#vue-top-up",
		data: {
			topUpAction: [],
			inputAmount: 0, // 输入金额
			estimatedAmount: 0, //预估金额
			resultAmount: 0,
			currentMoney: 0,
			currentFee: 0,
			currentBasePay: 0,
			balance: 0,
			loading: true,
			balanceError: false,
			methods: [{
				id: 1,
				title: '余额支付', //名字
				fee: 0, //手续费
				basePay: 0

			}, {
				id: 2,
				title: '信用卡',
				fee: 0.025,
				basePay: 0.3

			}, {
				id: 3,
				title: 'PayPal',
				fee: 0.023,
				basePay: 2.4
			}, {
				id: 4,
				title: 'Stripe',
				fee: 0.023,
				basePay: 0.3
			}, {
				id: 5,
				title: 'Alipay',
				fee: 0.023,
				basePay: 0.3
			}]
		},
		ready: function() {
			var self = this;

			this.currentFee = this.methods[0].fee;
			this.currentBasePay = this.methods[0].basePay;

			$.ajax({
				type: 'get',
				url: "./Public/data/balance.json",
				success: function(data) {
					console.log(data)
					self.balance = parseFloat(data.balance);
					self.loading = false;
				}
			})
			var param = window.location.search.substr(1);
			param.split('&').forEach(function(param) {
				param = param.split('=');
				var name = param[0],
					val = param[1];

				self.topUpAction.push({
					name: param[0],
					val: param[1]
				})
			})

			// topupaction
			$.each(self.topUpAction, function() {
				if (this.name = 'redirected') {
					switch (this.val) {
						case 'membership_subscribe':
							// ???
							break;
						default:
							break;
					}
				}
			})
		},
		computed: {
			resultAmount: function() {
				var inputAmount = parseFloat(this.inputAmount);
				return inputAmount + this.currentMoney
			},
			currentMoney: function() {
				var inputAmount = parseFloat(this.inputAmount);
				if (inputAmount) {
					return this.currentBasePay + this.inputAmount * this.currentFee;
				} else {
					return 0;
				}
			},
			balanceError: function() {
				if (this.balance < this.inputAmount) {
					return true;
				}
			}
		},
		methods: {
			changeFee: function(index) {
				this.currentFee = Number(this.methods[index].fee);
				this.currentBasePay = Number(this.methods[index].basePay);
			},
			watchInputBalance: function() {

			}
		}
	})
})
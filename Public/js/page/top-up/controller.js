define(['jquery', 'Vue'], function($, Vue) {
	new Vue({
		el: "#vue-top-up",
		data: {
			topUpAction: {},
			topUpDescriptionShow: false,
			topUpDescription: '',
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
					self.balance = parseFloat(data.balance);
					self.loading = false;
				}
			})
			var param = window.location.search.substr(1);
			param.split('&').forEach(function(param) {
				param = param.split('=');
				var name = param[0],
					val = param[1];

				self.topUpAction[param[0]] = param[1]
			})

			if (self.topUpAction.redirected) {
				self.topUpDescriptionShow = true;
			}

			var memberShipPosition = '';
			switch (self.topUpAction.redirected) {
				case 'membership_subscribe': //会员升级
					switch (self.topUpAction.memberShipStep) {
						case '1':
							memberShipPosition = '一个月会员'
							break;
						case '2':
							memberShipPosition = '三个月会员'
							break;
						case '3':
							memberShipPosition = '六个月会员'
							break;
						case '4':
							memberShipPosition = '十二个月会员'
							break;
					}

					self.topUpDescription = '支付 $' + self.topUpAction.memeberShipPrice + ' USD 升级' + memberShipPosition + '，立即获得更好的权益！'
					self.inputAmount = self.topUpAction.memeberShipPrice;

					break;
				case 'project_pay':
					self.topUpDescription = '为项目付款'
				default:
					break;
			}
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
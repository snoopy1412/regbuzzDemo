define(['Vue'],function(Vue){

	// 订单
	var pubOrderVm = new Vue({
		el:"#vue-order-controller",
		data:{
			offer: 6000,
			margin: 120
		},
		computed:{
			finalOffer : function(){
				return this.offer + this.margin
			}
		}
	})
})
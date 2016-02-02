define(['Vue'],function(Vue){
	
	// 项目发布
	var pubVm = new Vue({
		el:"#vue-pubController",
		data:{
			selected:'Please select...',
			selectedBudget:'',
			customBudget:false,
			lists:[
				{
					text:'Please select...',
					subset:[
						{
							text : 'Please select...'
						}
					]
				},
				{
					text:'Chemicals',
					subset:[
						{
							text : 'SDS/MSDS and labelling'
						},
						{
							text : 'Chemical Notification'
						},
						{
							text : 'Chemical Registration'
						},
						{
							text : 'Others'
						}
					]
				}
			]
		},
		computed : {
			selection : function(){
				for (var i = 0; i < this.lists.length; i++) {
	                if (this.lists[i].text === this.selected) {
	                    return this.lists[i].subset;
	                }
            	}
			},
			customBudget:function(){
				if(this.selectedBudget === 'custom'){
					return true
				}else{
					return false
				}
			}
		}
	})

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

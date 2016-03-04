define(['Vue'],function(Vue){
	
var dashBoardVm = new Vue({
		el:"#vue-home",
		data:{
			roles:[
				{
					name : 'employer',
					context:{
						project :{
							title:'发布项目',
							num:10
						},
						question:{
							title:'发布问题',
							num:10
						}
					}
				},
				{
					name : "provider",
					context:{
						project :{
							title:'投标项目',
							num:10
						},
						question:{
							title:'问题回答',
							num:10
						}
					}
				}
			],
			autoindex : 0
		},
		methods:{
			changeView:function(index){
				this.autoindex = index;
			}
		}
	})

});

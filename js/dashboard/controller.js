define(['Vue', 'VueComponent'], function(Vue, VueComponent) {

	var homehistory = VueComponent.homehistory;
	var currentIndex;
	// 全局注册fadeIn
	// Vue.transition('pushskip', {
	// 	afterLeave: function(el, done) {

	// 		// 模拟ajax操作
	// 		dashbordvm.pushData.splice(currentIndex,0,{
	// 			projectID: 23, //模拟
	// 			category: {
	// 				first: 'aaa',
	// 				sub: 'aaa'
	// 			},
	// 			title: '这是一条模拟数据'+ Math.random(),
	// 			price: {
	// 				num: 100000,
	// 				currency: 'USD'
	// 			},
	// 			remaining: '5',
	// 			description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
	// 		})
	// 	}
	// });

	var dashbordvm = new Vue({
		el: "#vue-home",
		components: {
			homehistory: homehistory
		},
		data: {
			historyRoles: [
				{
					name: 'employer',
					context: {
						project: {
							title: '发布项目',
							num: 10
						},
						question: {
							title: '发布问题',
							num: 10
						}
					}
				}, 
				{
					name: "provider",
					context: {
						project: {
							title: '投标项目',
							num: 10
						},
						question: {
							title: '问题回答',
							num: 10
						}
					}
				}
			],
			userId : 1,
			pushData: [
				{
					projectID: 23, // 项目id
					category: {		// 项目分类
						first: 'GHS',
						sub: 'SDS'
					},
					favorite : false,	// 是否被收藏
					favoriteUsersId : [], // 收藏人id
					title: 'Expert Joomla Web Developer - CiviCRM a Plus!',  // 项目标题
					price: {	// 项目价格
						num: 100000,
						currency: 'USD'
					},
					remaining: '5',	//剩余时间

					// 项目描述
					description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
				}, 
				{
					projectID: 23, //模拟
					category: {
						first: 'GHS',
						sub: 'SDS'
					},
					favorite : false,
					favoriteUsersId : [],
					title: 'Expert Joomla Web Developer - CiviCRM a Plus!',
					price: {
						num: 100000,
						currency: 'USD'
					},
					remaining: '5',
					description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
				}, 
				{
					projectID: 23, //模拟
					category: {
						first: 'GHS',
						sub: 'SDS'
					},
					favorite : false,
					favoriteUsersId : [],
					title: 'Expert Joomla Web Developer - CiviCRM a Plus!',
					price: {
						num: 100000,
						currency: 'USD'
					},
					remaining: '5',
					description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
				}
			],
			saveHide : false,
			isLoad : false
		},
		methods: {
			// pushSkip: function(index, event) {
			// 	// 理论上应该是ajax操作
			// 	// 即发起ajax请求。
			// 	// $.ajax(url,data,success);
			// 	// 这里我们进行模拟
			// 	currentIndex = index;
			// 	this.pushData.splice(index, 1);
			// },
			favorite : function(index , event){
				// 收藏操作
				// 由于我们在前面收集了projectID，所以这里可以考虑只储存projectID即可
				// …… 省略
				
				// 其他模拟
				this.saveHide = true;
				this.pushData[index].favorite = true;
				this.pushData[index].favoriteUsersId.push(this.userId); // 是否需要储存，还是只在当前页面储存？
				console.log(this.pushData[index].favoriteUsersId)
				
			},
			changePush : function(){
				var self = this;

				// 首先需要把isLoad 改变状态
				this.isLoad = true;

				// 第二步是进行数据的获取,应该是一次ajax操作，此处模拟
				var timer = setTimeout(function(){
					if(self.isLoad){
 						// 这里进行关键性操作
 						
 						// 模拟随机字符串，仅仅做模拟用
						/*
						** randomWord 产生任意长度随机字母数字组合
						** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
						*/
 						function randomWord(randomFlag, min, max){
						    var str = "",
						        range = min,
						        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
						 
						    // 随机产生
						    if(randomFlag){
						        range = Math.round(Math.random() * (max-min)) + min;
						    }
						    for(var i=0; i<range; i++){
						        pos = Math.round(Math.random() * (arr.length-1));
						        str += arr[pos];
						    }
						    return str;
						}

 						self.pushData = [];
 						for (var i = 0; i < 3; i++) {
 							self.pushData.push({
 								projectID: 23, //模拟
								category: {
									first: 'GHS',
									sub: 'CHEMICAL'
								},
								favorite : false,
								favoriteUsersId : [], // 收藏人id
								title: randomWord(true,10,30),
								price: {
									num: 100000,
									currency: 'USD'
								},
								remaining: '5',
								description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
 							})
 						}
					  	self.isLoad = false;
					} 	
					
				},1000)
			}
		}
	});

});
define(['Vue', 'VueComponent'], function(Vue, VueComponent) {

	var homehistory = VueComponent.homehistory;
	var currentIndex;
	// 全局注册fadeIn
	Vue.transition('pushskip', {
		afterLeave: function(el, done) {

			// 模拟ajax操作
			dashbordvm.pushData.splice(currentIndex,0,{
				projectID: 23, //模拟
				category: {
					first: 'aaa',
					sub: 'aaa'
				},
				title: '这是一条模拟数据'+ Math.random(),
				price: {
					num: 100000,
					currency: 'USD'
				},
				remaining: '5',
				description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
			})
		}
	});

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
			pushData: [
				{
					projectID: 23, //模拟
					category: {
						first: 'GHS',
						sub: 'SDS'
					},
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
					title: 'Expert Joomla Web Developer - CiviCRM a Plus!',
					price: {
						num: 100000,
						currency: 'USD'
					},
					remaining: '5',
					description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
				}
			],
			saveHide : false
		},
		methods: {
			pushSkip: function(index, event) {
				// 理论上应该是ajax操作
				// 即发起ajax请求。
				// $.ajax(url,data,success);
				// 这里我们进行模拟
				currentIndex = index;
				this.pushData.splice(index, 1);
			},
			favorite : function(index , event){
				// 收藏操作
				// 由于我们在前面收集了projectID，所以这里可以考虑只储存projectID即可
				
				// 其他模拟
				this.saveHide = true
				
			}
		}
	});

});
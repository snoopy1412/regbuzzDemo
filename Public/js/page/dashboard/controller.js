define(['Vue', 'VueComponent'], function(Vue, VueComponent) {

	var homehistory = VueComponent.homehistory;
	var currentIndex;

	var dashbordvm = new Vue({
		el: "#vue-home",
		components: {
			homehistory: homehistory
		},
		data: {
			userId: 1,
			pushData: [],
			saveHide: false,
			isLoad: false
		},
		ready: function() {
			// 模拟$.ajax
			this.pushData = [{
				projectId: 23, // 项目id
				category: { // 项目分类
					first: 'GHS',
					sub: 'SDS'
				},
				favoriteUsersIds: [], // 收藏人id
				title: 'Expert Joomla Web Developer - CiviCRM a Plus!', // 项目标题
				price: { // 项目价格
					num: 100000,
					currency: 'USD'
				},
				remaining: '5', //剩余时间

				// 项目描述
				description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
			}, {
				projectId: 23, //模拟
				category: {
					first: 'GHS',
					sub: 'SDS'
				},
				favoriteUsersIds: [],
				title: 'Expert Joomla Web Developer - CiviCRM a Plus!',
				price: {
					num: 100000,
					currency: 'USD'
				},
				remaining: '5',
				description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
			}, {
				projectId: 23, //模拟
				category: {
					first: 'GHS',
					sub: 'SDS'
				},
				favoriteUsersIds: [],
				title: 'Expert Joomla Web Developer - CiviCRM a Plus!',
				price: {
					num: 100000,
					currency: 'USD'
				},
				remaining: '5',
				description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
			}];
		},
		methods: {
			favorite: function(index, event) {
				// 收藏操作
				var favoriteUsersIds = this.pushData[index].favoriteUsersIds;
				if (favoriteUsersIds.indexOf(this.userId) === -1) {
					this.saveHide = true;
				}
				this.pushData[index].favoriteUsersIds.push(this.userId); // 是否需要储存，还是只在当前页面储存，状态如何维持？
			},
			changePush: function() {
				var self = this;

				// 首先需要把isLoad 改变状态
				this.isLoad = true;

				// 第二步是进行数据的获取,应该是一次ajax操作，此处模拟
				var timer = setTimeout(function() {
					if (self.isLoad) {
						// 这里进行关键性操作

						// 模拟随机字符串，仅仅做模拟用
						/*
						 ** randomWord 产生任意长度随机字母数字组合
						 ** randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
						 */
						function randomWord(randomFlag, min, max) {
							var str = "",
								range = min,
								arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

							// 随机产生
							if (randomFlag) {
								range = Math.round(Math.random() * (max - min)) + min;
							}
							for (var i = 0; i < range; i++) {
								pos = Math.round(Math.random() * (arr.length - 1));
								str += arr[pos];
							}
							return str;
						}

						self.pushData = [];
						for (var i = 0; i < 3; i++) {
							self.pushData.push({
								projectId: 23, //模拟
								category: {
									first: 'GHS',
									sub: 'CHEMICAL'
								},
								favoriteUsersIds: [], // 收藏人id
								title: randomWord(true, 10, 30),
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

				}, 1000)
			}
		}
	});

});
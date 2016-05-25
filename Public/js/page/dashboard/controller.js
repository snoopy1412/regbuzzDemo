define(['jquery', 'Vue', 'VueComponent'], function($, Vue, VueComponent) {

	var homehistory = VueComponent.homehistory;
	var currentIndex;

	var dashbordvm = new Vue({
		el: "#vue-home",
		components: {
			homehistory: homehistory
		},
		data: {
			loading: true,
			userId: 1,
			pushData: [],
			saveHide: false,
			isLoad: false
		},
		ready: function() {
			var self = this;
			$.ajax({
					type: 'GET',
					url: '../../../Public/data/dashboard/pushProjects.json',
					success: function(data) {
						self.loading = false;
						self.pushData = filterData(data.data, self.userId, 3);
					},
					error: function(msg) {
						console.log(msg)
					}
				})
				// 模拟$.ajax

			// this.pushData = [{
			// 	projectId: 23, // 项目id
			// 	category: { // 项目分类
			// 		first: 'GHS',
			// 		sub: 'SDS'
			// 	},
			// 	favoriteUsersIds: [], // 收藏人id
			// 	title: 'Expert Joomla Web Developer - CiviCRM a Plus!', // 项目标题
			// 	price: { // 项目价格
			// 		num: 100000,
			// 		currency: 'USD'
			// 	},
			// 	remaining: '5', //剩余时间

			// 	// 项目描述
			// 	description: 'I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item											I need a new website. I need you to design and build my online store. I will be selling clothes, front page will have pics and brief info of clothes then once the click item will go to next specific webpage for individual item'
			// }
		},
		methods: {
			favorite: function(index, event) {
				// 收藏操作
				var self = this,
					favoriteUsersIds = this.pushData[index].favoriteUsersIds,
					checkInArray = $.inArray(self.userId, favoriteUsersIds);

				if (checkInArray !== -1) {
					return false;
				}

				// 在这个位置需要考虑ajax修改数据中的favoriteUsersIds的值，理论上应该是post请求
				// 这里只是模拟

				// 需要传递的数据,post到后台后，可以将userId添入该项目的里面的favoriteUsersIds
				var submitData = {
					userId: self.userId,
					projectId: self.pushData[index].projectId
				}

				$.ajax({
					type: 'GET',
					url: '../../../Public/data/dashboard/pushProjects.json',
					data: submitData,
					success: function(data) {

						// 弹出窗口
						self.saveHide = true;

						// 同时，本地数据favorite也变色表示
						self.pushData[index].favoriteUsersIds.push(self.userId);
					},
					error: function(state) {
						console.log(state)
					}

				})
			},
			changePush: function() {
				var self = this;

				// 首先需要把isLoad 改变状态
				this.isLoad = true;

				// 重新获取数据
				if (self.isLoad) {
					$.ajax({
						type: 'GET',
						url: '../../../Public/data/dashboard/pushProjects.json',
						success: function(data) {
							self.pushData = filterData(data.data, self.userId, 3);
						},
						complete: function() {
							self.isLoad = false;
						},
						error: function(msg) {
							console.log(msg)
						}
					})

				}


			}
		}
	});


	/**
	 * [filterData description]
	 * @param  {[array]} originData  [数据源]
	 * @param  {[number]} userid     [本机用户id]
	 * @param  {[number]} count      [获得范围]
	 * @return {[array]}             [筛选后的数据]
	 */
	function filterData(originData, userid, count) {
		var newArr = originData,
			resultArr = [];

		// 筛选出内部未被本机用户收藏标记的数据,生成新数组
		$.each(newArr, function() {
			var bBtn = $.inArray(userid, this.favoriteUsersIds);
			if (bBtn === -1) {
				resultArr.push(this);
			}
		})

		// 打乱顺序
		var resultArr = resultArr.sort(function(a, b) {
			return Math.random() - 0.5
		})

		return resultArr.slice(0, count)
	}
});
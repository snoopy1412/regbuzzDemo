define(['jquery', 'Vue', './library', '../../../layerInit'], function($, Vue, library) {
	var library = library.action;
	// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
	var resultWidth = library.getWidth();
	library.bindEvent('.action_112', function() {
		var self = this,
			projectId = library.getData(this).projectId,
			projectAction = library.getData(this).projectAction,
			inviteVm;
		inviteVm = new Vue({
			el: "#open-waiting-invite",
			data: {
				friendsList: [],
				resultList: [],
				loadingMsg: '数据加载中……'
			},
			ready: function() {
				var self = this;
				// 在这个位置进行ajax拉取好友列表
				$.ajax({
					type: 'get',
					url: './Public/data/friends.json',
					success: function(data) {
						var html = '';
						for (var i = 0; i < data.friends.length; i++) {
							self.friendsList.push(data.friends[i])
						}
						self.loadingMsg = false;
					},
					error: function() {
						self.loadingMsg = '数据加载失败……'
					}
				})
			},
			methods: {
				aaa: function(event, index) {
					var num = 0,
						arr = [];
					for (var i = 0; i < this.friendsList.length; i++) {
						if (this.friendsList[i].status === '1') {
							num++;
						}
					}

					if (num === 5) {
						alert('超过5啦');
						$(event.target).prop('checked', false);
						return false;
					}

					this.friendsList[index].status = "1";

					for (var i = 0; i < this.friendsList.length; i++) {
						if (this.friendsList[i].status === '1') {
							arr.push(this.friendsList[i]);

						}
					}
					this.resultList = arr;

				},
				bbb: function(index) {
					this.friendsList[index].status = "0";
				}
			}
		})


		library.canclick(this, function() {
			layer.open({
				type: '1',
				title: '附加要求',
				content: $('#open-waiting-invite'),
				area: [resultWidth, 'auto'],
				btn: ['Add', 'Cancel'],
				yes: function(index, layero) { //add的回调
					var loadIndex, status;

					// 需要上传的数据
					var submitData = {
						projectId: projectId,
						projectAction: projectAction,
						inviteData:inviteVm.resultList
					}

					// ajax操作，最关键的还是后台的验证方式，保证安全性
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
								library.success(self, data, index, '邀请成功', '邀请失败')
							},
							complete: function() {
								library.complete(self, loadIndex);
								status = false;
							},
							error: function(xhr, error) {
								library.error('网络错误，请重试')
							}
						})
					}
				},
				cancel: function(index) { //cancel回调
					library.cancel(self);
				}
			})
		})
	})
})
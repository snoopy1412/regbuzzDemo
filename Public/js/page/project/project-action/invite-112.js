define(['jquery', 'Vue', 'tools', '../../../layerInit'], function($, Vue, tools) {

	function invite(options) {
		var defaults = {
			type: 1, //1.任务管理邀请 2.任务发布时邀请
			clickBtn: '.action_112',
			modalBox: '#open-waiting-invite',
			getFriendsUrl: './Public/data/friends.json',
			submitAjaxUrl: 'data.js'
		}

		var options = $.extend({}, defaults, options);

		// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
		var resultWidth = tools.getWidth();
		tools.bindEvent(options.clickBtn, function() {
			var self = this,
				status,
				projectId = tools.getData(this).projectId,
				projectAction = tools.getData(this).projectAction,
				inviteVm;
			inviteVm = new Vue({
				el: options.modalBox,
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
						url: options.getFriendsUrl,
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
							layer.alert('超过最大值', {
								icon: 3
							})
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


			tools.canclick(this, function() {
				layer.open({
					type: '1',
					title: '附加要求',
					content: $(options.modalBox),
					area: [resultWidth, 'auto'],
					btn: ['Add', 'Cancel'],
					yes: function(index, layero) { //add的回调
						var loadIndex;

						// 需要上传的数据
						var submitData = {
							projectId: projectId,
							projectAction: projectAction,
							inviteData: inviteVm.resultList
						}

						// ajax操作，最关键的还是后台的验证方式，保证安全性
						if (!status) {
							$.ajax({
								url: options.submitAjaxUrl,
								type: 'get',
								data: submitData,
								timeout: 5 * 1000,
								beforeSend: function() {
									status = true; // 防止重复提交
									loadIndex = tools.beforeSend();
								},
								success: function(data) {
									tools.success(self, data, index, '邀请成功', '邀请失败')
								},
								complete: function() {
									tools.complete(self, loadIndex);
									status = false;
								},
								error: function(xhr, error) {
									tools.error('网络错误，请重试')
								}
							})
						}
					},
					cancel: function(index) { //cancel回调
						tools.cancel(self);
					}
				})
			})
		})
	}
	invite()

	return {
		invite: invite
	}
})
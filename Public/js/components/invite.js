define(['jquery', 'Vue', 'library', 'layerInit'], function($, Vue, library, layerInit) {

	function Invite(node, options) {
		this.node = node;
		this.options = $.extend({}, Edit.defaluts, options);
		this.init();
	}

	Invite.defaults = {
		type: 1, // 1 发布任务时，2 任务管理中
		modalBox: '#open-waiting-invite',
		friendsDataUrl: './Public/data/friends.json',
		ajaxUrl: 'data.js'
	}

	Invite.prototype = {
		constructor: Message,
		init: function() {
			var That = this,
				library = library.action;

			// 获得屏幕的宽度（主要是为了满足自适应情况下的考虑）
			var resultWidth = library.getWidth();

			library.bindEvent(That.node, function() {
				var self = this,
					inviteVm;
				if (library.getData(this).projectId) {
					var projectId = library.getData(this).projectId;
				}
				if (library.getData(this).projectAction) {
					var projectAction = library.getData(this).projectAction;
				}

				inviteVm = new Vue({
					el: That.modalBox,
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
							url: That.friendsDataUrl,
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

				library.canclick(this, function() {
					layer.open({
						type: '1',
						title: '附加要求',
						content: $(That.modalBox),
						area: [resultWidth, 'auto'],
						btn: ['Add', 'Cancel'],
						yes: function(index, layero) { //add的回调
							var loadIndex, status;

							// 需要上传的数据
							var submitData = {
								inviteData: inviteVm.resultList
							}
							if (projectId) {
								submitData['projectId'] = projectId;
							}
							if (projectAction) {
								submitData['projectAction'] = projectAction;
							}

							// ajax操作，最关键的还是后台的验证方式，保证安全性
							if (!status) {
								$.ajax({
									url: That.ajaxUrl,
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
		}
	}

	return {
		Invite: Invite
	}

})
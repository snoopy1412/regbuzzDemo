define(['jquery', 'tools', 'layerInit'], function($, tools, layerInit) {

	var Hire = function(node, options) {
		this.node = node;
		this.options = $.extend({}, Hire.defaults, options);

		// 私有函数
		this._getDom = function() {
			this.modalTitle = this.options.modalTitle;
			this.modalContent = this.options.modalContent;
			this.projectsAjaxUrl = this.options.projectsAjaxUrl;
			this.loadingContainer = this.options.loadingContainer;
			this.hireProjectList = this.options.hireProjectList;
		}

		this._getDom2 = function(_this) {
			this.status = false;
			this.loaded = false;
			this.provideId = $(_this).data('provideid');
		}

		this.init();
	}
	Hire.defaults = {
		modalTitle: '项目选择',
		modalContent: '#hire-modal',
		projectsAjaxUrl: './Public/data/projects.json',
		loadingContainer: '.loading2',
		hireProjectList: '.hire-projects',
	};
	Hire.prototype = {
		constructor: Hire,
		init: function() {
			this._getDom();
			this.bindEvent();
		},
		bindEvent: function() {
			var self = this;
			$(document).on('click', this.node, function(event) {
				event.preventDefault();
				var _this = this;
				self.initModal(_this);
			})
		},
		initModal: function(_this) {
			this._getDom2(_this);
			this.showModal();
		},
		showModal: function() {
			var self = this;
			layer.open({
				type: '1',
				title: self.modalTitle,
				content: $(self.modalContent),
				area: ['500px', '300px'],
				btn: ['Hire', 'Cancel'],
				success: function(layero, index) {
					$.ajax({
						type: 'get',
						url: self.projectsAjaxUrl,
						timeout: 5 * 1000,
						success: function(data) {
							self.loaded = true;
							$(self.loadingContainer).hide();
							$(self.hireProjectList).fadeIn();

							var projects = data.projects,
								html = '';
							$.each(projects, function() {
								if (this.projectstatus === '11') { // 11 代表 Waiting for bids
									html += "<li class='projects-item' data-projectid='" + this.projectid + "'>" +
										"<label class='c-input c-radio'>" +
										"<input id='project_" + this.projectid + "' name='hire-project' type='radio' value='" + this.projectid + "'>" +
										"<span class='c-indicator'></span>" + this.projectname +
										"</label>" +
										"</li>";
								}
							})
							$(self.hireProjectList).append(html);
						},
						error: function() {
							layer.alert('网络错误，请重试', {
								icon: 2
							})
						}
					})
				},
				yes: function(index, layero) {
					var loadIndex;
					if (self.loaded) {
						var checkProjectId = $('.hire-projects input[name="hire-project"]:checked ').val();
						if (!checkProjectId) {
							layer.alert('未选定值', {
								icon: 2
							});
							return false;
						}
						if (!self.status) {
							$.ajax({
								url: 'data.js',
								type: 'get',
								data: {
									checkProjectId: checkProjectId,
									provideId: self.provideId
								},
								timeout: 5 * 1000,
								beforeSend: function() {
									self.status = true; // 防止重复提交
									loadIndex = tools.beforeSend();
								},
								success: function(data) {
									if (data === 'true') {
										layer.msg('发送雇佣信息成功', {
											icon: 1,
											time: 500
										});
									} else {
										layer.msg('雇佣失败', {
											icon: 2,
											time: 1000
										});
									}
									layer.close(index);
									$(self.hireProjectList).html('');
								},
								complete: function() {
									layer.close(loadIndex);
									this.status = false;
								},
								error: function(xhr, error) {
									tools.error('网络错误，请重试')
								}
							})
						}
					}
				},
				cancel: function(index) { //cancel回调
					layer.close(index);
					this.status = false;
					$(self.hireProjectList).html('');
				}
			})
		}

	}

	return {
		Hire: Hire
	}
})
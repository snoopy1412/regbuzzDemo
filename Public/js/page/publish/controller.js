define(['Vue', 'VueComponent', 'VueGlobalFilter', '../../Public/data/languages.js', '../../Public/data/linkage.js', ], function(Vue, VueComponent) {

	var linkage = VueComponent.linkage,
		wordcount = VueComponent.wordcount,
		jellybean = VueComponent.jellybean;

	// 项目发布
	var pubVm = new Vue({
		el: "#vue-pubController",
		components: {
			linkage: linkage,
			wordcount: wordcount,
			jellybean: jellybean
		},
		data: {
			// 数据初始化
			selectedData: [],
			languageData: [],

			// 自定义价格
			selectedBudget: '',
			customBudget: false,

			// 数据提示的数据
			placeholder: '请输入语言（最多三个）',
			msgCustom: '没有数据,换个词搜索试试？',

			// 是否只有邀请的人可以看到任务
			onlyInvite: false,
			selectPublicOrPrivate:''

		},

		computed: {
			customBudget: function() {
				if (this.selectedBudget === 'custom') {
					return true
				} else {
					return false
				}
			},
			ajax: function() {
				var child = this.$refs.profile;
				return child.select2List.length;
			},
			onlyInvite:function(){
				return this.selectPublicOrPrivate === 'public' ? false : true
			}
		},

		created: function() {

			// linkage的动态数据加载
			this.selectedData = linkageData;

			// jellybean的动态数据加载
			this.languageData = languagesData;
		}
	})


})
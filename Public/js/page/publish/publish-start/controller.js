define(['Vue',
	'VueComponent',
	'VueGlobalFilter'
], function(Vue, VueComponent) {
	// category.json
	var jellybean = VueComponent.jellybean;

	// 项目发布
	var pubVm = new Vue({
		el: "#vue-pubController",
		components: {
			jellybean: jellybean
		},
		data: {

			// 选择语言
			languageDataUrl: '../../../Public/data/discovery/languages.json',
			hiddenName: 'choiceLanguagesIds',

			// 数据初始化
			languageData: [],

			// 数据提示的数据
			placeholder: '请输入语言（最多三个）',
			msgCustom: '没有数据,换个词搜索试试？',

		}
	})


})
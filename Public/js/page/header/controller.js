define(['Vue'], function(Vue) {
	new Vue({
		el: "#vue-header",
		data: {
			defaultSearch: {
				text: 'All',
				class: 'fa-search',
				placeholder: 'Search for projects, providers,questions,articles...'
			},
			searchList: [{
				text: 'All',
				class: 'fa-search',
				placeholder: 'Search for projects, providers,questions,articles...'
			}, {
				text: 'Projects',
				class: 'fa-suitcase',
				placeholder: 'Search for projects...'
			}, {
				text: 'Providers',
				class: 'fa-user',
				placeholder: 'Search for providers...'
			}]
		},
		methods: {
			choiseSearch: function(index) {
				this.defaultSearch = this.searchList[index];
			}
		}
	})
})
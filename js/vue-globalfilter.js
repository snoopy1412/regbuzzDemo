define(['Vue'],function(Vue){

	// 高亮过滤器
	Vue.filter('highlight', function (value, phrase) {
	   return value.replace(new RegExp('('+phrase+')', 'gi'), '<strong>$1</strong>');
	})
})
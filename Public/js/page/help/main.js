require(['jquery', 'bootstrap', 'Vue', 'vueValidator'], function($, bootstrap, Vue, vueValidator) {

	$('.fees-advice').popover();

	// 验证
	// 加载组件
	Vue.use(vueValidator);
	//自定义email判断 
	Vue.validator('email', function(val) {
		return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
	})

	// 实例化
	new Vue({
		el: "#help-feedback",
		data: {
			username: '',
			email: '',
			selectVal: '',
			issue: '',
			usernameShow: false,
			emailShow: false,
			issueShow: false
		},
		methods: {
			showError: function(text) {
				this[text + 'Show'] = true;
			},
			showFileName: function(event) {
				var isEmpty = event.target.files.length;
				if (isEmpty !== 0) {
					$(event.target).next().text(event.target.files[0].name)
				}
			}
			// onSubmit: function(event) { //提交 可ajax

			// 	console.log(this.username, this.email, this.selectVal, this.issue)

			// 	$.ajax({
			// 		type:'get',
			// 		url:'data.js',
			// 		beforeSend:function(){
			// 			$(event.target).prepend('<i class="fa fa-spinner fa-spin"></i> ').prop('disabled',true);
			// 		},
			// 		success:function(data){
			// 			$(event.target).html('success');

			// 		},
			// 		complete:function(){
			// 			$(event.target).prop('disabled',false).
			// 		},
			// 		error:function(){
			// 			$(event.target).html('Submit');
			// 		}

			// 	})
			// }
		}
	})
});
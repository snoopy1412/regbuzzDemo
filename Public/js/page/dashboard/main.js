require(['ellipsis','./page/dashboard/controller'],function(){

// 溢出隐藏，省略号
	$(".home-push-des").ellipsis({
		childNodes : 'p'
	})
	
	$('.home-push-title').ellipsis({
		childNodes : 'a'
	})
});
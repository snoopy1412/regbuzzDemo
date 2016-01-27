define(['jquery','Vue'],function($,Vue){
	var vmTopUp = new Vue({
		el:"#vue-top-up",
		data:{
			amount: 240
		}
	})

$('.topUp-heading-radiobox input').each(function(index,element){
	$(this).on('change',function(){
		$('.topUp-body-item').removeClass('active');
		$('.topUp-body-item').eq(index).addClass('active');
	})
})
})
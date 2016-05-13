require(['jquery', './page/top-up/controller'], function($, Vue) {
	$('.topUp-heading-radiobox input').each(function(index, element) {
		$(this).on('change', function() {
			$('.topUp-body-item').removeClass('active');
			$('.topUp-body-item').eq(index).addClass('active');
		})
	})
})
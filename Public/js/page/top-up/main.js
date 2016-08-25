define(function(require) {

	var $ = require('jquery');

	$('.topUp-heading-radiobox input').each(function(index, element) {
		$(this).on('change', function() {
			$('.topUp-body-item').removeClass('active');
			$('.topUp-body-item').eq(index).addClass('active');
		})
	})
})
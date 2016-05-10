define(['jquery', 'raty'], function($, raty) {

	$('.grade-item').each(function() {
		var orginScore = $(this).data('score');
		$(this).raty({
			readOnly: true,
			half: true,
			score: orginScore,
			precision: true,
			hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
			path: './Public/img/stars',
			target: $(this).prev(),
			targetKeep: true
		});
	});

	// star
	$('.star-bids-user').raty({
		readOnly: true,
		half: true,
		score: 4.3,
		precision: true,
		hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
		path: './Public/img/stars',
		target: '.item-stats-bids-name',
		targetKeep: true
	});
})
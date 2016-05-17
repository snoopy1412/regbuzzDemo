define(function(require) {

	var $ = require('jquery'),
		raty = require('raty');

	var init = function() {
		// 左侧raty 
		$('.list-grade-choose').each(function() {
			$(this).raty({
				readOnly: false,
				half: true,
				score: 0,
				hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
				path: './Public/img/stars',
				click: function(score, evt) {
					alert("\nscore: " + score);
				}
			});
		});

		// provider选择
		$('.grade-item').raty({
			readOnly: true,
			half: true,
			score: function() {
				return $(this).attr('data-score')
			},
			precision: true,
			hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
			path: './Public/img/stars'
		});
	}

	return {
		init: init
	}

})
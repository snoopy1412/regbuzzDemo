define(['jquery', 'raty'], function($, raty) {
	
	// 星星评级
	$('.totalScore').raty({
		readOnly: true,
		half: true,
		score: 4.3,
		precision: true,
		hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
		path: './Public/img/stars',
		target: '.item-stats-totalScore-name',
		targetKeep: true
	});
	$('.star-quality').raty({
		readOnly: true,
		half: true,
		score: 0.76,
		precision: true,
		hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
		path: './Public/img/stars',
		target: '.item-stats-quality-name',
		targetKeep: true
	});
	$('.star-speed').raty({
		readOnly: true,
		half: true,
		score: 3.6,
		precision: true,
		hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
		path: './Public/img/stars',
		target: '.item-stats-speed-name',
		targetKeep: true
	});
	$('.star-attitude').raty({
		readOnly: true,
		half: true,
		score: 3.26,
		precision: true,
		hints: ['bad', 'poor', 'regular', 'good', 'gorgeous'],
		path: './Public/img/stars',
		target: '.item-stats-attitude-name',
		targetKeep: true
	});
})
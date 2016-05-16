define(['jquery', 'ionRangeSlider'], function($, ionRangeSlider) {
	var init = function() {

		// discovery-projects
		$('#project-budget').ionRangeSlider({
			min: 20,
			max: 400000,
			grid: true,
			type: "double",
			prettify_separator: ",",
			hide_min_max: true,
			hide_from_to: true,
			prefix: "$",
			onChange: function(data) {
				var $min = $('#project-budget-min'),
					$max = $('#project-budget-max');
				$min.text(data.from);
				$max.text(data.to);
			},
			onFinish: function(data) {
				// 如果是ajax的方式，在此调用
			}
		});

		// discovery-projects
		$('#provider-budget').ionRangeSlider({
			min: 20,
			max: 100,
			grid: true,
			type: "double",
			prettify_separator: ",",
			hide_min_max: true,
			hide_from_to: true,
			prefix: "$",
			onChange: function(data) {
				var $min = $('#provider-budget-min'),
					$max = $('#provider-budget-max');
				$min.text(data.from);
				$max.text(data.to);
			},
			onFinish: function(data) {
				// 如果是ajax的方式，在此调用
			}
		});


	}
	return {
		init: init
	}
})
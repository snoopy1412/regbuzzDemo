require(['jquery', 'bootstrapTable'], function($) {
	var employerInput = $('#employerView_option').prop('checked'),
		providerInput = $('#providerView_option').prop('checked');

	// 雇主和威客的切换功能
	$('.regbuzzToggle input').on('change', function() {

		var employerInput = $('#employerView_option').prop('checked'),
			providerInput = $('#providerView_option').prop('checked');
		console.log(employerInput, providerInput);
		if (employerInput && !providerInput) {
			$('.section--employer-view').addClass('active');
			$('.section--provider-view').removeClass('active');
		}
		if (providerInput && !employerInput) {
			$('.section--employer-view').removeClass('active');
			$('.section--provider-view').addClass('active');
		}
	})

	// draft设置
	window.actionEvents = {
		'click .draft-edit': function(e, value, row, index) {
			alert('You click remove icon, row: ' + JSON.stringify(row));
			console.log(value, row, index);
		},
		'click .draft-remove': function(e, value, row, index) {
			alert('You click remove icon, row: ' + JSON.stringify(row));
			console.log(value, row, index);
		}
	};


});
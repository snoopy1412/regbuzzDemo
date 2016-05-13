require(['jquery', 'datetimepicker'], function($, datetimepicker) {
	$('#datetimepicker6').datetimepicker({
		format: 'YYYY-MM-DD',
		useCurrent: false
	});
	$('#datetimepicker7').datetimepicker({
		format: 'YYYY-MM-DD',
		useCurrent: true
	});

	$("#datetimepicker6").on("dp.change", function(e) {
		$('#datetimepicker7').data("DateTimePicker").minDate(e.date);
	});
	$("#datetimepicker7").on("dp.change", function(e) {
		$('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
	});
});
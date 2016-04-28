define(function(require){

	// draft 行为设置
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

})
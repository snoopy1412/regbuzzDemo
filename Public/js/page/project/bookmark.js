define(function(require){

	// bookmark 行为设置
	window.actionEvents = {
		'click .bookmark-remove': function(e, value, row, index) {
			alert('You click remove icon, row: ' + JSON.stringify(row));
			console.log(value, row, index);
		}
	};

})
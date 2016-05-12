define(['jquery'], function($) {

	$(document).on('click', '.action_231', function(event) {
		event.preventDefault();
		var projectId = $(this).data('projectid'),
			projectAction = $(this).data('projectacton'),
			originUrl = 'top-up.html',
			currentUrl = '';

		currentUrl = originUrl + "?projectaction=" + projectAction + "&projectid=" + projectId + "&redirected=project_pay";
		window.location = currentUrl;
	})
})
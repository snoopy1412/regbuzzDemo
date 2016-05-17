define(['jquery', 'layerInit'], function($, layerInit) {

	$(document).on('click', '.btn-block', function(event) {

		event.preventDefault();

		var $parent = $(this).parent(),
			$isUpdateContainer = $parent.next('.membership-plans-cta-secondary'),
			$isUpdate = $isUpdateContainer.find('.m_btn-update'),
			$notUpdate = $isUpdateContainer.find('.m_btn-cancel');

		$isUpdateContainer.removeClass('is-hidden');
		$parent.hide();

		$notUpdate.on('click', function() {
			$parent.show();
			$isUpdateContainer.addClass('is-hidden');
		})

		$isUpdate.on('click', function() {
			var memeberShipPrice = $(this).data('price'),
				memberShipStep = $(this).data('pricestep');
			var paramObj = {
				memeberShipPrice: memeberShipPrice,
				memberShipStep: memberShipStep
			}
			$(this).prop('disabled',true).next().prop('disabled',true).end().prepend('<i class="fa fa-refresh fa-spin"></i> ');
			var param = $.param(paramObj);
			url = './top-up.html?' + param + '&redirected=membership_subscribe';
			window.location = url;
		})
	})
})
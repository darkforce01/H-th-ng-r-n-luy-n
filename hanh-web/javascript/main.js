jQuery(document).ready(function($) {
    // Effect modal
	(function ($) {
		$('body').on('click', '.btn-modal', function (event) {
			event.preventDefault();
			let modalName = $(this).data('modal');
			let modal = $('body').find(`#${modalName}`);
			let allModal = $('body').find(`.modal-custom`);
			if (!modal.hasClass('modal-open')) {
				allModal.each(function () {
					$(this).removeClass(['modal-close', 'modal-open']).hide();
				});
				modal.show().addClass('modal-open');
				$('body').addClass('has-modal');
			} else {
				modal.addClass('modal-close');
				$('body').removeClass('has-modal');
				setTimeout(function () {
					modal.hide();
					modal.removeClass(['modal-close', 'modal-open']);
				}, 1000);
			}
		});
	})($);

    // tabs
	$(function () {
		$(".magic-tabs  ul li").on('click', function () {
			var container_tab = $(this).closest('.cover-tab');
			container_tab.find('.tab-content .content').removeClass('active-tab-content');
			$(this).siblings().removeClass("action-tab-btn");
			$(this).addClass('action-tab-btn');
			container_tab.find('.tab-content .content').eq($(this).index()).addClass('active-tab-content');
		});

	});
});
// end
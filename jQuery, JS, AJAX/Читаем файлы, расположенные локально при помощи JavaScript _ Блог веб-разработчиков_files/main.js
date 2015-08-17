(function($) {
	$(function() {
		$('#show-more-cat').click(function() {
			$(this).toggleClass('cats-opened');
			$('#categories-hidden').slideToggle();
		});
	});
	
})( jQuery );
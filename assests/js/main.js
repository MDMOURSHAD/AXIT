// Preloader 
function load() {
	var loading = document.getElementsByClassName('preloader');
	loading[0].style.display = "none";
}
$(document).ready(function() {

	/*-- Menu Sticky --*/
	var windows = $(window);
	var sticky = $('.header-sticky')
	windows.on('scroll', function() {
		var scroll = windows.scrollTop();
		if (scroll < 100) {
			sticky.removeClass('stick');
		} else {
			sticky.addClass('stick');
		}
	});

	// Slide Toggle Mobile Menu
	$('.mobilemenu-icon').click(function() {
		$('.mobile-menu').slideToggle();
	});
	$('.menu-link').click(function() {
		$('.mobile-menu').slideToggle();
	});
	// Scroll to Top
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scroll-top').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	});
	
});
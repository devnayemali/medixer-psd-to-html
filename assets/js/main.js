(function ($) {
"use strict";

// Pre Loader Js 
$(window).on('load',function() {
	$("#loading").fadeOut(500);
});

// Side Bar Menu Js
$(".info-toggle-btn").on("click", function () {
	$(".mobile-sidebar").addClass("info-opened");
	$(".body-overlay").addClass("opened");
});

$(".sidebar-close-btn").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

$(".body-overlay").on("click", function () {
	$(".mobile-sidebar").removeClass("info-opened");
	$(".body-overlay").removeClass("opened");
});

// Sidebar Mobile Menu
$('#mobile-menu-active').metisMenu();
$('#mobile-menu-active .has-dropdown > a').on('click', function (e) {
	e.preventDefault();
});

// One Page Nav
var top_offset = $('.header-area').height() - 0;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});



function mainSlider() {

	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});

	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: true,
		autoplaySpeed: 8000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [{
		breakpoint: 767,
		settings: {
			dots: false,
			arrows: false
		}
		}]
	});
	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
		var $this = $(this);
		var $animationDelay = $this.data('delay');
		var $animationType = 'animated ' + $this.data('animation');
		$this.css({
			'animation-delay': $animationDelay,
			'-webkit-animation-delay': $animationDelay
		});
		$this.addClass($animationType).one(animationEndEvents, function () {
			$this.removeClass($animationType);
		});
		});
	}
	}
	mainSlider();




 // Data-Background Js
 $("[data-background").each(function () {
	$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
});



/* magnificPopup video view Js */
$('.youtube-video').magnificPopup({
	type: 'iframe'
});


// core__feature-area active
$('.core__feature-area').owlCarousel({
	loop: true,
	smartSpeed: 800,
	nav: true,
	dots: true,
	margin: 30,
	navText: ['<i class="fa-solid fa-arrow-left-long"></i>', '<i class="fa-solid fa-arrow-right-long"></i>'],
	//autoplay: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
			margin: 0,
			nav: false,
			
		},
		768: {
			items: 2,
			nav: true,
		},
		1200: {
			items: 3
		}
	}
});

  
// Client Slider Js 
  $('.testimonial-item-area').owlCarousel({
	loop:true,
	autoplay:false,
	autoplayTimeout:3000,
	smartSpeed:500,
	items:1,
	nav:false,
	dots:false,
});

$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$(".header-sticky").removeClass("sticky");
	} else {
		$(".header-sticky").addClass("sticky");
	}
});

$('.count').counterUp({
	delay: 100,
	time: 1000
});

new WOW().init();

// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

})(jQuery);
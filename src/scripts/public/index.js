// HEADER CLICK AND SCROLL===========================================================================
$('.menu-list li a').click(function () {
	$('.menu-list li a').removeClass('active')
	if ($(this).hasClass('active')) {
		$(this).removeClass('active')
	} else {
		$(this).addClass('active')
	}
})

function goToByScroll(echo) {
	$('html,body').animate({
		scrollTop: $("." + echo).offset().top - 84
	}, 'slow');
}


$(".menu-list li a").click(function (e) {
	// Prevent a page reload when a link is pressed
	e.preventDefault();
	// Call the scroll function
	goToByScroll($(this).attr('link'));
});


/** 
 * Scroll window and active menu
 * 
*/
$(window).on('scroll',function() {
    var scrollDistance = $(window).scrollTop();
    $('.scroll_active').each(function(i) {
        if ($(this).position().top <= scrollDistance + 150) {
			$('.menu-list li a.active').removeClass('active');
			$('.menu-list li a').eq(i).addClass('active');
		}
		if(scrollDistance <= 0){
			$('.menu-list li a.active').removeClass('active');
		}

		if(scrollDistance == 0){
			$('.landing-sky__header').removeClass('leave_top');
		}else{
			$('.landing-sky__header').addClass('leave_top');
		}
    });
}).scroll();

/** 
 Slick slider-------------------------------------------
*/

$('.slider1').not('.slick-initialized').slick({
	dots: true,
	arrows: false,
	infinite: false,
	autoplay: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
})
$('.slider2').not('.slick-initialized').slick({
	dots: true,
	arrows: true,
	infinite: false,
	autoplay: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-left.jpg' ></button>",
	nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-right.jpg'></button>",
})


/** 
 header-------------------------------------------
*/


$(document).click(function (e) {
	$('.landing-sky__menu-content').removeClass('active');
})


/**menu mobile */
$('.menu-mobile .navbar-toggler').click(function(e){
	e.stopPropagation()
	$('.landing-sky__menu-content').toggleClass('active')
})
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


// SCROLL TO SECTION===========================================================================
// $(window).on('scroll', function () {
//     var scrollDistance = $(window).scrollTop();
// 	console.log(scrollDistance)
	
//     $('.menu-list li').each(function (i) {
// 		console.log(i)
//         if ($(this).position().top <= scrollDistance) {
//             $('.menu-list li a.active').removeClass('active');
//             $('.menu-list li').eq(i).find('a').addClass('active');
//         }
//     });
// }).scroll();


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
	// responsive: [
	// 	{
	// 		breakpoint: 1350,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1,
	// 			infinite: true,
	// 			arrows: false,
	// 			dots: true
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 992,
	// 		settings: {
	// 			slidesToShow: 2,
	// 			slidesToScroll: 1,
	// 			arrows: false,
	// 			dots: true
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1,
	// 			arrows: false,
	// 			dots: true
	// 		}
	// 	}
	// ]
})


/** 
 header-------------------------------------------
*/


$('.header__toggle-icon').click(function (e) {
	e.stopPropagation()

	$(this).toggleClass('active')
	$('.header__nav').toggleClass('active');
	$('.header__content').toggleClass('active');
})

$(document).click(function (e) {
	$('.header__nav').removeClass('active');
})


/**menu mobile */
$('.menu-mobile .navbar-toggler').click(function(){
	$('.landing-sky__menu-content').toggleClass('active')
})
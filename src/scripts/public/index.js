

// HEADER CLICK AND SCROLL===========================================================================
$(".menu-list li a").click(function () {
	$(".menu-list li a").removeClass("active");
	if ($(this).hasClass("active")) {
		$(this).removeClass("active");
	} else {
		$(this).addClass("active");
	}
});

function goToByScroll(echo) {
	$("html,body").animate(
		{
			scrollTop: $("." + echo).offset().top - 84
		},
		"slow"
	);
}

$(".menu-list li a").click(function (e) {
	// Prevent a page reload when a link is pressed
	e.preventDefault();
	// Call the scroll function
	goToByScroll($(this).attr("link"));
});

/**
 * Scroll window and active menu
 *
 */
$(window)
	.on("scroll", function () {
		var scrollDistance = $(window).scrollTop();
		$(".scroll_active").each(function (i) {
			if ($(this).position().top <= scrollDistance + 150) {
				$(".menu-list li a.active").removeClass("active");
				$(".menu-list li a")
					.eq(i)
					.addClass("active");
			}
			if (scrollDistance <= 0) {
				$(".menu-list li a.active").removeClass("active");
			}

			if (scrollDistance == 0) {
				$(".landing-sky__header").removeClass("leave_top");
			} else {
				$(".landing-sky__header").addClass("leave_top");
			}
		});
	})
	.scroll();

/** 
 Slick slider-------------------------------------------
*/

$(".slider1")
	.not(".slick-initialized")
	.slick({
		dots: true,
		arrows: false,
		infinite: false,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1
	});
$(".slider2")
	.not(".slick-initialized")
	.slick({
		dots: true,
		arrows: true,
		infinite: false,
		autoplay: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow:
			"<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-left.jpg' ></button>",
		nextArrow:
			"<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-right.jpg'></button>"
	});

/** 
 header-------------------------------------------
*/

$(document).click(function (e) {
	$(".landing-sky__menu-content").removeClass("active");
});

/**menu mobile */
$(".menu-mobile .navbar-toggler").click(function (e) {
	e.stopPropagation();
	$(".landing-sky__menu-content").toggleClass("active");

	$(".landing-sky__header").toggleClass("active");
});


/**date picker */
$("#datepicker").datepicker({
	dateFormat: "dd-mm-yy",
	onSelect: function (dateText, inst) {
		console.log(dateText);
	}
});


/** time picker */
$("#example").timepicker({
	time: "12:00:00.000"
});

/**set content center images */
var heightSection2,heightSection3,heightSection6,heightSection8;
$(window).resize(function () {
	window.location.reload()
});
$(document).ready(function () {
	heightSection2 = $(".section2 .container").innerHeight();
	$(".section2 .col-md-5").height(heightSection2);

	heightSection3 = $(".section3 .container").innerHeight();
	$(".section3 .col-md-5.hide-mobile").height(heightSection3);

	heightSection6 = $(".section6 .container").innerHeight();
	$(".section6 .col-md-5").height(heightSection6);

	heightSection8 = $(".section8 .container-fluid").innerHeight();
	$(".section8 .contact-info").height(heightSection8);
	$(".section8 .logo-footer").height(heightSection8);
});






/**-----------parallax1 ------------------*/

var initScrollTop = $(window).scrollTop();

$('.section5').css({ "background-position-y": initScrollTop / 75 + "%" });

$(window).scroll(function () {
	var scrollTop = $(window).scrollTop();

	$('.section5').css({ "background-position-y": scrollTop / 75 + "%" });
});

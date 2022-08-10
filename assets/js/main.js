$(function () {

	var siteSticky = function () {
		$(".js-sticky-header").sticky({ topSpacing: 0 });
	};
	siteSticky();

	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();

});

function updateScroll() {
	if ($(window).scrollTop() >= 100) {
		$('.navbar-fixed').addClass('bg-black');
	} else {
		$('.navbar-fixed').removeClass('bg-black');
	}
}

$(function () {
	$(window).scroll(updateScroll);
	updateScroll();
});




// Corporate slider

$(document).ready(function () {
	var silder = $(".corporate-slider .owl-carousel");
	silder.owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		items: 1,
		center: false,
		nav: true,
		margin: 40,
		dots: false,
		loop: false,
		// navText: [
		// 	"<img src='images/festivals/see.png'>",
		// 	"<img src='images/right.png'>",
		// ],
		responsive: {
			0: {
				items: 1,
			},
			577: { items: 2, autoplayTimeout: 100000, },
			768: { items: 3 },
			991: { items: 4 },
			1200: { items: 5 },
			1500: { items: 6 },
			1800: { items: 7 },
		},
	});
});




// Scroll 

$(window).on("scroll", function () {
	if (window.scrollY) {
		$("#scrollToTop").addClass("active");
	} else {
		$("#scrollToTop").removeClass("active");
	}
});

$('#scrollToTop').on('click', function () {
	$("html, body").animate({
		scrollTop: 0
	}, 500);
})



$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	$('.owl-main').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		items: 1,
		pag: true,
		autoplay: true,
		autoplayTimeout: 5000,
		touchDrag: false,
		mouseDrag: false
	});
	$('.owl-reviews').owlCarousel({
		loop:true,
		margin:0,
		responsiveClass:true,
		items: 1,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000
	});
	particlesJS('main_slider', {
		particles: {
			color: '#4dac21',
			shape: 'circle', // "circle", "edge" or "triangle"
			opacity: 1,
			size: 3,
			size_random: true,
			nb: 250,
			line_linked: {
				enable_auto: true,
				distance: 160,
				color: '#4dac21',
				opacity: 1,
				width: 1,
				condensed_mode: {
					enable: false,
					rotateX: 600,
					rotateY: 600
				}
			},
			anim: {
				enable: true,
				speed: 1
			}
		},
		interactivity: {
			enable: true,
			mouse: {
				distance: 200
			},
			detect_on: 'canvas', // "canvas" or "window"
			mode: 'grab',
			line_linked: {
				opacity: .5
			},
			events: {
				onclick: {
					enable: true,
					mode: 'push', // "push" or "remove" (particles)
					nb: 4
				},
				onhover:{
					enable: true,
					mode: "repulse"
				},
				resize: true
			}
		},
		move: {
			enable: true,
			bounce: true
		},
		/* Retina Display Support */
		retina_detect: true
	});

	$(".item-cats").mCustomScrollbar({
		axis: "x"
	});
	var item_cat_width = 0;
	$(".item-cat").each(function(){
		item_cat_width += $(this).width() + 80 + 82
	});
	$(".item-cats .scroller").width(item_cat_width);

	$('.catalog__items__title').on("click",function(){
		$(this).toggleClass('active')
	});

	$(".contact-phone a,.mail").on("click",function(e){
		e.preventDefault();
		$(this).toggleClass("active");
	})
});

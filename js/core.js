$(document).ready(function () {
	// слaйдер на главной
	$('.slider').slick({
		slidesToScroll:1,
		slidesToShow:1,
		// autoplay: true,
		// appendArrows:'.slider-arrows',
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:true,
		dots:false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows:true,
				}
			}
		]
	});

	/*кнопка вверх*/
	$('.scrollup').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});
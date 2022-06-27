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

	// слaйдер на странице о компании
	$('.counts__slider').slick({
		slidesToScroll:1,
		slidesToShow:4,
		// autoplay: true,
		appendArrows:'.counts-slider-arrows',
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:true,
		dots:false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					arrows:true,
				}
			}
		]
	});

	// слaйдер другие продукты
	$('.other__products_slider').slick({
		slidesToScroll:1,
		slidesToShow:3,
		// autoplay: true,
		appendArrows:'.counts-slider-arrows',
		autoplaySpeed: 3000,
		pauseOnHover:true,
		arrows:true,
		dots:false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
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

	/*мобильное меню*/
	var mobileSidebar = function()
	{
		function obj()
		{
			var self = this;
			self.animSpeed = 400;
			self.init = function()
			{
				self.events();
			},
			self.events = function()
			{
				$('.sidebar-open').click(function() {
					self.open();
				});
				$('.sidebar-close, .sidebar-overlay').click(function() {
					self.close();
				});
			},
			self.open = function()
			{
				$('.sidebar').addClass('sidebar_opened');
				$('.sidebar-overlay').fadeIn(self.animSpeed);
				// pageScroll.hide(1);
			},
			self.close = function()
			{
				$('.sidebar').removeClass('sidebar_opened');
				$('.sidebar-overlay').fadeOut(self.animSpeed);
				// pageScroll.show(0);
			}
		}
		return new obj();
	}();
	mobileSidebar.init();

	/*аккордеон*/
	$(".set > .set__btn").on("click", function(){
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.set__content').slideUp(200);
		}
		else{
			$(".set > .set__btn").removeClass("active");
			$(this).addClass("active");
			$('.set__content').slideUp(200);
			$(this).siblings('.set__content').slideDown(200);
		}
		return false
	});
	/*аккордеон внутреннего меню в sidebar*/
	$(".inner__set > .inner__set_btn").on("click", function(){
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.inner__set_content').slideUp(200);
		}
		else{
			$(".inner__set > .inner__set_btn").removeClass("active");
			$(this).addClass("active");
			$('.inner__set_content').slideUp(200);
			$(this).siblings('.inner__set_content').slideDown(200);
		}
		return false
	});

	/*аккордеон в вопросах*/
	$(".questions__item > .open_btn").on("click", function(){
		if($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.questions__item_content').slideUp(200);
		}
		else{
			$(".questions__item > .open_btn").removeClass("active");
			$(this).addClass("active");
			$('.questions__item_content').slideUp(200);
			$(this).siblings('.questions__item_content').slideDown(200);
		}
		return false
	});

	/*высота контента в специалистах для выравнивая колонок*/
	count = document.querySelectorAll('#js-spec__items .spec__item').length;

	if(window.outerWidth > 1300) {
		if(count <= 3) {
			$('.spec__items').css('height', '400px')
		}
		if(count > 3 && count <= 6) {
			$('.spec__items').css('height', '900px')
		}
		if(count > 6 && count <= 9) {
			$('.spec__items').css('height', '1350px')
		}
	}
	if(window.outerWidth > 780 && window.outerWidth < 1300) {
		if(count <= 3) {
			$('.spec__items').css('height', '750px')
		}
		if(count > 3 && count <= 6) {
			$('.spec__items').css('height', '1100px')
		}
		if(count > 6 && count <= 9) {
			$('.spec__items').css('height', '1600px')
		}
	}
	if(window.outerWidth < 780) {
		if(count) {
			$('.spec__items').css('height', 'auto')
		}
	}
});
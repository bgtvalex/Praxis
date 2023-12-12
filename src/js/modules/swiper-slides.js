import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function sliderHeader () {
	const header = new Swiper('.header-slider', {
		loop: true,
		parallax: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: '.header__current-slide',
			type: 'fraction'
		},
		navigation: {
			nextEl: '#next',
			prevEl: '#prev',
		},
		scrollbar: {
			el: '.header__scrollbar',
		},
	});

	const benefits = new Swiper('.b-slider', {
		loop: true,
		parallax: true,
		autoplay: {
			delay: 5000,
		},
		navigation: {
			nextEl: '#b-next',
			prevEl: '#b-prev',
		}
	});

	const categorySlider1 = new Swiper('#category-slider-1', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".category__scrollbar-1",
			clickable: true,
		},
	});

	const categorySlider2 = new Swiper('#category-slider-2', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".category__scrollbar-2",
			clickable: true,
		},
	});

	const categorySlider3 = new Swiper('#category-slider-3', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".category__scrollbar-3",
			clickable: true,
		},
	});

	const categorySlider4 = new Swiper('#category-slider-4', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".category__scrollbar-4",
			clickable: true,
		},
	});

	const categorySlider5 = new Swiper('#category-slider-5', {
		loop: true,
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".category__scrollbar-5",
			clickable: true,
		},
	});

}

export default sliderHeader
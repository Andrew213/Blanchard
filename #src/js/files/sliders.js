//BildSlider
// let sliders = document.querySelectorAll('.gallery__slider');
// // if (sliders) {
// // 	for (let index = 0; index < sliders.length; index++) {
// // 		let slider = sliders[index];
// // 		if (!slider.classList.contains('swiper-bild')) {
// // 			let slider_items = slider.children;
// // 			if (slider_items) {
// // 				for (let index = 0; index < slider_items.length; index++) {
// // 					let el = slider_items[index];
// // 					el.classList.add('swiper-slide');
// // 				}
// // 			}
// // 			let slider_content = slider.innerHTML;
// // 			let slider_wrapper = document.createElement('div');
// // 			slider_wrapper.classList.add('swiper-wrapper');
// // 			slider_wrapper.innerHTML = slider_content;
// // 			slider.innerHTML = '';
// // 			slider.appendChild(slider_wrapper);
// // 			slider.classList.add('swiper-bild');

// // 			if (slider.classList.contains('_swiper_scroll')) {
// // 				let sliderScroll = document.createElement('div');
// // 				sliderScroll.classList.add('swiper-scrollbar');
// // 				slider.appendChild(sliderScroll);
// // 			}
// // 		}
// // 		if (slider.classList.contains('_gallery')) {
// // 			//slider.data('lightGallery').destroy(true);
// // 		}
// // 	}
// // 	sliders_bild_callback();
// // }

// function sliders_bild_callback(params) { }

// let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
// if (sliderScrollItems.length > 0) {
// 	for (let index = 0; index < sliderScrollItems.length; index++) {
// 		const sliderScrollItem = sliderScrollItems[index];
// 		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
// 		const sliderScroll = new Swiper(sliderScrollItem, {
// 			direction: 'vertical',
// 			slidesPerView: 'auto',
// 			freeMode: true,
// 			scrollbar: {
// 				el: sliderScrollBar,
// 				draggable: true,
// 				snapOnRelease: false
// 			},
// 			mousewheel: {
// 				releaseOnEdges: true,
// 			},
// 		});
// 		sliderScroll.scrollbar.updateSize();
// 	}
// }

// var swiper = new Swiper('.swiper-container', {
// 	slidesPerView: 3,
// 	slidesPerColumn: 2,
// 	spaceBetween: 30,
// 	pagination: {
// 	  el: '.swiper-pagination',
// 	  clickable: true,
// 	},
//   });
// function sliders_bild_callback(params) { }

let slider_about = new Swiper('.gallery__slider', {
	/*
	effect: 'fade',
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	*/
	// observer: true,
	// observeParents: true,
	// slidesPerView: 6,
	// // slidesPerView: 'auto',
	slidesPerGroup: 3,
	// freeMode: true,
	slidesPerView: 3,
	slidesPerColumn: 2,
	spaceBetween: 50,
	// autoHeight: true,
	// speed: 800,
	// spaceBetween: 25,
	// fadeEffect: { // Add this
	// 	crossFade: true,
	//   },
	//touchRatio: 0,
	//simulateTouch: false,
	//loop: true,
	//preloadImages: false,
	//lazy: true,
	// Dotts
	//pagination: {
	//	el: '.slider-quality__pagging',
	//	clickable: true,
	//},
	// Arrows
	navigation: {
		nextEl: '.gallery__arrow--next',
		prevEl: '.gallery__arrow--prev',
	},
	pagination: {
		el: '.gallery__slider-fraction',
		type: 'fraction'
	},
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Первый слайд',
		lastSlideMessage: 'Последний слайд',
		notificationClass: 'swiper-notification',
		containerMessage: '',
		containerRoleDescriptionMessage: '',
		itemRoleDescriptionMessage: '',
		// и т.д.
	},

	keyboard: {
		// Включить\выключить
		enabled: true,
		// Включить\выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// Включить\выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown: true,
	},

	breakpoints: {

320:{
	slidesPerView: 1,
	slidesPerGroup: 1,
	slidesPerColumn: 1,
	loop: false,
	// centeredSlides: true,

},


755:{

	spaceBetween: 34, 	
	slidesPerView: 2,
	slidesPerGroup: 2,
	
	// centeredSlides: true,
},

768:{

				spaceBetween: 34, 	
				slidesPerView: 2,
				slidesPerGroup: 2,
				
				// centeredSlides: true,
},

	
		
		991: {
			
			spaceBetween: 34,
				slidesPerView: 2,
				slidesPerGroup: 2,
		},
		1500: {
			spaceBetween: 50,
			slidesPerView: 'auto',
			slidesPerGroup: 3,
		}

	},
	
	/*

	*/
	// on: {
	// 	lazyImageReady: function () {
	// 		ibg();
	// 	},
	// }
	// And if we need scrollbar
	//scrollbar: {
	//	el: '.swiper-scrollbar',
	//},
});



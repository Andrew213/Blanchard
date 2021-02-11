

const slider_about = new Swiper('.gallery__slider', {
	navigation: {
		nextEl: '.gallery__arrow--next',
		prevEl: '.gallery__arrow--prev',
	},
	pagination: {
		el: '.gallery__slider-fraction',
		type: 'fraction'
	},

	updateOnWindowResize: true,
	a11y: {
		// Включить/выключить
		enabled: true,
		// Сообщения
		prevSlideMessage: 'Предыдущий слайд',
		nextSlideMessage: 'Следующий слайд',
		firstSlideMessage: 'Это первый слайд',
		lastSlideMessage: 'Это последний слайд',
		paginationBulletMessage: 'перейти к слайду {{index}}',
		notificationClass: 'swiper-notification',
		// containerMessage: '',
		// containerRoleDescriptionMessage: '',
		// itemRoleDescriptionMessage: '',
		// и т.д.
	},

	breakpoints:{
		500:{
	slidesPerColumnFill: 'row',
			slidesPerGroup: 1,
			slidesPerView: 1,
			slidesPerColumn: 0,
			updateOnWindowResize: true,
		},
		720:{
			slidesPerColumnFill: 'row',
			slidesPerGroup: 2,
			slidesPerView: 2,
			slidesPerColumn: 2,
			updateOnWindowResize: true,
			spaceBetween: 34,
		},

		980:{
			slidesPerColumnFill: 'row',
	slidesPerGroup: 3,
	slidesPerView: 3,
	slidesPerColumn: 2,
	updateOnWindowResize: true,
	spaceBetween: 10,
			},

		1024:{
			slidesPerColumnFill: 'row',
	slidesPerGroup: 2,
	slidesPerView: 2,
	slidesPerColumn: 2,
	updateOnWindowResize: true,
	spaceBetween: 34,
			},
			

		1330:{
	spaceBetween: 50,
	slidesPerColumnFill: 'row',
	slidesPerGroup: 3,
	updateOnWindowResize: true,
	slidesPerView: 3,
	slidesPerColumn: 2,

	
		}
	}

});




window.addEventListener("resize", (ev) => {
    if (window.innerWidth <= 1330) {
		slider_about.update();
		slider_about.updateProgress ()	
// пересчитать прогресс swiper
slider_about.updateSize ()	
// пересчитать размер контейнера для свайпера

slider_about.updateSlides ()	
// пересчитать количество слайдов и их смещения. Полезно после добавления / удаления слайдов с помощью JavaScript

slider_about.updateSlidesClasses ();
    } 
  });



const slider_about = new Swiper('.gallery__slider', {
	navigation: {
		nextEl: '.slider-control__arrow--next',
		prevEl: '.slider-control__arrow--prev',
	},
	pagination: {
		el: '.slider-control__fraction',
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
			// slidesPerGroup: 1,
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

		1024:{
			slidesPerColumnFill: 'row',
	// slidesPerGroup: 2,
	slidesPerView: 2,
	slidesPerColumn: 2,
	updateOnWindowResize: true,
	spaceBetween: 34,
			},
			

		1330:{
	spaceBetween: 50,
	slidesPerColumnFill: 'row',
	// slidesPerGroup: 3,
	updateOnWindowResize: true,
	slidesPerView: 3,
	slidesPerColumn: 2,

	
		}
	}

});


 let eventsSlider = null;
 let editionsSlider = null;

  function eventsSliderInit () {
	if (!eventsSlider) {
	  eventsSlider  = new Swiper('.events__container', {
					  spaceBetween: 30,
					  // slidesPerColumnFill: 'row',
					  slidesPerGroup: 1,
					  updateOnWindowResize: true,
					  slidesPerView: 1,
					  simulateTouch: true,
					  // Чувствительность свайпа
					  touchRatio: 1,
					  // Угол срабатывания свайпа/перетаскивания
					  touchAngle: 45,
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
					},	
					  paginationClickable: true,
					  // Курсор перетаскивания
					  grabCursor: true,
					  pagination: {
						  el: '.swiper-pagination',
						  clickable: true
					  
					  },
				  });
	}
  }

  function editionsSliderInit(){
	  if(!editionsSlider){
		 editionsSlider = new Swiper('.editions__slider', {

			navigation: {
				nextEl: '.slider-control__arrow--next',
				prevEl: '.slider-control__arrow--prev',
			},
			pagination: {
				el: '.slider-control__fraction',
				type: 'fraction'
			},
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
			},		
		
			breakpoints:{
				500:{
		
				},
				735:{
					updateOnWindowResize: true,
					spaceBetween:0,
					// slidesPerColumnFill: 'row',
					// centeredSlides: true,
					slidesPerGroup: 2,
					slidesPerView: 2,
				},
				768:{
					updateOnWindowResize: true,
					// spaceBetween:34,
					// slidesPerColumnFill: 'row',
					// centeredSlides: true,
					slidesPerGroup: 2,
					slidesPerView: 2,
				},
		
				1024:{
					updateOnWindowResize: true,
					spaceBetween:30,
					// slidesPerColumnFill: 'row',
					// centeredSlides: true,
					slidesPerGroup: 2,
					slidesPerView: 2,
					},
					
		
				1440:{
					updateOnWindowResize: true,
					spaceBetween: 50,
					// slidesPerColumnFill: 'row',
					slidesPerGroup: 3,
					updateOnWindowResize: true,
					slidesPerView: 3,
				}
			}
		
		});
	  }
	
}

const projects__slider = new Swiper('.projects__slider', {
	navigation: {
		nextEl: '.projects__arrow--next',
		prevEl: '.projects__arrow--prev',
	},
	pagination: {
		el: '.slider-control__fraction',
		type: 'fraction'
	},

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
	320:{
			updateOnWindowResize: true,
			slidesPerGroup: 1,
			slidesPerView: 1,
		},
	620:{
		updateOnWindowResize: true,
		spaceBetween: 40,
		slidesPerGroup: 2,
		slidesPerView: 2,
	},
	1031:{
		updateOnWindowResize: true,
		spaceBetween: 50,
		slidesPerColumn: 1,
		slidesPerGroup: 3,
		updateOnWindowResize: true,
		slidesPerView: 3,
	}
	}

});




function x(){
	var map = new ymaps.Map("contacts__map", {
		center: [55.75870495860828, 37.60096082232978],
		zoom: 16,
		controls: [],
		suppressMapOpenBlock: true,
		suppressObsoleteBrowserNotifier: true
	});
	myPlacemark = new ymaps.Placemark(map.getCenter(), {
		hintContent: 'Собственный значок метки',
		balloonContent: 'Это красивая метка'
	 }, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: '../img/mapIco.svg',
		// Размеры метки.
		iconImageSize: [20, 20],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [0, 50]
	 }),
	 
	 // Размещение геообъекта на карте.
	 map.geoObjects.add(myPlacemark)

}

// ####################################

function y(){
	var map = new ymaps.Map("contacts__map-mobile", {
		center: [55.75870495860828, 37.60096082232978],
		zoom: 16,
		controls: [],
		suppressMapOpenBlock: true,
		suppressObsoleteBrowserNotifier: true
	});
	myPlacemark = new ymaps.Placemark(map.getCenter(), {
		hintContent: 'Собственный значок метки',
		balloonContent: 'Это красивая метка'
	 }, {
		// Опции.
		// Необходимо указать данный тип макета.
		iconLayout: 'default#image',
		// Своё изображение иконки метки.
		iconImageHref: '../img/mapIco.svg',
		// Размеры метки.
		iconImageSize: [20, 20],
		// Смещение левого верхнего угла иконки относительно
		// её "ножки" (точки привязки).
		iconImageOffset: [0, 50]
	 }),
	 
	 // Размещение геообъекта на карте.
	 map.geoObjects.add(myPlacemark)

}

// window.addEventListener('resize', ev => {
// 	if(window.innerWidth <= 580){
// 		ymaps.ready(y);
// 		ymaps.destroy(x)
// 		ymaps.destroy(y)
// 	}else{
// 		ymaps.destroy(x)
// 		ymaps.destroy(y)
// 		ymaps.ready(x);
// 	}
// });



if(window.innerWidth <= 580){
	
	ymaps.ready(y);
}else{

	ymaps.ready(x);
}
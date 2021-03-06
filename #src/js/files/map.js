let mapFlag = true;
let mapFlag2 = true;
if(window.innerWidth > 580){
	mapFlag2 = false
}
function init(){
	let mapDesktop = new ymaps.Map("contacts__map", {
		center: [55.75870495860828, 37.60096082232978],
		zoom: 16,
		controls: [],
		suppressMapOpenBlock: true,
		suppressObsoleteBrowserNotifier: true
	});
	let mapMobile = new ymaps.Map("contacts__map-mobile", {
		center: [55.75870495860828, 37.60096082232978],
		zoom: 16,
		controls: [],
		suppressMapOpenBlock: true,
		suppressObsoleteBrowserNotifier: true
	});
	myPlacemark = new ymaps.Placemark(mapDesktop.getCenter(), {
		hintContent: 'Собственный значок метки',
		balloonContent: 'Это красивая метка'
	 }, 
	 {
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
	 mapDesktop.geoObjects.add(myPlacemark);

	 mapMobile.destroy()
	 window.addEventListener('resize', ev => {
		 		if(window.innerWidth <= 580 && mapFlag){
			mapDesktop.destroy()
			mapMobile.destroy()
		 mapMobile = new ymaps.Map("contacts__map-mobile", {
				center: [55.75870495860828, 37.60096082232978],
				zoom: 16,
				controls: [],
				suppressMapOpenBlock: true,
				suppressObsoleteBrowserNotifier: true
			});
			mapMobile.geoObjects.add(myPlacemark);
			mapFlag = false;
			mapFlag2 = true;
		}else if(window.innerWidth > 580 && mapFlag2){
			mapFlag = true;
			mapFlag2 = false;
			mapMobile.destroy();
			 mapDesktop = new ymaps.Map("contacts__map", {
				center: [55.75870495860828, 37.60096082232978],
				zoom: 16,
				controls: [],
				suppressMapOpenBlock: true,
				suppressObsoleteBrowserNotifier: true
			});
			mapDesktop.geoObjects.add(myPlacemark);
		}
	 })

	 
	if(window.innerWidth <= 580){
		console.log(mapMobile)
		mapMobile = new ymaps.Map("contacts__map-mobile", {
			center: [55.75870495860828, 37.60096082232978],
			zoom: 16,
			controls: [],
			suppressMapOpenBlock: true,
			suppressObsoleteBrowserNotifier: true
		});
		mapMobile.geoObjects.add(myPlacemark);
	}

}



	ymaps.ready(init);


	// const mapContacts = document.querySelector('.contacts__map');
	// const contactAddress = document.querySelector('.contacts__address');

	// let mapContactsClone = mapContacts.cloneNode();

	// console.log(mapContacts);
	// console.log(mapContactsClone);
	// mapContactsClone.classList.add('contacts__map-mobile');
	// let mapFlag = true;
	// // mapContactsClone.style.height = '600px'
	// // mapContacts.remove()
	// // contactAddress.after(mapContactsClone)
	// window.addEventListener('resize', ev => {
	// 	if(window.innerWidth <= 580){
	// 		// mapContacts.remove()
	// contactAddress.after(mapContactsClone)
			
	// 	}else{
			
	// 	}
	// })


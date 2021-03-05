
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
	ua = navigator.userAgent;
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
	return is_ie;
}
if (isIE()) {
	document.querySelector('body').classList.add('ie');
}
if (isMobile.any()) {
	document.querySelector('body').classList.add('_touch');
}
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('_webp');
	} else {
		document.querySelector('body').classList.add('_no-webp');
	}
});
function ibg() {
	if (isIE()) {
		let ibg = document.querySelectorAll("._ibg");
		for (var i = 0; i < ibg.length; i++) {
			if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
				ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
			}
		}
	}
}
ibg();

if (document.querySelector('.wrapper')) {
	document.querySelector('.wrapper').classList.add('_loaded');
}

let unlock = true;

//=================
//ActionsOnHash
if (location.hash) {
	const hsh = location.hash.replace('#', '');
	if (document.querySelector('.popup_' + hsh)) {
		popup_open(hsh);
	} else if (document.querySelector('div.' + hsh)) {
		_goto(document.querySelector('.' + hsh), 500, '');
	}
}
//=================
//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
	let delay = 500;
	let menuBody = document.querySelector(".menu__body");
	iconMenu.addEventListener("click", function (e) {
		if (unlock) {
			body_lock(delay);
			iconMenu.classList.toggle("_active");
			menuBody.classList.toggle("_active");
		}
	});
};
function menu_close() {
	let iconMenu = document.querySelector(".icon-menu");
	let menuBody = document.querySelector(".menu__body");
	iconMenu.classList.remove("_active");
	menuBody.classList.remove("_active");
}
//=================
//BodyLock

function body_lock(delay) {
	let body = document.querySelector("body");
	if (body.classList.contains('_lock')) {
		body_lock_remove(delay);
	} else {
		body_lock_add(delay);
	}
}
function body_lock_remove(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		setTimeout(() => {
			for (let index = 0; index < lock_padding.length; index++) {
				const el = lock_padding[index];
				el.style.paddingRight = '0px';
			}
			body.style.paddingRight = '0px';
			body.classList.remove("_lock");
		}, delay);

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
function body_lock_add(delay) {
	let body = document.querySelector("body");
	if (unlock) {
		let lock_padding = document.querySelectorAll("._lp");
		for (let index = 0; index < lock_padding.length; index++) {
			const el = lock_padding[index];
			el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		}
		body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
		body.classList.add("_lock");

		unlock = false;
		setTimeout(function () {
			unlock = true;
		}, delay);
	}
}
//=================

// LettersAnimation
let title = document.querySelectorAll('._letter-animation');
if (title) {
	for (let index = 0; index < title.length; index++) {
		let el = title[index];
		let txt = el.innerHTML;
		let txt_words = txt.replace('  ', ' ').split(' ');
		let new_title = '';
		for (let index = 0; index < txt_words.length; index++) {
			let txt_word = txt_words[index];
			let len = txt_word.length;
			new_title = new_title + '<p>';
			for (let index = 0; index < len; index++) {
				let it = txt_word.substr(index, 1);
				if (it == ' ') {
					it = '&nbsp;';
				}
				new_title = new_title + '<span>' + it + '</span>';
			}
			el.innerHTML = new_title;
			new_title = new_title + '&nbsp;</p>';
		}
	}
}
//=================
//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
}
//=================
//Spollers
let spollers = document.querySelectorAll("._spoller");
let spollersGo = true;
if (spollers.length > 0) {
	for (let index = 0; index < spollers.length; index++) {
		const spoller = spollers[index];
		spoller.addEventListener("click", function (e) {
			if (spollersGo) {
				spollersGo = false;
				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
					return false;
				}
				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
					return false;
				}
				if (spoller.closest('._spollers').classList.contains('_one')) {
					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
					for (let i = 0; i < curent_spollers.length; i++) {
						let el = curent_spollers[i];
						if (el != spoller) {
							el.classList.remove('_active');
							_slideUp(el.nextElementSibling);
						}
					}
				}
				spoller.classList.toggle('_active');
				_slideToggle(spoller.nextElementSibling);

				setTimeout(function () {
					spollersGo = true;
				}, 500);
			}
		});
	}
}
//=================
//Gallery
let gallery = document.querySelectorAll('._gallery');
if (gallery) {
	gallery_init();
}
function gallery_init() {
	for (let index = 0; index < gallery.length; index++) {
		const el = gallery[index];
		lightGallery(el, {
			counter: false,
			selector: 'a',
			download: false
		});
	}
}
//=================
//SearchInList
function search_in_list(input) {
	let ul = input.parentNode.querySelector('ul')
	let li = ul.querySelectorAll('li');
	let filter = input.value.toUpperCase();

	for (i = 0; i < li.length; i++) {
		let el = li[i];
		let item = el;
		txtValue = item.textContent || item.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			el.style.display = "";
		} else {
			el.style.display = "none";
		}
	}
}
//=================
//DigiFormat
function digi(str) {
	var r = str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
	return r;
}
//=================
//DiGiAnimate
function digi_animate(digi_animate) {
	if (digi_animate.length > 0) {
		for (let index = 0; index < digi_animate.length; index++) {
			const el = digi_animate[index];
			const el_to = parseInt(el.innerHTML.replace(' ', ''));
			if (!el.classList.contains('_done')) {
				digi_animate_value(el, 0, el_to, 1500);
			}
		}
	}
}
function digi_animate_value(el, start, end, duration) {
	var obj = el;
	var range = end - start;
	// no timer shorter than 50ms (not really visible any way)
	var minTimer = 50;
	// calc step time to show all interediate values
	var stepTime = Math.abs(Math.floor(duration / range));

	// never go below minTimer
	stepTime = Math.max(stepTime, minTimer);

	// get current time and calculate desired end time
	var startTime = new Date().getTime();
	var endTime = startTime + duration;
	var timer;

	function run() {
		var now = new Date().getTime();
		var remaining = Math.max((endTime - now) / duration, 0);
		var value = Math.round(end - (remaining * range));
		obj.innerHTML = digi(value);
		if (value == end) {
			clearInterval(timer);
		}
	}

	timer = setInterval(run, stepTime);
	run();

	el.classList.add('_done');
}
//POPUPS=================

// let popup_link = document.querySelectorAll('._popup-link');
// let popups = document.querySelectorAll('.popup');


//  document.addEventListener('click', event => {
//  	const popup_link = event.target.closest('._popup-link');
//  	const popup_close_icon = event.target.closest('.popup__close');
//  	const popupsAll = document.querySelectorAll('.popup');

// 	if(popup_link){
// 		console.log(popup_link.attributes)
// 	}

// // 	if(popup_link && popup_link.nextElementSibling.classList.contains('popup')){ 
// // 		let popup = popup_link.nextElementSibling;
// // 		popup_open(popup);
// // 	}if(popup_close_icon){
// // 		let popup_active = popup_close_icon.closest('.popup');
// // 		popup_close(popup_active)
// // 	}else if (!popup_close_icon && !popup_link && !event.target.closest('.popup__content')){

// // 		popupsAll.forEach(el => {
// // 			el.classList.contains('_active') ? popup_close(el) : false
// // 		})

// // 	}


// })


// function popup_open(item, video = '') {
// 	let activePopup = document.querySelectorAll('.popup._active');
// 	if (activePopup.length > 0) {
// 		popup_close('', false);
// 	}
// 	if (item && unlock) {

// 		item.classList.add('_active');

// 	}
// }

// function popup_close(item) {
// 			item.classList.remove('_active');
// }


// document.addEventListener('keydown', function (e) {
// 	if (e.code === 'Escape') {
// 		popup_close();
// 	}
// });

// const heroBtn = getDomEl('.hero');

// const cloneHeroBtn = heroBtn.cloneNode(true);
// heroBtn.remove()
// getDomEl('.gallery').after(cloneHeroBtn)


// for (let index = 0; index < popup_link.length; index++) {
// 	const el = popup_link[index];
// 	el.addEventListener('click', function (e) {
// 		if (unlock) {
// 			let item = el.getAttribute('href').replace('#', '');
// 			let video = el.getAttribute('data-video');
// 			popup_open(item, video);
// 		}
// 		e.preventDefault();
// 	})
// }
// for (let index = 0; index < popups.length; index++) {
// 	const popup = popups[index];
// 	popup.addEventListener("click", function (e) {
// 		if (!e.target.closest('.popup__body')) {
// 			popup_close(e.target.closest('.popup'));
// 		}
// 	});
// }
// function popup_open(item, video = '') {
// 	let activePopup = document.querySelectorAll('.popup._active');
// 	if (activePopup.length > 0) {
// 		popup_close('', false);
// 	}
// 	let curent_popup = document.querySelector('.popup_' + item);
// 	if (curent_popup && unlock) {
// 		if (video != '' && video != null) {
// 			let popup_video = document.querySelector('.popup_video');
// 			popup_video.querySelector('.popup__video').innerHTML = '<iframe src="https://www.youtube.com/embed/' + video + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>';
// 		}
// 		if (!document.querySelector('.menu__body._active')) {
// 			body_lock_add(500);
// 		}
// 		curent_popup.classList.add('_active');
// 		history.pushState('', '', '#' + item);
// 	}
// }
// function popup_close(item, bodyUnlock = true) {
// 	if (unlock) {
// 		if (!item) {
// 			for (let index = 0; index < popups.length; index++) {
// 				const popup = popups[index];
// 				let video = popup.querySelector('.popup__video');
// 				if (video) {
// 					video.innerHTML = '';
// 				}
// 				popup.classList.remove('_active');
// 			}
// 		} else {
// 			let video = item.querySelector('.popup__video');
// 			if (video) {
// 				video.innerHTML = '';
// 			}
// 			item.classList.remove('_active');
// 		}
// 		if (!document.querySelector('.menu__body._active') && bodyUnlock) {
// 			body_lock_remove(500);
// 		}
// 		history.pushState('', '', window.location.href.split('#')[0]);
// 	}
// }
// let popup_close_icon = document.querySelectorAll('.popup__close,._popup-close');
// if (popup_close_icon) {
// 	for (let index = 0; index < popup_close_icon.length; index++) {
// 		const el = popup_close_icon[index];
// 		el.addEventListener('click', function () {
// 			popup_close(el.closest('.popup'));
// 		})
// 	}
// }
// document.addEventListener('keydown', function (e) {
// 	if (e.code === 'Escape') {
// 		popup_close();
// 	}
// });
//=================
//SlideToggle
let _slideUp = (target, duration = 500) => {
	target.classList.remove('aboba')

	// target.style.transitionProperty = 'height, margin, padding';
	// target.style.transitionDuration = duration + 'ms';
	// target.style.height = target.offsetHeight + 'px';
	// target.offsetHeight;
	// target.style.overflow = 'hidden';
	// target.style.height = 0;
	// target.style.paddingTop = 0;
	// target.style.paddingBottom = 0;
	// target.style.marginTop = 0;
	// target.style.marginBottom = 0;
	// window.setTimeout(() => {
	// 	target.style.display = 'none';
	// 	target.style.removeProperty('height');
	// 	target.style.removeProperty('padding-top');
	// 	target.style.removeProperty('padding-bottom');
	// 	target.style.removeProperty('margin-top');
	// 	target.style.removeProperty('margin-bottom');
	// 	target.style.removeProperty('overflow');
	// 	target.style.removeProperty('transition-duration');
	// 	target.style.removeProperty('transition-property');
		target.classList.remove('_slide');
	// }, duration);
}
let _slideDown = (target, duration = 500) => {
	target.classList.add('aboba')
	// target.style.removeProperty('display');
	// let display = window.getComputedStyle(target).display;
	// if (display === 'none')
	// 	display = 'block';

	// target.style.display = display;
	// let height = target.offsetHeight;
	// target.style.overflow = 'hidden';
	// target.style.height = 0;
	// target.style.paddingTop = 0;
	// target.style.paddingBottom = 0;
	// target.style.marginTop = 0;
	// target.style.marginBottom = 0;
	// target.offsetHeight;
	// target.style.transitionProperty = "height, margin, padding";
	// target.style.transitionDuration = duration + 'ms';
	// target.style.height = height + 'px';
	// target.style.removeProperty('padding-top');
	// target.style.removeProperty('padding-bottom');
	// target.style.removeProperty('margin-top');
	// target.style.removeProperty('margin-bottom');
	// window.setTimeout(() => {
	// 	target.style.removeProperty('height');
	// 	target.style.removeProperty('overflow');
	// 	target.style.removeProperty('transition-duration');
	// 	target.style.removeProperty('transition-property');
	// 	target.classList.remove('_slide');
	// }, duration);
}
let _slideToggle = (target, duration = 500) => {
	if (!target.classList.contains('_slide')) {
		target.classList.add('_slide');
		if (window.getComputedStyle(target).display === 'none') {
			return _slideDown(target, duration);
		} else {
			return _slideUp(target, duration);
		}
	}
}
//========================================
//Wrap
function _wrap(el, wrapper) {
	el.parentNode.insertBefore(wrapper, el);
	wrapper.appendChild(el);
}
//========================================
//RemoveClasses
function _removeClasses(el, class_name) {
	for (var i = 0; i < el.length; i++) {
		el[i].classList.remove(class_name);
	}
}
//========================================
//IsHidden
function _is_hidden(el) {
	return (el.offsetParent === null)
}
//========================================
//Animate
function animate({ timing, draw, duration }) {
	let start = performance.now();
	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) timeFraction = 1;

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}

	});
}
function makeEaseOut(timing) {
	return function (timeFraction) {
		return 1 - timing(1 - timeFraction);
	}
}
function makeEaseInOut(timing) {
	return function (timeFraction) {
		if (timeFraction < .5)
			return timing(2 * timeFraction) / 2;
		else
			return (2 - timing(2 * (1 - timeFraction))) / 2;
	}
}
function quad(timeFraction) {
	return Math.pow(timeFraction, 2)
}
function circ(timeFraction) {
	return 1 - Math.sin(Math.acos(timeFraction));
}
/*
animate({
	duration: 1000,
	timing: makeEaseOut(quad),
	draw(progress) {
		window.scroll(0, start_position + 400 * progress);
	}
});*/

//Полифилы
(function () {
	// проверяем поддержку
	if (!Element.prototype.closest) {
		// реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null;
		};
	}
})();
(function () {
	// проверяем поддержку
	if (!Element.prototype.matches) {
		// определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();
// //let btn = document.querySelectorAll('button[type="submit"],input[type="submit"]');
// let forms = document.querySelectorAll('form');
// if (forms.length > 0) {
// 	for (let index = 0; index < forms.length; index++) {
// 		const el = forms[index];
// 		el.addEventListener('submit', form_submit);
// 	}
// }
// async function form_submit(e) {
// 	let btn = e.target;
// 	let form = btn.closest('form');
// 	let error = form_validate(form);
// 	if (error == 0) {
// 		let formAction = form.getAttribute('action') ? form.getAttribute('action').trim() : '#';
// 		let formMethod = form.getAttribute('method') ? form.getAttribute('method').trim() : 'GET';
// 		const message = form.getAttribute('data-message');
// 		const ajax = form.getAttribute('data-ajax');

// 		//SendForm
// 		if (ajax) {
// 			e.preventDefault();
// 			let formData = new FormData(form);
// 			form.classList.add('_sending');
// 			let response = await fetch(formAction, {
// 				method: formMethod,
// 				body: formData
// 			});
// 			if (response.ok) {
// 				let result = await response.json();
// 				form.classList.remove('_sending');
// 				if (message) {
// 					popup_open('_' + message + '-message');
// 				}
// 				form_clean(form);
// 			} else {
// 				alert("Ошибка");
// 				form.classList.remove('_sending');
// 			}
// 		}
// 	} else {
// 		let form_error = form.querySelectorAll('._error');
// 		if (form_error && form.classList.contains('_goto-error')) {
// 			_goto(form_error[0], 1000, 50);
// 		}
// 		e.preventDefault();
// 	}
// }
// function form_validate(form) {
// 	let error = 0;
// 	let form_req = form.querySelectorAll('._req');
// 	if (form_req.length > 0) {
// 		for (let index = 0; index < form_req.length; index++) {
// 			const el = form_req[index];
// 			if (!_is_hidden(el)) {
// 				error += form_validate_input(el);
// 			}
// 		}
// 	}
// 	return error;
// }
// function form_validate_input(input) {
// 	let error = 0;
// 	let input_g_value = input.getAttribute('data-value');

// 	if (input.getAttribute("name") == "email" || input.classList.contains("_email")) {
// 		if (input.value != input_g_value) {
// 			let em = input.value.replace(" ", "");
// 			input.value = em;
// 		}
// 		if (email_test(input) || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	} else if (input.getAttribute("type") == "checkbox" && input.checked == false) {
// 		form_add_error(input);
// 		error++;
// 	} else {
// 		if (input.value == '' || input.value == input_g_value) {
// 			form_add_error(input);
// 			error++;
// 		} else {
// 			form_remove_error(input);
// 		}
// 	}
// 	return error;
// }
// function form_add_error(input) {
// 	input.classList.add('_error');
// 	input.parentElement.classList.add('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// 	let input_error_text = input.getAttribute('data-error');
// 	if (input_error_text && input_error_text != '') {
// 		input.parentElement.insertAdjacentHTML('beforeend', '<div class="form__error">' + input_error_text + '</div>');
// 	}
// }
// function form_remove_error(input) {
// 	input.classList.remove('_error');
// 	input.parentElement.classList.remove('_error');

// 	let input_error = input.parentElement.querySelector('.form__error');
// 	if (input_error) {
// 		input.parentElement.removeChild(input_error);
// 	}
// }
// function form_clean(form) {
// 	let inputs = form.querySelectorAll('input,textarea');
// 	for (let index = 0; index < inputs.length; index++) {
// 		const el = inputs[index];
// 		el.parentElement.classList.remove('_focus');
// 		el.classList.remove('_focus');
// 		el.value = el.getAttribute('data-value');
// 	}
// 	let checkboxes = form.querySelectorAll('.checkbox__input');
// 	if (checkboxes.length > 0) {
// 		for (let index = 0; index < checkboxes.length; index++) {
// 			const checkbox = checkboxes[index];
// 			checkbox.checked = false;
// 		}
// 	}
// 	let selects = form.querySelectorAll('select');
// 	if (selects.length > 0) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_default_value = select.getAttribute('data-default');
// 			select.value = select_default_value;
// 			select_item(select);
// 		}
// 	}
// }

// let viewPass = document.querySelectorAll('.form__viewpass');
// for (let index = 0; index < viewPass.length; index++) {
// 	const element = viewPass[index];
// 	element.addEventListener("click", function (e) {
// 		if (element.classList.contains('_active')) {
// 			element.parentElement.querySelector('input').setAttribute("type", "password");
// 		} else {
// 			element.parentElement.querySelector('input').setAttribute("type", "text");
// 		}
// 		element.classList.toggle('_active');
// 	});
// }


// //Select
// let selects = document.getElementsByTagName('select');
// if (selects.length > 0) {
// 	selects_init();
// }
// function selects_init() {
// 	for (let index = 0; index < selects.length; index++) {
// 		const select = selects[index];
// 		select_init(select);
// 	}
// 	//select_callback();
// 	document.addEventListener('click', function (e) {
// 		selects_close(e);
// 	});
// 	document.addEventListener('keydown', function (e) {
// 		if (e.code === 'Escape') {
// 			selects_close(e);
// 		}
// 	});
// }
// function selects_close(e) {
// 	const selects = document.querySelectorAll('.select');
// 	if (!e.target.closest('.select')) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_body_options = select.querySelector('.select__options');
// 			select.classList.remove('_active');
// 			_slideUp(select_body_options, 100);
// 		}
// 	}
// }
// function select_init(select) {
// 	const select_parent = select.parentElement;
// 	const select_modifikator = select.getAttribute('class');
// 	const select_selected_option = select.querySelector('option:checked');
// 	select.setAttribute('data-default', select_selected_option.value);
// 	select.style.display = 'none';

// 	select_parent.insertAdjacentHTML('beforeend', '<div class="select select_' + select_modifikator + '"></div>');

// 	let new_select = select.parentElement.querySelector('.select');
// 	new_select.appendChild(select);
// 	select_item(select);
// }
// function select_item(select) {
// 	const select_parent = select.parentElement;
// 	const select_items = select_parent.querySelector('.select__item');
// 	const select_options = select.querySelectorAll('option');
// 	const select_selected_option = select.querySelector('option:checked');
// 	const select_selected_text = select_selected_option.text;
// 	const select_type = select.getAttribute('data-type');

// 	if (select_items) {
// 		select_items.remove();
// 	}

// 	let select_type_content = '';
// 	if (select_type == 'input') {
// 		select_type_content = '<div class="select__value icon-select-arrow"><input autocomplete="off" type="text" name="form[]" value="' + select_selected_text + '" data-error="Ошибка" data-value="' + select_selected_text + '" class="select__input"></div>';
// 	} else {
// 		select_type_content = '<div class="select__value icon-select-arrow"><span>' + select_selected_text + '</span></div>';
// 	}

// 	select_parent.insertAdjacentHTML('beforeend',
// 		'<div class="select__item">' +
// 		'<div class="select__title">' + select_type_content + '</div>' +
// 		'<div class="select__options">' + select_get_options(select_options) + '</div>' +
// 		'</div></div>');

// 	select_actions(select, select_parent);
// }
// function select_actions(original, select) {
// 	const select_item = select.querySelector('.select__item');
// 	const select_body_options = select.querySelector('.select__options');
// 	const select_options = select.querySelectorAll('.select__option');
// 	const select_type = original.getAttribute('data-type');
// 	const select_input = select.querySelector('.select__input');

// 	select_item.addEventListener('click', function () {
// 		let selects = document.querySelectorAll('.select');
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			const select_body_options = select.querySelector('.select__options');
// 			if (select != select_item.closest('.select')) {
// 				select.classList.remove('_active');
// 				_slideUp(select_body_options, 100);
// 			}
// 		}
// 		_slideToggle(select_body_options, 100);
// 		select.classList.toggle('_active');
// 	});

// 	for (let index = 0; index < select_options.length; index++) {
// 		const select_option = select_options[index];
// 		const select_option_value = select_option.getAttribute('data-value');
// 		const select_option_text = select_option.innerHTML;

// 		if (select_type == 'input') {
// 			select_input.addEventListener('keyup', select_search);
// 		} else {
// 			if (select_option.getAttribute('data-value') == original.value) {
// 				select_option.style.display = 'none';
// 			}
// 		}
// 		select_option.addEventListener('click', function () {
// 			for (let index = 0; index < select_options.length; index++) {
// 				const el = select_options[index];
// 				el.style.display = 'block';
// 			}
// 			if (select_type == 'input') {
// 				select_input.value = select_option_text;
// 				original.value = select_option_value;
// 			} else {
// 				select.querySelector('.select__value').innerHTML = '<span>' + select_option_text + '</span>';
// 				original.value = select_option_value;
// 				select_option.style.display = 'none';
// 			}
// 		});
// 	}
// }
// function select_get_options(select_options) {
// 	if (select_options) {
// 		let select_options_content = '';
// 		for (let index = 0; index < select_options.length; index++) {
// 			const select_option = select_options[index];
// 			const select_option_value = select_option.value;
// 			if (select_option_value != '') {
// 				const select_option_text = select_option.text;
// 				select_options_content = select_options_content + '<div data-value="' + select_option_value + '" class="select__option">' + select_option_text + '</div>';
// 			}
// 		}
// 		return select_options_content;
// 	}
// }
// function select_search(e) {
// 	let select_block = e.target.closest('.select ').querySelector('.select__options');
// 	let select_options = e.target.closest('.select ').querySelectorAll('.select__option');
// 	let select_search_text = e.target.value.toUpperCase();

// 	for (let i = 0; i < select_options.length; i++) {
// 		let select_option = select_options[i];
// 		let select_txt_value = select_option.textContent || select_option.innerText;
// 		if (select_txt_value.toUpperCase().indexOf(select_search_text) > -1) {
// 			select_option.style.display = "";
// 		} else {
// 			select_option.style.display = "none";
// 		}
// 	}
// }
// function selects_update_all() {
// 	let selects = document.querySelectorAll('select');
// 	if (selects) {
// 		for (let index = 0; index < selects.length; index++) {
// 			const select = selects[index];
// 			select_item(select);
// 		}
// 	}
// }

// //Placeholers
// let inputs = document.querySelectorAll('input[data-value],textarea[data-value]');
// inputs_init(inputs);

// function inputs_init(inputs) {
// 	if (inputs.length > 0) {
// 		for (let index = 0; index < inputs.length; index++) {
// 			const input = inputs[index];
// 			const input_g_value = input.getAttribute('data-value');
// 			input_placeholder_add(input);
// 			if (input.value != '' && input.value != input_g_value) {
// 				input_focus_add(input);
// 			}
// 			input.addEventListener('focus', function (e) {
// 				if (input.value == input_g_value) {
// 					input_focus_add(input);
// 					input.value = '';
// 				}
// 				if (input.getAttribute('data-type') === "pass") {
// 					input.setAttribute('type', 'password');
// 				}
// 				if (input.classList.contains('_date')) {
// 					/*
// 					input.classList.add('_mask');
// 					Inputmask("99.99.9999", {
// 						//"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 					*/
// 				}
// 				if (input.classList.contains('_phone')) {
// 					//'+7(999) 999 9999'
// 					//'+38(999) 999 9999'
// 					//'+375(99)999-99-99'
// 					input.classList.add('_mask');
// 					Inputmask("+7(999) 999 9999", {
// 						//"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 				}
// 				if (input.classList.contains('_digital')) {
// 					input.classList.add('_mask');
// 					Inputmask("9{1,}", {
// 						"placeholder": '',
// 						clearIncomplete: true,
// 						clearMaskOnLostFocus: true,
// 						onincomplete: function () {
// 							input_clear_mask(input, input_g_value);
// 						}
// 					}).mask(input);
// 				}
// 				form_remove_error(input);
// 			});
// 			input.addEventListener('blur', function (e) {
// 				if (input.value == '') {
// 					input.value = input_g_value;
// 					input_focus_remove(input);
// 					if (input.classList.contains('_mask')) {
// 						input_clear_mask(input, input_g_value);
// 					}
// 					if (input.getAttribute('data-type') === "pass") {
// 						input.setAttribute('type', 'text');
// 					}
// 				}
// 			});
// 			if (input.classList.contains('_date')) {
// 				datepicker(input, {
// 					customDays: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
// 					customMonths: ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
// 					formatter: (input, date, instance) => {
// 						const value = date.toLocaleDateString()
// 						input.value = value
// 					},
// 					onSelect: function (input, instance, date) {
// 						input_focus_add(input.el);
// 					}
// 				});
// 			}
// 		}
// 	}
// }
// function input_placeholder_add(input) {
// 	const input_g_value = input.getAttribute('data-value');
// 	if (input.value == '' && input_g_value != '') {
// 		input.value = input_g_value;
// 	}
// }
// function input_focus_add(input) {
// 	input.classList.add('_focus');
// 	input.parentElement.classList.add('_focus');
// }
// function input_focus_remove(input) {
// 	input.classList.remove('_focus');
// 	input.parentElement.classList.remove('_focus');
// }
// function input_clear_mask(input, input_g_value) {
// 	input.inputmask.remove();
// 	input.value = input_g_value;
// 	input_focus_remove(input);
// }

// //QUANTITY
// let quantityButtons = document.querySelectorAll('.quantity__button');
// if (quantityButtons.length > 0) {
// 	for (let index = 0; index < quantityButtons.length; index++) {
// 		const quantityButton = quantityButtons[index];
// 		quantityButton.addEventListener("click", function (e) {
// 			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
// 			if (quantityButton.classList.contains('quantity__button_plus')) {
// 				value++;
// 			} else {
// 				value = value - 1;
// 				if (value < 1) {
// 					value = 1
// 				}
// 			}
// 			quantityButton.closest('.quantity').querySelector('input').value = value;
// 		});
// 	}
// }

// //RANGE
// const priceSlider = document.querySelector('.price-filter__slider');
// if (priceSlider) {
// 	noUiSlider.create(priceSlider, {
// 		start: [0, 200000],
// 		connect: true,
// 		tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })],
// 		range: {
// 			'min': [0],
// 			'max': [200000]
// 		}
// 	});

// 	const priceStart = document.getElementById('price-start');
// 	const priceEnd = document.getElementById('price-end');
// 	priceStart.addEventListener('change', setPriceValues);
// 	priceEnd.addEventListener('change', setPriceValues);

// 	function setPriceValues() {
// 		let priceStartValue;
// 		let priceEndValue;
// 		if (priceStart.value != '') {
// 			priceStartValue = priceStart.value;
// 		}
// 		if (priceEnd.value != '') {
// 			priceEndValue = priceEnd.value;
// 		}
// 		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
// 	}
// }
// let scr_body = document.querySelector('body');
// let scr_blocks = document.querySelectorAll('._scr-sector');
// let scr_items = document.querySelectorAll('._scr-item');
// let scr_fix_block = document.querySelectorAll('._side-wrapper');
// let scr_min_height = 750;

// let scrolling = true;
// let scrolling_full = true;

// let scrollDirection = 0;

// //ScrollOnScroll
// window.addEventListener('scroll', scroll_scroll);
// function scroll_scroll() {
// 	//scr_body.setAttribute('data-scroll', pageYOffset);
// 	let src_value = pageYOffset;
// 	let header = document.querySelector('header.header');
// 	if (header !== null) {
// 		if (src_value > 10) {
// 			header.classList.add('_scroll');
// 		} else {
// 			header.classList.remove('_scroll');
// 		}
// 	}
// 	if (scr_blocks.length > 0) {
// 		for (let index = 0; index < scr_blocks.length; index++) {
// 			let block = scr_blocks[index];
// 			let block_offset = offset(block).top;
// 			let block_height = block.offsetHeight;

// 			if ((pageYOffset > block_offset - window.innerHeight / 1.5) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
// 				block.classList.add('_scr-sector_active');
// 			} else {
// 				if (block.classList.contains('_scr-sector_active')) {
// 					block.classList.remove('_scr-sector_active');
// 				}
// 			}
// 			if ((pageYOffset > block_offset - window.innerHeight / 2) && pageYOffset < (block_offset + block_height) - window.innerHeight / 5) {
// 				if (!block.classList.contains('_scr-sector_current')) {
// 					block.classList.add('_scr-sector_current');
// 				}
// 			} else {
// 				if (block.classList.contains('_scr-sector_current')) {
// 					block.classList.remove('_scr-sector_current');
// 				}
// 			}
// 		}
// 	}
// 	if (scr_items.length > 0) {
// 		for (let index = 0; index < scr_items.length; index++) {
// 			let scr_item = scr_items[index];
// 			let scr_item_offset = offset(scr_item).top;
// 			let scr_item_height = scr_item.offsetHeight;


// 			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
// 			if (window.innerHeight > scr_item_height) {
// 				scr_item_point = window.innerHeight - scr_item_height / 3;
// 			}

// 			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
// 				scr_item.classList.add('_active');
// 				scroll_load_item(scr_item);
// 			} else {
// 				scr_item.classList.remove('_active');
// 			}
// 			if (((src_value > scr_item_offset - window.innerHeight))) {
// 				if (scr_item.querySelectorAll('._lazy').length > 0) {
// 					scroll_lazy(scr_item);
// 				}
// 			}
// 		}
// 	}

// 	if (scr_fix_block.length > 0) {
// 		fix_block(scr_fix_block, src_value);
// 	}
// 	let custom_scroll_line = document.querySelector('._custom-scroll__line');
// 	if (custom_scroll_line) {
// 		let window_height = window.innerHeight;
// 		let content_height = document.querySelector('.wrapper').offsetHeight;
// 		let scr_procent = (pageYOffset / (content_height - window_height)) * 100;
// 		let custom_scroll_line_height = custom_scroll_line.offsetHeight;
// 		custom_scroll_line.style.transform = "translateY(" + (window_height - custom_scroll_line_height) / 100 * scr_procent + "px)";
// 	}

// 	if (src_value > scrollDirection) {
// 		// downscroll code
// 	} else {
// 		// upscroll code
// 	}
// 	scrollDirection = src_value <= 0 ? 0 : src_value;
// }
// setTimeout(function () {
// 	//document.addEventListener("DOMContentLoaded", scroll_scroll);
// 	scroll_scroll();
// }, 100);

// function scroll_lazy(scr_item) {
// 	let lazy_src = scr_item.querySelectorAll('*[data-src]');
// 	if (lazy_src.length > 0) {
// 		for (let index = 0; index < lazy_src.length; index++) {
// 			const el = lazy_src[index];
// 			if (!el.classList.contains('_loaded')) {
// 				el.setAttribute('src', el.getAttribute('data-src'));
// 				el.classList.add('_loaded');
// 			}
// 		}
// 	}
// 	let lazy_srcset = scr_item.querySelectorAll('*[data-srcset]');
// 	if (lazy_srcset.length > 0) {
// 		for (let index = 0; index < lazy_srcset.length; index++) {
// 			const el = lazy_srcset[index];
// 			if (!el.classList.contains('_loaded')) {
// 				el.setAttribute('srcset', el.getAttribute('data-srcset'));
// 				el.classList.add('_loaded');
// 			}
// 		}
// 	}
// }

// function scroll_load_item(scr_item) {
// 	if (scr_item.classList.contains('_load-map') && !scr_item.classList.contains('_loaded-map')) {
// 		let map_item = document.getElementById('map');
// 		if (map_item) {
// 			scr_item.classList.add('_loaded-map');
// 			map();
// 		}
// 	}
// }

// //FullScreenScroll
// if (scr_blocks.length > 0 && !isMobile.any()) {
// 	disableScroll();
// 	window.addEventListener('wheel', full_scroll);
// }
// function full_scroll(e) {
// 	let viewport_height = window.innerHeight;
// 	if (viewport_height >= scr_min_height) {
// 		if (scrolling_full) {
// 			// ВЫЧИСЛИТЬ!!!
// 			let current_scroll = pageYOffset;//parseInt(scr_body.getAttribute('data-scroll'));
// 			//
// 			let current_block = document.querySelector('._scr-sector._scr-sector_current');
// 			let current_block_pos = offset(current_block).top;
// 			let current_block_height = current_block.offsetHeight;
// 			let current_block_next = current_block.nextElementSibling;
// 			let current_block_prev = current_block.previousElementSibling;
// 			let block_pos;
// 			if (e.keyCode == 40 || e.keyCode == 34 || e.deltaX > 0 || e.deltaY < 0) {
// 				if (current_block_prev) {
// 					let current_block_prev_height = current_block_prev.offsetHeight;
// 					block_pos = offset(current_block_prev).top;
// 					if (current_block_height <= viewport_height) {
// 						if (current_block_prev_height >= viewport_height) {
// 							block_pos = block_pos + (current_block_prev_height - viewport_height);
// 							full_scroll_to_sector(block_pos);
// 						}
// 					} else {
// 						enableScroll();
// 						if (current_scroll <= current_block_pos) {
// 							full_scroll_to_sector(block_pos);
// 						}
// 					}
// 				} else {
// 					full_scroll_pagestart();
// 				}
// 			} else if (e.keyCode == 38 || e.keyCode == 33 || e.deltaX < 0 || e.deltaY > 0) {
// 				if (current_block_next) {
// 					block_pos = offset(current_block_next).top;
// 					if (current_block_height <= viewport_height) {
// 						full_scroll_to_sector(block_pos);
// 					} else {
// 						enableScroll();
// 						if (current_scroll >= block_pos - viewport_height) {
// 							full_scroll_to_sector(block_pos);
// 						}
// 					}
// 				} else {
// 					full_scroll_pageend();
// 				}
// 			}
// 		} else {
// 			disableScroll();
// 		}
// 	} else {
// 		enableScroll();
// 	}
// }
// function full_scroll_to_sector(pos) {
// 	disableScroll();
// 	scrolling_full = false;
// 	_goto(pos, 800);

// 	let scr_pause = 500;
// 	if (navigator.appVersion.indexOf("Mac") != -1) {
// 		scr_pause = 1000;
// 	};
// 	setTimeout(function () {
// 		scrolling_full = true;
// 	}, scr_pause);
// }
// function full_scroll_pagestart() { }
// function full_scroll_pageend() { }

// //ScrollOnClick (Navigation)
// let link = document.querySelectorAll('._goto-block');
// if (link) {
// 	let blocks = [];
// 	for (let index = 0; index < link.length; index++) {
// 		let el = link[index];
// 		let block_name = el.getAttribute('href').replace('#', '');
// 		if (block_name != '' && !~blocks.indexOf(block_name)) {
// 			blocks.push(block_name);
// 		}
// 		el.addEventListener('click', function (e) {
// 			if (document.querySelector('.menu__body._active')) {
// 				menu_close();
// 				body_lock_remove(500);
// 			}
// 			let target_block_class = el.getAttribute('href').replace('#', '');
// 			let target_block = document.querySelector('.' + target_block_class);
// 			_goto(target_block, 300);
// 			e.preventDefault();
// 		})
// 	}

// 	window.addEventListener('scroll', function (el) {
// 		let old_current_link = document.querySelectorAll('._goto-block._active');
// 		if (old_current_link) {
// 			for (let index = 0; index < old_current_link.length; index++) {
// 				let el = old_current_link[index];
// 				el.classList.remove('_active');
// 			}
// 		}
// 		for (let index = 0; index < blocks.length; index++) {
// 			let block = blocks[index];
// 			let block_item = document.querySelector('.' + block);
// 			if (block_item) {
// 				let block_offset = offset(block_item).top;
// 				let block_height = block_item.offsetHeight;
// 				if ((pageYOffset > block_offset - window.innerHeight / 3) && pageYOffset < (block_offset + block_height) - window.innerHeight / 3) {
// 					let current_links = document.querySelectorAll('._goto-block[href="#' + block + '"]');
// 					for (let index = 0; index < current_links.length; index++) {
// 						let current_link = current_links[index];
// 						current_link.classList.add('_active');
// 					}
// 				}
// 			}
// 		}
// 	})
// }
// //ScrollOnClick (Simple)
// let goto_links = document.querySelectorAll('._goto');
// if (goto_links) {
// 	for (let index = 0; index < goto_links.length; index++) {
// 		let goto_link = goto_links[index];
// 		goto_link.addEventListener('click', function (e) {
// 			let target_block_class = goto_link.getAttribute('href').replace('#', '');
// 			let target_block = document.querySelector('.' + target_block_class);
// 			_goto(target_block, 300);
// 			e.preventDefault();
// 		});
// 	}
// }
// function _goto(target_block, speed, offset = 0) {
// 	let header = '';
// 	//OffsetHeader
// 	//if (window.innerWidth < 992) {
// 	//	header = 'header';
// 	//}
// 	let options = {
// 		speedAsDuration: true,
// 		speed: speed,
// 		header: header,
// 		offset: offset,
// 		easing: 'easeOutQuad',
// 	};
// 	let scr = new SmoothScroll();
// 	scr.animateScroll(target_block, '', options);
// }

// //SameFunctions
// function offset(el) {
// 	var rect = el.getBoundingClientRect(),
// 		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
// 		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
// 	return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
// }
// function disableScroll() {
// 	if (window.addEventListener) // older FF
// 		window.addEventListener('DOMMouseScroll', preventDefault, false);
// 	document.addEventListener('wheel', preventDefault, { passive: false }); // Disable scrolling in Chrome
// 	window.onwheel = preventDefault; // modern standard
// 	window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
// 	window.ontouchmove = preventDefault; // mobile
// 	document.onkeydown = preventDefaultForScrollKeys;
// }
// function enableScroll() {
// 	if (window.removeEventListener)
// 		window.removeEventListener('DOMMouseScroll', preventDefault, false);
// 	document.removeEventListener('wheel', preventDefault, { passive: false }); // Enable scrolling in Chrome
// 	window.onmousewheel = document.onmousewheel = null;
// 	window.onwheel = null;
// 	window.ontouchmove = null;
// 	document.onkeydown = null;
// }
// function preventDefault(e) {
// 	e = e || window.event;
// 	if (e.preventDefault)
// 		e.preventDefault();
// 	e.returnValue = false;
// }
// function preventDefaultForScrollKeys(e) {
// 	/*if (keys[e.keyCode]) {
// 		preventDefault(e);
// 		return false;
// 	}*/
// }

// function fix_block(scr_fix_block, scr_value) {
// 	let window_width = parseInt(window.innerWidth);
// 	let window_height = parseInt(window.innerHeight);
// 	let header_height = parseInt(document.querySelector('header').offsetHeight) + 15;
// 	for (let index = 0; index < scr_fix_block.length; index++) {
// 		const block = scr_fix_block[index];
// 		let block_width = block.getAttribute('data-width');
// 		const item = block.querySelector('._side-block');
// 		if (!block_width) { block_width = 0; }
// 		if (window_width > block_width) {
// 			if (item.offsetHeight < window_height - (header_height + 30)) {
// 				if (scr_value > offset(block).top - (header_height + 15)) {
// 					item.style.cssText = "position:fixed;bottom:auto;top:" + header_height + "px;width:" + block.offsetWidth + "px;left:" + offset(block).left + "px;";
// 				} else {
// 					gotoRelative(item);
// 				}
// 				if (scr_value > (block.offsetHeight + offset(block).top) - (item.offsetHeight + (header_height + 15))) {
// 					block.style.cssText = "position:relative;";
// 					item.style.cssText = "position:absolute;bottom:0;top:auto;left:0px;width:100%";
// 				}
// 			} else {
// 				gotoRelative(item);
// 			}
// 		}
// 	}
// 	function gotoRelative(item) {
// 		item.style.cssText = "position:relative;bottom:auto;top:0px;left:0px;";
// 	}
// }

// if (!isMobile.any()) {
// 	//custom_scroll();
// 	/*
// 	window.addEventListener('wheel', scroll_animate, {
// 		capture: true,
// 		passive: true
// 	});
// 	window.addEventListener('resize', custom_scroll, {
// 		capture: true,
// 		passive: true
// 	});
// 	*/
// }
// function custom_scroll(event) {
// 	scr_body.style.overflow = 'hidden';
// 	let window_height = window.innerHeight;
// 	let custom_scroll_line = document.querySelector('._custom-scroll__line');
// 	let custom_scroll_content_height = document.querySelector('.wrapper').offsetHeight;
// 	let custom_cursor_height = Math.min(window_height, Math.round(window_height * (window_height / custom_scroll_content_height)));
// 	if (custom_scroll_content_height > window_height) {
// 		if (!custom_scroll_line) {
// 			let custom_scroll = document.createElement('div');
// 			custom_scroll_line = document.createElement('div');
// 			custom_scroll.setAttribute('class', '_custom-scroll');
// 			custom_scroll_line.setAttribute('class', '_custom-scroll__line');
// 			custom_scroll.appendChild(custom_scroll_line);
// 			scr_body.appendChild(custom_scroll);
// 		}
// 		custom_scroll_line.style.height = custom_cursor_height + 'px';
// 	}
// }

// let new_pos = pageYOffset;
// function scroll_animate(event) {
// 	let window_height = window.innerHeight;
// 	let content_height = document.querySelector('.wrapper').offsetHeight;
// 	let start_position = pageYOffset;
// 	let pos_add = 100;

// 	if (event.keyCode == 40 || event.keyCode == 34 || event.deltaX > 0 || event.deltaY < 0) {
// 		new_pos = new_pos - pos_add;
// 	} else if (event.keyCode == 38 || event.keyCode == 33 || event.deltaX < 0 || event.deltaY > 0) {
// 		new_pos = new_pos + pos_add;
// 	}
// 	if (new_pos > (content_height - window_height)) new_pos = content_height - window_height;
// 	if (new_pos < 0) new_pos = 0;

// 	if (scrolling) {
// 		scrolling = false;
// 		_goto(new_pos, 1000);

// 		let scr_pause = 100;
// 		if (navigator.appVersion.indexOf("Mac") != -1) {
// 			scr_pause = scr_pause * 2;
// 		};
// 		setTimeout(function () {
// 			scrolling = true;
// 			_goto(new_pos, 1000);
// 		}, scr_pause);
// 	}
// 	//If native scroll
// 	//disableScroll();
// }



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
		spaceBetween: 30,
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



(function () {
  if (typeof window.CustomEvent === 'function') return false;
  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }
  window.CustomEvent = CustomEvent;
})();

const templateSelect = (data = [], defaultText = 'Выберите из списка') => {
  let items = [];
  data.forEach(item => {
    let classItemSelected = '';
    if (item === defaultText) {
      classItemSelected = ' select__item_selected';
    }
    items.push(`<li class="select__item${classItemSelected}" data-select="item">${item}</li>`);
  });
  return `
  <div class="select__backdrop" data-select="backdrop"></div>
  <button type="button" class="select__trigger" data-select="trigger">
    ${defaultText}
  </button>
  <div class="select__dropdown">
    <ul class="select__items">
      ${items.join('')}
    </ul>
  </div>`;
};

class CustomSelect {
  constructor(selector, config) {
    this._$main = document.querySelector(selector);
    this._config = config || {};
    if (this._config.data) {
      this._render();
    }
    this._$trigger = this._$main.querySelector('[data-select="trigger"]');
    this._addEventListener();
  }
  _isShow() {
    return this._$main.classList.contains('select_show');
  }
  _changeItem(item) {
    if (!item.classList.contains('select__item_selected')) {
      const itemSelected = this._$main.querySelector('.select__item_selected');
      if (itemSelected) {
        itemSelected.classList.remove('select__item_selected');
      }
      item.classList.add('select__item_selected');
      this._$trigger.textContent = item.textContent;
      this._$main.dispatchEvent(this._changeValue);
      this._config.onSelected ? this._config.onSelected(item) : null;
    }
  }
  _eventHandler(e) {
    let $target = e.target;
    let type = $target.dataset.select;
    if (!type) {
      $target = $target.closest('[data-select]');
      type = $target.dataset.select;
    }
    if (type === 'trigger') {
      this.toggle();
    } else if (type === 'item') {
      this._changeItem($target);
      this.hide();
    } else if (type === 'backdrop') {
      // закрываем селект, если кликнули вне его
      this.hide();
    }
  }
  _addEventListener() {
    // привяжем функцию _eventHandler к контексту this
    this._eventHandler = this._eventHandler.bind(this);
    // добавим слушатель
    this._$main.addEventListener('click', this._eventHandler);
    this._changeValue = new CustomEvent('select.change');
  }
  _render() {
    // добавляем класс select, если его нет у базового элемента
    if (!this._$main.classList.contains('select')) {
      this._$main.classList.add('select');
    }
    this._$main.innerHTML = templateSelect(this._config['data'], this._config['defaultValue']);
  }
  show() {
    this._$main.classList.add('select_show');
  }
  hide() {
    this._$main.classList.remove('select_show');
  }
  toggle() {
    this._isShow() ? this.hide() : this.show();
  }
  // удаляем слушатели и данный селект из DOM
  destroy() {
    this._$main.removeEventListener('click', this._eventHandler);
    this._$main.innerHTML = '';
  }
  selectedItem(value) {
    if (typeof value === 'object') {
      if (value['value']) {
        this._$main.querySelectorAll('[data-select="item"]').forEach($item => {
          if ($item.textContent.trim() === value['value'].toString()) {
            this._changeItem($item);
            return;
          }
        });
      } else if (value['index'] >= 0) {
        const $item = this._$main.querySelectorAll('[data-select="item"]')[value['index']];
        this._changeItem($item);
      }
      return this.selectedItem();
    }
    let indexSelected = -1;
    let valueSelected = '';
    this._$main.querySelectorAll('[data-select="item"]').forEach(($element, index) => {
      if ($element.classList.contains('select__item_selected')) {
        indexSelected = index;
        valueSelected = $element.textContent;
      }
    });
    return { index: indexSelected, value: valueSelected };
  }
}

const arrRU = [                   
    'Иван Айвазовский',
    'Юрий Альберт ',
    'Василий Кандинский ',
    'Андрей Бартенев',
    'Иван Крамской',
    'Виктор Борисов-Мусатов',
    'Карл Брюллов',
    'Владимир Боровиковский',
    'Гриша Брускин',
    'Давид Бурлюк',
    'Эрик Булатов ',
    'Виктор Васнецов',
    'Владимир Вейсберг',
    'Алексей Венецианов',
    'Василий Верещагин ',
    'Михаил Врубель',
    'Николай Ге',
    'Наталья Гончарова',
    'Феофан Грек',
    'Дмитрий Гутов',
    'Александр Дейнека',
    'Анатолий Зверев',
    'Александр Иванов ',
    'Константин Звездочетов',
    'Константин Коровин'
];





const arrFR = [
    'Пьер Огюст Ренуар ',
    'Антуан Ватто',
    'Жак Луи Давид',
    'Клод Лоррен',
    'Поля Гогена',
    'Поль Сезанн',
    'Эдуард Мане',
    'Жан Огюст Доминик Энгр',
    'Никола Пуссен',
    'Клод Моне',
    'Камиль Писсарро',
    'Эдгар Дега',
    'Оноре Домье',
    'Эжена Делакруа',
    'Франсуа Буше',
    'Теодор Жерико',
    'Анри де Тулуз-Лотрек',
    'Жан Батист Камиль Коро',
    'Альбер Марке',
    'Анри Матисса',
    'Гюстава Моро',
    'Фредерик Базиль',
    'Гюстав Курбе',
    'Жан-Леон Жером'
];

const arrGer = [
    'Немецкий художник 1',
    'Немецкий художник 2',
    'Немецкий художник 3',
    'Немецкий художник 4',
    'Немецкий художник 5',
    'Немецкий художник 6',
    'Немецкий художник 7',
    'Немецкий художник 8',
    'Немецкий художник 9',
    'Немецкий художник 10',
    'Немецкий художник 11',
    'Немецкий художник 12',
    'Немецкий художник 13',
    'Немецкий художник 14',
    'Немецкий художник 15',
    'Немецкий художник 16',
    'Немецкий художник 17',
    'Немецкий художник 18',
    'Немецкий художник 19',
    'Немецкий художник 20',
    'Немецкий художник 21',
    'Немецкий художник 22',
    'Немецкий художник 23',
    'Немецкий художник 24',
];

const arrBelg = [
    'Бельгийский художник 1',
    'Бельгийский художник 2',
    'Бельгийский художник 3',
    'Бельгийский художник 4',
    'Бельгийский художник 5',
    'Бельгийский художник 6',
    'Бельгийский художник 7',
    'Бельгийский художник 8',
    'Бельгийский художник 9',
    'Бельгийский художник 10',
    'Бельгийский художник 11',
    'Бельгийский художник 12',
    'Бельгийский художник 13',
    'Бельгийский художник 14',
    'Бельгийский художник 15',
    'Бельгийский художник 16',
    'Бельгийский художник 17',
    'Бельгийский художник 18',
    'Бельгийский художник 19',
    'Бельгийский художник 20',
    'Бельгийский художник 21',
    'Бельгийский художник 22',
    'Бельгийский художник 23',
    'Бельгийский художник 24',
];

const arrIt = [
    'Бенедетто ди Биндо',
    'Бергоньоне, Амброджо',
    'Биссоло, Франческо',
    'Больтраффио, Джованни',
    'Бонсиньори, Франческо',
    'Боттичини, Рафаэлло',
    'Брамантино',
    'Бреа, Людовико',
    'Бьяджо д’Антонио Туччи',
    'Веккьетта',
    'Андреа Верроккьо',
    'Доменико Гирландайо',
    'Беноццо Гоццоли',
    'Граначчи, Франческо',
    'Грегорио ди Чекко',
    'Джованни да Удине',
    'Джованни ди Паоло',
    'Джорджоне',
    'Парентино, Бернардо',
    'Пезеллино',
    'Пьетро Перуджино',
    'Перуцци, Бальдассаре',
    'Пизанелло',
    'Пинтуриккьо',
];

function changeArr(arr){
    let newArr = [];
for (let index = 0; index < arr.length; index++) {
   let element = `<li class="catalog__accardion-item"><button class="catalog__accordion-nameBtn" type="button">${arr[index]}</button></li>`
    newArr.push(element)
};

arr.splice(0,arr.length,newArr.join(''));
return arr
};

const newArrRu = changeArr(arrRU);
const newArrGer = changeArr(arrGer);
const newArrIt = changeArr(arrIt);
const newArrFr = changeArr(arrFR);
const newArrBelg = changeArr(arrBelg);

window.onload = function() {
    function getDomEl (selector){
        return document.querySelector(selector)
    }
    
    function addClass(domEl, selector){
        domEl.classList.add(selector)
    };
    
    function removeClass(domEl, selector){
        domEl.classList.remove(selector)
    }
    
    
    const headerLogoEl = getDomEl('.header__logo');
    const headerBugerBtnEl = getDomEl('.header__burger');
    const headerTopEl = getDomEl('.header__top');
    const headerEl = getDomEl('.header');
    const headerSearch320El = getDomEl('.header__search320');
    
    
    
    function addClickListener(){
        document.addEventListener('click', function(event){
            activateHeaderDropDown(event);
            activateHeaderSearch(event);
            activateHeaderMenu(event);
            removeFocusLogo(event);
            deleteSelectItem(event);
            activatePopup(event);
            activateSpoller(event);
            selectCountry(event);
            activateCatalogInfoBlock(event);
            activateEventsSection(event);
            activateEditionsCheckbox(event);
            activateEditionsAcordion(event);
        });
    };
    
    // function addResizeListener(){
    //     window.addEventListener('resize', ev => {
    //         activateEventsSlider(ev);
    //     })
    // }
    
    function activateHeaderDropDown(event){
        let headerDropdownEl = event.target.closest('.header__bottom-item');
        if(headerDropdownEl){
            const headerSubMenuEl = headerDropdownEl.querySelector('.header__sub-menu');
            headerSubMenuEl.classList.toggle('header__sub-menu--active');
            [...headerSubMenuEl.querySelectorAll('.header__sub-link')].forEach(element=>{
                element.setAttribute('tabindex', '0')
            })
            const headerActiveSubMenuEl = document.querySelectorAll(".header__sub-menu--active");
            if(headerActiveSubMenuEl.length > 1){
                Array.from(headerActiveSubMenuEl).forEach(el => {
                    el.classList.remove('header__sub-menu--active')
                })
                headerSubMenuEl.classList.toggle('header__sub-menu--active');
            }   
    
          
            if(!headerDropdownEl.classList.contains('header__bottom-item--active')){
                const headerBottomItemsEl = document.querySelectorAll('.header__bottom-item');
                Array.from(headerBottomItemsEl).forEach(el => {
                    el.classList.remove('header__bottom-item--active')
                })
                addClass(headerDropdownEl,'header__bottom-item--active');
            }else{
                removeClass(headerDropdownEl,'header__bottom-item--active');
            } 
         
            
        }else if(event.target !== getDomEl('.header__bottom-link')){
            const headerActiveSubMenuEl = document.querySelectorAll(".header__sub-menu--active");
            const headerBottomItemsEl = document.querySelectorAll('.header__bottom-item--active');
    
                Array.from(headerActiveSubMenuEl).forEach(el => {
                    el.classList.remove('header__sub-menu--active')
                })
            Array.from(headerBottomItemsEl).forEach(el => {
                el.classList.remove('header__bottom-item--active')
            })
        }
        
    };
    
    const headerBottomLinkAllEl = [...document.querySelectorAll('.header__bottom-link')];
    headerBottomLinkAllEl.forEach(el => {
        el.addEventListener('focus', event => {
            const headerSubMenuEl = el.nextSibling.nextSibling;
            if(!headerSubMenuEl.classList.contains('header__sub-menu--active')){
            [...headerSubMenuEl.querySelectorAll('.header__sub-link')].forEach(element=>{
                element.setAttribute('tabindex', '-1')
            })
            }
        })
    })
    
    document.querySelector('.header__search-wrapper').addEventListener('mouseover', event => {
        const headerSearchWrapper1El = document.querySelector('.header__search-wrapper');
    if(headerSearchWrapper1El){
    
        addClass(headerSearchWrapper1El, 'header__search-wrapper--active')
    
        headerSearchWrapper1El.addEventListener('mouseout', function(){
    
         removeClass(headerSearchWrapper1El,'header__search-wrapper--active')
        })
    }
    })
    
    function activateHeaderSearch(event){
        const headerSearchWrapper1024El = getDomEl('.header__search-wrapper-1024px');
        const headerSearchInputEl = event.target.closest('.header__search-1024px');
        const headerSearchBtnEl = event.target.closest('.header__searchBtn-1024px');
        if(headerSearchBtnEl){
            if(window.innerWidth > 844){
                if(headerSearchBtnEl.classList.contains('header__searchBtn--hide')){
                    removeClass(headerSearchBtnEl,'header__searchBtn--hide');
                    removeClass(headerSearchWrapper1024El,'header__search--active');
                }else{
                    addClass(headerSearchWrapper1024El,'header__search--active');
                    addClass(headerSearchBtnEl,'header__searchBtn--hide');
                }
            } else if(window.innerWidth <= 844 && window.innerWidth > 400) {
                headerLogoEl.classList.add('hide');
                if(headerSearchBtnEl.classList.contains('header__searchBtn--hide')){
                    removeClass(headerSearchBtnEl,'header__searchBtn--hide');
                    removeClass(headerSearchWrapper1024El,'header__search--active');
                    removeClass(headerTopEl,'header__top--active');
                    removeClass(headerBugerBtnEl,'hide');
                    removeClass(headerLogoEl,'hide');
              
                }else{
                    addClass(headerSearchWrapper1024El,'header__search--active');
                    addClass(headerSearchBtnEl,'header__searchBtn--hide');
                    addClass(headerTopEl,'header__top--active');
                    addClass(headerBugerBtnEl,'hide');
                }
               
            }else if(window.innerWidth <= 400){
                const headerSearch320El = getDomEl('.header__search320');
                addClass(headerEl,'header--hide');
                addClass(headerSearch320El,'header__search320--show');
                getDomEl('.header__search320-input').tabIndex = '0';
                getDomEl('.header__search320-btn').tabIndex = '0';
            }
        } else if(!headerSearchInputEl){
            let headerSearchBtnHiddenEl = getDomEl('.header__searchBtn--hide');
            removeClass(headerSearchWrapper1024El,'header__search--active');
            headerSearchBtnHiddenEl ? removeClass(headerSearchBtnHiddenEl,'header__searchBtn--hide') : false
            removeClass(headerLogoEl,'hide')
            removeClass(headerBugerBtnEl,'hide');
            removeClass(headerTopEl,'header__top--active');
            removeClass(headerEl,'header--hide');
            removeClass(headerSearch320El,'header__search320--show');
            getDomEl('.header__search320-input').tabIndex = '-1';
            getDomEl('.header__search320-btn').tabIndex = '-1';
        }
    
    }
    
    function activateHeaderMenu(event){
        const headerBurgerEl = event.target.closest('.header__burger');
          const headerNavEl = getDomEl('.header__nav');
        if(headerBurgerEl){
           if (headerBurgerEl.classList.contains('active')){
                removeClass(headerBurgerEl,'active') 
                removeClass(headerNavEl,'header__nav--active')
            }else{
                headerBurgerEl.classList.add('active')
                headerNavEl.classList.add('header__nav--active')
            }
        } 
        if (event.target !== document.querySelector('.header__burger')) {
        
            getDomEl('.header__burger').classList.remove('active');
            removeClass(headerNavEl,'header__nav--active')
        }
    }
    
    function removeFocusLogo(event){
        const burgerEl = event.target.closest('.header__burger')
        const headerNavEl = getDomEl('.header__nav');
        if(burgerEl){
            if(headerNavEl.classList.contains('header__nav--active')){
             
                    headerLogoEl.setAttribute('tabindex', '-1');
                    getDomEl('.header__searchBtn-1024px').setAttribute('tabindex', '-1');
                    getDomEl('.hero__btn').setAttribute('tabindex', '-1');
                    [...document.querySelectorAll(".header__menu-link")].forEach(el => {
                        el.tabIndex = '0'
                    })
                    getDomEl('.header__login-1024px').setAttribute('tabindex', '0');
                
                    
          
            }else{
               headerLogoEl.removeAttribute('tabindex', '-1');
            getDomEl('.header__searchBtn-1024px').removeAttribute('tabindex', '-1') ;
            getDomEl('.hero__btn').removeAttribute('tabindex', '-1');
            [...document.querySelectorAll(".header__menu-link")].forEach(el => {
                el.tabIndex = '-1'
            });
            getDomEl('.header__login-1024px').setAttribute('tabindex', '-1');
            }
        }else{
    
            if(window.innerWidth <= 1024){
                headerLogoEl.removeAttribute('tabindex', '-1');
                getDomEl('.header__searchBtn-1024px').removeAttribute('tabindex', '-1');
                getDomEl('.hero__btn').removeAttribute('tabindex', '-1');
                [...document.querySelectorAll(".header__menu-link")].forEach(el => {
                    el.tabIndex = '-1'
                });
                getDomEl('.header__login-1024px').setAttribute('tabindex', '-1');
            }
    
        }
     
    }
    
    
    
    // ##############################################################################
    
    
    
    // const select1 = new CustomSelect('#select-1');
    
    const gallerySelectEl = getDomEl('.gallery__select');
    
    
    function deleteSelectItem(event){
    
    const gallerySelectItemEl = event.target.closest('.gallery__select-item');
    const gallerySelectTrigger = event.target.closest('.gallery__select-trigger');
    
    if(gallerySelectTrigger){
    
        [...document.querySelectorAll('.gallery__select-item')].forEach(el=>{
         
                if(el.classList.contains('select__item_selected')){
                    el.style.display = 'none'
                }else{
                    el.style.display = 'block'
                }
            
        })
    }
    
    if(event.target !== getDomEl('.gallery__select-trigger')){
        getDomEl('.gallery__select').classList.remove('select_show')
    
    
    }
    }
    
    

    
    // POPUPS############################################
    
    let popup_link = [...document.querySelectorAll('._popup-link')];
    let popups = [...document.querySelectorAll('.popup')];
    
    
    function activatePopup(event){
        const popup_link = event.target.closest('._popup-link');
        const popup_close_icon = event.target.closest('.popup__close');
        const popupsAll = document.querySelectorAll('.popup');
        if(popup_link){
                //  popup_link.getAttribute('popupName')
            popupsAll.forEach(el => {
                if(el.getAttribute('data-name') === popup_link.getAttribute('data-popupName')){
                popup_open(el);
                }
            })
        } else if(popup_close_icon){
            const popup_active = popup_close_icon.closest('.popup');
            popup_close(popup_active)
        } else if (!event.target.closest('.popup__body')){
    
                    popupsAll.forEach(el => {
                        el.classList.contains('_active') ? popup_close(el) : false
                    })
       
        }
    
    }
        function popup_open(item) {
                if (unlock) {
                    
                    if (!document.querySelector('.menu__body._active')) {
                        body_lock_add(500);
                    }
                    item.classList.add('_active');
                    focusManager.capture(item)
                }
            }
    
            function popup_close(item, bodyUnlock = true) {
        if (unlock) {
                    item.classList.remove('_active');
            if (!document.querySelector('.menu__body._active') && bodyUnlock) {
                body_lock_remove(500);
            }
        }
    }
    
    
    
    const element = document.querySelector('.gallery__select');
    const choices = new Choices(element, {
       searchEnabled: false,
       itemSelectText: '',
    });
    
    // ##################
    
    
    const langBtn = document.querySelectorAll('.catalog__lang-btn');

    langBtn.forEach(el => {
        el.addEventListener('click', ev => {
            langBtn.forEach(el => el.classList.remove('goo'))
            el.classList.toggle('goo');
         
        })
    });

    function selectCountry (event){

        const countryBtn = event.target.closest('.catalog__lang-btn');
        if(countryBtn){
            const allNameBtnList = [...document.querySelectorAll('.catalog__accordion-list')];
            

            if(countryBtn.classList.contains('catalog__lang-btn--franch')){

                allNameBtnList.forEach(el => {
                        el.innerHTML = newArrFr;
                        setNameBtnAttr()
                })
            };

            if(countryBtn.classList.contains('catalog__lang-btn--germany')){

                allNameBtnList.forEach(el => {
                        el.innerHTML = newArrGer;
                        setNameBtnAttr()
                })
            };

            if(countryBtn.classList.contains('catalog__lang-btn--russian')){

                allNameBtnList.forEach(el => {
                        el.innerHTML = newArrRu;
                        setNameBtnAttr()
                })
            };

            if(countryBtn.classList.contains('catalog__lang-btn--italian')){

                allNameBtnList.forEach(el => {
                        el.innerHTML = newArrIt;
                        setNameBtnAttr()
                })
            };

            if(countryBtn.classList.contains('catalog__lang-btn--belgium')){

                allNameBtnList.forEach(el => {
                        el.innerHTML = newArrBelg;
                        setNameBtnAttr()
                })
            }
        } 
    }


    var arr1 = '3649824598';
    var arr2 ='АБВГДЕЖЗИК';
    for (i=0; i<arr1.length; i++) {
        for (j=0; j<arr2.length; j++){
        if (arr1[i] == j) 
            arr1[i]=arr2[j];
            console.log (arr1);
        }
    }
    
    




    // SPOLLER#########################################################
    function activateSpoller(event){
        const spoller = event.target.closest('.catalog__accordion-btn');
        const allSpollersBody = [...document.querySelectorAll('.catalog__accordion-body')];
        const allSpollersLists = [...document.querySelectorAll('.catalog__accordion-list')];
        if(spoller){
            const spollerBody = spoller.nextElementSibling;
            const allLists = spollerBody.querySelectorAll('.catalog__accordion-list');
            const btn = spollerBody.previousElementSibling;
            const btnAll = [...document.querySelectorAll('.catalog__accordion-btn')];
    
            // if(window.innerWidth <= 400){
            //     allSpollersLists.forEach(el => removeClass(el, 'animate__animated '))
            // }
    
            if(spollerBody.classList.contains('catalog__accordion-body--active') && window.innerWidth > 440){
                removeClass(spollerBody,'catalog__accordion-body--active');
                removeClass(btn,'_active');
                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el =>{
                    el.tabIndex = -1;
                })
                // // allSpollersLists.forEach(el => removeClass(el,'animate__flipInX'))
                allLists.forEach(el => {
                    removeClass(el,'animate__flipInX')
                    addClass(el, "animate__flipOutX")
                });
    
            }else if (window.innerWidth > 440){
                allSpollersBody.forEach(el => removeClass(el,'catalog__accordion-body--active'));
                btnAll.forEach(el => removeClass(el,'_active'));
                allSpollersLists.forEach(el => addClass(el, 'animate__flipOutX'));
    
                addClass(spollerBody,'catalog__accordion-body--active');
                addClass(btn,'_active');
                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el =>{
                    el.tabIndex = 0;
                })
    
                allLists.forEach(el => {
                    removeClass(el, "animate__flipOutX")
                    setTimeout(() => {
                        addClass(el,'animate__flipInX')
                    }, 50);
                });
       
            } else if (spollerBody.classList.contains('catalog__accordion-body--active') && window.innerWidth <= 440){
                removeClass(spollerBody,'catalog__accordion-body--active');
                removeClass(btn,'_active');
                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el =>{
                    el.tabIndex = -1;
                })
    
            }else if( window.innerWidth <= 440){
                allSpollersBody.forEach(el => removeClass(el,'catalog__accordion-body--active'));
                btnAll.forEach(el => removeClass(el,'_active'));
    
                addClass(spollerBody,'catalog__accordion-body--active');
                addClass(btn,'_active');
    
                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el =>{
                    el.tabIndex = 0;
                })
    
            }
    
            
    
        }
    }
    
    
    const catalogAccordionBtn = [...document.querySelectorAll('.catalog__accordion-btn')];
    
    catalogAccordionBtn.forEach(el => {
        el.addEventListener('focus', ev => {
            const catalogAccordionBody = el.nextElementSibling;
            const catalogAccordionItem = [...catalogAccordionBody.querySelectorAll('.catalog__accordion-nameBtn')];
    
            if(!catalogAccordionBody.classList.contains('catalog__accordion-body--active')){
                catalogAccordionItem.forEach(el => el.tabIndex = -1)
            }
        })
    });
    
    // CATALOG_INFO_BLOCK ############################################################
    
    function setNameBtnAttr(){
        const allNameBtn = [...document.querySelectorAll('.catalog__accordion-nameBtn')];
    
        for (let index = 0; index < allNameBtn.length; index++) {
            if(index % 2 ===0){
                
                allNameBtn[index].setAttribute('data-tabName', 'Художник 1')
            }
       
            if(index % 2 ===1){
               allNameBtn[index].setAttribute('data-tabName', 'Художник 2')
           }
            
        }
    };
    

    
        function activateCatalogInfoBlock(event){
            const nameBtn = event.target.closest('.catalog__accordion-nameBtn');
            if(nameBtn){
                const allBlocks = [...document.querySelectorAll('.catalog__info-block')];
                const allBtnName = [...document.querySelectorAll('.catalog__accordion-nameBtn')];
                allBlocks.forEach(el => {
                    // removeClass(el, 'catalog__info-block--show');
                    if(el.getAttribute('data-blockName') === nameBtn.getAttribute('data-tabName')){
                        removeClass(el, 'catalog__info-block--hide');
    
                        el.querySelector('.catalog__info-name').textContent = nameBtn.textContent;
    
                        setTimeout(() => {
                        addClass(el, 'catalog__info-block--show')
                            
                        }, 300);
    
                        allBtnName.forEach(el => removeClass(el, 'catalog__accordion-nameBtn--active'))
    
                        addClass(nameBtn, 'catalog__accordion-nameBtn--active')
    
                    }else if(el.classList.contains('catalog__info-block--show')){
                        addClass(el, 'catalog__info-block--hide');
                        setTimeout(() => {
                            removeClass(el, 'catalog__info-block--show')
                                
                            }, 300);
                    }
                })
            }
        }
    
    // EVENTS ###################################
    const eventsInner = getDomEl('.events__inner');
    const allEventsLinks = [...document.querySelectorAll('.events__link')];
    
    allEventsLinks.forEach(el => el.setAttribute('tabindex', '-1'));
    
    for (let index = 0; index < 3 ; index++) {
       
        allEventsLinks[index].setAttribute('tabindex', '0');
        // // allEventsLinks[0].setAttribute('autofocus','')
        
    }
    
    function activateEventsSection(event){
        const sectionBtn = event.target.closest('.events__btn');
        if(sectionBtn && window.innerWidth > 600){
            
            console.log(eventsInner)
            addClass(eventsInner, 'events__inner--active');
                allEventsLinks.forEach(el => el.setAttribute('tabindex', '0'));
    
            allEventsLinks[0].focus()
            sectionBtn.style.display = 'none';
        }
    }
    
    // EVENTS__SLIDER_resize#############################
    const mediaQuerySizeEvent = 600;
    const mediaQuerySizeEdittions = 734;
    const editionsSliderEl = document.querySelector('.editions__slider');
    const editionsSliderWrapper = document.querySelector('.editions__slider-wrapper');
    const editionsSlideElAll = [...document.querySelectorAll('.editions__slide')];


function eventsSliderDestroy () {
  if (eventsSlider) {
    eventsSlider.destroy();
    eventsSlider = null;
  }
}
function editionsSliderDestroy () {
    if (editionsSlider) {
      editionsSlider.destroy();
      editionsSlider = null;
    }
  }



window.addEventListener('resize', function (ev){
 
  if (this.innerWidth <= mediaQuerySizeEvent) {
    // Инициализировать слайдер если он ещё не был инициализирован
    eventsSliderInit()
  } else {
    // Уничтожить слайдер если он был инициализирован
    eventsSliderDestroy()
  }

  if (this.innerWidth > mediaQuerySizeEdittions) {
    addClass(editionsSliderEl,'swiper-continer');
    addClass(editionsSliderWrapper,'swiper-wrapper')
    editionsSlideElAll.forEach(el => addClass(el,'swiper-slide'))
    // Инициализировать слайдер если он ещё не был инициализирован
    editionsSliderInit()
  } else {
      removeClass(editionsSliderEl,'swiper-continer');
      removeClass(editionsSliderWrapper,'swiper-wrapper');
      editionsSlideElAll.forEach(el => removeClass(el,'swiper-slide'))
    // Уничтожить слайдер если он был инициализирован
    editionsSliderDestroy()
  }

})

if (window.innerWidth > mediaQuerySizeEdittions) {
    addClass(editionsSliderEl,'swiper-continer');
    addClass(editionsSliderWrapper,'swiper-wrapper')
    editionsSlideElAll.forEach(el => addClass(el,'swiper-slide'))
    // Инициализировать слайдер если он ещё не был инициализирован
    editionsSliderInit()
  } else {
    removeClass(editionsSliderEl,'swiper-continer');
    removeClass(editionsSliderWrapper,'swiper-wrapper');
    editionsSlideElAll.forEach(el => removeClass(el,'swiper-slide'))
    // Уничтожить слайдер если он был инициализирован
    editionsSliderDestroy()
  }

if (window.innerWidth <= mediaQuerySizeEvent) {
  // Инициализировать слайдер если он ещё не был инициализирован
  eventsSliderInit()
} else {
  // Уничтожить слайдер если он был инициализирован
  eventsSliderDestroy()
}


function activateCheckBox(target){
const checkTarget = target.querySelector('.editions__check');
const CheckBox =  target.querySelector('.editions__checkbox-box');
const allCheckBoxes = [...document.querySelectorAll('.editions__checkbox-box')]
const allCheck = [...document.querySelectorAll('.editions__check')];
const categoriesAccordionList = getDomEl('.editions__accordion-list');
const mobileBtn = getDomEl('.editions__accordion-btn--mobile');


allCheckBoxes.forEach(el=>removeClass(el,'editions__checkbox-box--active'))
allCheck.forEach(el => removeClass(el,'editions__check--active'))
addClass(checkTarget,'editions__check--active');
addClass(CheckBox,'editions__checkbox-box--active');
removeClass(categoriesAccordionList,'editions__categories--active')
removeClass(mobileBtn,'editions__accordion-btn--mobile-active')


}

function activateEditionsCheckbox(event){
    const allCheck = [...document.querySelectorAll('.editions__check')];
    const targetCheck = event.target.closest('.editions__check');
    const allCheckBoxes = [...document.querySelectorAll('.editions__checkbox-box')]
    const liItemEl = event.target.closest('.editions__accordion-item');
    if(targetCheck){
        allCheckBoxes.forEach(el=>removeClass(el,'editions__checkbox-box--active'))
      const closestCheckBox =  targetCheck.querySelector('.editions__checkbox-box');
        allCheck.forEach(el => removeClass(el,'editions__check--active'))
        addClass(targetCheck,'editions__check--active');
        addClass(closestCheckBox,'editions__checkbox-box--active')
    }

    if(liItemEl){
        activateCheckBox(liItemEl)
    }
}

// EDITIONS__ACCORDION########################


function activateEditionsAcordion(event){
    const categoriesBtn = event.target.closest('.editions__accordion-btn--mobile');
    const allEditionsItemsAccordion = [...document.querySelectorAll('.editions__accordion-item')];
    if(categoriesBtn){
        const accordionBody = getDomEl('.editions__categories');
        if(accordionBody.classList.contains('editions__categories--active')){
            removeClass(accordionBody,'editions__categories--active')
            removeClass(categoriesBtn, 'editions__accordion-btn--mobile-active')
        }else{
            addClass(accordionBody,'editions__categories--active')
            addClass(categoriesBtn, 'editions__accordion-btn--mobile-active')
            allEditionsItemsAccordion.forEach(el => el.tabIndex = 0)
        }
    }
}

const categoriesBtn = getDomEl('.editions__accordion-btn--mobile');
const categoriesListEl = getDomEl('.editions__categories');

categoriesBtn.addEventListener('focus', (event)=>{
    const allEditionsItemsAccordion = [...document.querySelectorAll('.editions__accordion-item')];
    if(!categoriesListEl.classList.contains('.editions__categories--active')){
        allEditionsItemsAccordion.forEach(el => el.tabIndex = -1)
    }else{
        allEditionsItemsAccordion.forEach(el => el.tabIndex = 0)

    }
})


const allEditionsAccordionItems = [...document.querySelectorAll('.editions__accordion-item')];


allEditionsAccordionItems.forEach(el => {
    el.addEventListener('keyup', (event)=> {
        if(event.code === 'Enter' || event.code === 'Space'){
            activateCheckBox(el)
        }
    })
})

// EDITIONS__SLIDE-TITLE########################

const editionsSlideTitle = [...document.querySelectorAll('.editions__slide-title')];
const editionsSlideSubTitle = [...document.querySelectorAll('.editions__slide-sub-title')];

editionsSlideTitle.forEach(el => {
    if(el.textContent.length > 18){
        setInterval(function(){
            addClass(el,'editions__slide-title--active')
        },1000)
        setInterval(function(){
            removeClass(el,'editions__slide-title--active')
        },7000)
    }
});
editionsSlideSubTitle.forEach(el => {
    if(el.textContent.length > 18){
        setInterval(function(){
            addClass(el,'editions__slide-title--active')
        },1000)
        setInterval(function(){
            removeClass(el,'editions__slide-title--active')
        },7000)
    }
})

setNameBtnAttr()
addClickListener();
  };



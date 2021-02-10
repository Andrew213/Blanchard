


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
    });
};

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




// POPUPS###############################################



// document.addEventListener('click', event => {
// 	const popup_link = event.target.closest('._popup-link');
// 	const popup_close_icon = event.target.closest('.popup__close');
// 	const popupsAll = document.querySelectorAll('.popup');

// 	if(popup_link && popup_link.nextElementSibling.classList.contains('popup')){ 
// 		let popup = popup_link.nextElementSibling;
// 		popup_open(popup);
// 	}if(popup_close_icon){
// 		let popup_active = popup_close_icon.closest('.popup');
// 		popup_close(popup_active)
// 	}else if (!popup_close_icon && !popup_link && !event.target.closest('.popup__content')){

// 		popupsAll.forEach(el => {
// 			el.classList.contains('_active') ? popup_close(el) : false
// 		})

// 	}

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



// ##############


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

addClickListener();

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
   searchEnabled: false,
   itemSelectText: '',
});

// console.log(document.querySelectorAll('*:not(.gallery-popup)'))
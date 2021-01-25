const headerLogoEl = document.querySelector('.header__logo');
const headerBugerBtnEl = document.querySelector('.header__burger');
const headerTopEl = document.querySelector('.header__top');
const headerEl = document.querySelector('.header');
const headerSearch320El = document.querySelector('.header__search320');



function addClickListener(){
    document.addEventListener('click', function(event){

        // event.preventDefault();

        activateHeaderDropDown(event);
        activateHeaderSearch(event);
        activateHeaderMenu(event);
        removeFocusLogo(event)
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
        headerDropdownEl.classList.toggle('header__bottom-item--active');
    }else if(event.target !== document.querySelector('.header__bottom-link')){
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
    headerSearchWrapper1El.classList.add('header__search-wrapper--active');
    headerSearchWrapper1El.addEventListener('mouseout', function(){
        headerSearchWrapper1El.classList.remove('header__search-wrapper--active')
    })
}
})

function activateHeaderSearch(event){
    const headerSearchEl = event.target.closest('.header__search');
    const headerSearchWrapper1El = document.querySelector('.header__search-wrapper');
    const headerSearchWrapper1024El = document.querySelector('.header__search-wrapper-1024px');
    const headerSearchInputEl = event.target.closest('.header__search-1024px');
    const headerSearchBtnEl = event.target.closest('.header__searchBtn-1024px');
    if(headerSearchBtnEl){
        if(window.innerWidth > 844){
            if(headerSearchBtnEl.classList.contains('header__searchBtn--hide')){
                headerSearchBtnEl.classList.remove('header__searchBtn--hide');
                headerSearchWrapper1024El.classList.remove('header__search--active');
            }else{
                headerSearchWrapper1024El.classList.add('header__search--active');
                headerSearchBtnEl.classList.add('header__searchBtn--hide');
            }
        } else if(window.innerWidth <= 844 && window.innerWidth > 400) {
            headerLogoEl.classList.add('hide');
            if(headerSearchBtnEl.classList.contains('header__searchBtn--hide')){
                headerSearchBtnEl.classList.remove('header__searchBtn--hide');
                headerSearchWrapper1024El.classList.remove('header__search--active');
                headerTopEl.classList.remove('header__top--active');
                headerBugerBtnEl.classList.remove('hide');
                headerLogoEl.classList.remove('hide');
          
            }else{
                headerSearchWrapper1024El.classList.add('header__search--active');
                headerSearchBtnEl.classList.add('header__searchBtn--hide');
                headerTopEl.classList.add('header__top--active');
                headerBugerBtnEl.classList.add('hide');
            }
           
        }else if(window.innerWidth <= 400){
            const headerSearch320El = document.querySelector('.header__search320');
            headerEl.classList.add('header--hide');
            headerSearch320El.classList.add('header__search320--show');
            document.querySelector('.header__search320-input').tabIndex = '0';
            document.querySelector('.header__search320-btn').tabIndex = '0';
        }
    } else if(!headerSearchInputEl){
        let headerSearchBtnHiddenEl = document.querySelector('.header__searchBtn--hide');
        headerSearchWrapper1024El.classList.remove('header__search--active');
        headerSearchBtnHiddenEl ? headerSearchBtnHiddenEl.classList.remove('header__searchBtn--hide') : false
        headerLogoEl.classList.remove('hide')
        headerBugerBtnEl.classList.remove('hide');
        headerTopEl.classList.remove('header__top--active');
        headerEl.classList.remove('header--hide');
        headerSearch320El.classList.remove('header__search320--show');
        document.querySelector('.header__search320-input').tabIndex = '-1';
            document.querySelector('.header__search320-btn').tabIndex = '-1';
    }

}

function activateHeaderMenu(event){
    const headerBurgerEl = event.target.closest('.header__burger');
      const headerNavEl = document.querySelector('.header__nav');
    if(headerBurgerEl){
       if (headerBurgerEl.classList.contains('active')){
            headerBurgerEl.classList.remove('active') 
            headerNavEl.classList.remove('header__nav--active')
        }else{
            headerBurgerEl.classList.add('active')
            headerNavEl.classList.add('header__nav--active')
        }
    } 
    if (event.target !== document.querySelector('.header__burger')) {
    
        document.querySelector('.header__burger').classList.remove('active');
        headerNavEl.classList.remove('header__nav--active')
    }
}

function removeFocusLogo(event){
    const burgerEl = event.target.closest('.header__burger')
    const headerNavEl = document.querySelector('.header__nav');
    if(burgerEl){
        if(headerNavEl.classList.contains('header__nav--active')){
            headerLogoEl.setAttribute('tabindex', '-1');
            document.querySelector('.header__searchBtn-1024px').setAttribute('tabindex', '-1');
            document.querySelector('.hero__btn').setAttribute('tabindex', '-1');
            [...document.querySelectorAll(".header__menu-link")].forEach(el => {
                el.tabIndex = '0'
            })
            document.querySelector('.header__login-1024px').setAttribute('tabindex', '0');
        }else{
           headerLogoEl.removeAttribute('tabindex', '-1');
        document.querySelector('.header__searchBtn-1024px').removeAttribute('tabindex', '-1') ;
        document.querySelector('.hero__btn').removeAttribute('tabindex', '-1');
        [...document.querySelectorAll(".header__menu-link")].forEach(el => {
            el.tabIndex = '-1'
        });
        document.querySelector('.header__login-1024px').setAttribute('tabindex', '-1');
        }
    }else{
        headerLogoEl.removeAttribute('tabindex', '-1');
        document.querySelector('.header__searchBtn-1024px').removeAttribute('tabindex', '-1');
        document.querySelector('.hero__btn').removeAttribute('tabindex', '-1');
        [...document.querySelectorAll(".header__menu-link")].forEach(el => {
            el.tabIndex = '-1'
        });
        document.querySelector('.header__login-1024px').setAttribute('tabindex', '-1');
    }
 
}

addClickListener();
// document.querySelector('.header__burger').addEventListener('click', event => {
   
// })





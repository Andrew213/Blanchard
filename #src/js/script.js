function addClickListener(){
    document.addEventListener('click', function(event){

        // event.preventDefault();

        activateHeaderDropDown(event);
        activateHeaderSearch(event);
        activateHeaderMenu(event);
    });
};

function activateHeaderDropDown(event){
    const headerDropdownEl = event.target.closest('.header__bottom-item');
       
    if(headerDropdownEl){
        const headerSubMenuEl = headerDropdownEl.querySelector('.header__sub-menu');
        headerSubMenuEl.classList.toggle('header__sub-menu--active');
        headerDropdownEl.classList.toggle('header__bottom-item--active');
    }
};

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
    const headerSearchBtnEl = event.target.closest('.header__searchBtn--1024px');
    const headerSearchWrapper1024El = document.querySelector('.header__search-wrapper--1024px');
    const headerSearchInputEl = event.target.closest('.header__search--1024px');
    
    if(headerSearchBtnEl){
        headerSearchWrapper1024El.classList.add('header__search--active');
        headerSearchBtnEl.classList.add('header__searchBtn--hide');
    } else if(!headerSearchInputEl){
        let headerSearchBtnHiddenEl = document.querySelector('.header__searchBtn--hide');
        headerSearchWrapper1024El.classList.remove('header__search--active');
        headerSearchBtnHiddenEl ? headerSearchBtnHiddenEl.classList.remove('header__searchBtn--hide') : false
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

let heroEl = document.querySelector('.hero');
let body = document.body;

// setTimeout(()=>{
// heroEl.classList.add('hero__bg--3')
// },1000)

addClickListener()


window.onload = function () {
    function getDomEl(selector) {
        return document.querySelector(selector)
    }

    function addClass(domEl, selector) {
        domEl.classList.add(selector)
    };

    function removeClass(domEl, selector) {
        domEl.classList.remove(selector)
    }


    const headerLogoEl = getDomEl('.header__logo');
    const headerBugerBtnEl = getDomEl('.header__burger');
    const headerTopEl = getDomEl('.header__top');
    const headerEl = getDomEl('.header');
    const headerSearch320El = getDomEl('.header__search320');



    function addClickListener() {
        document.addEventListener('click', function (event) {
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

    function activateHeaderDropDown(event) {
        let headerDropdownEl = event.target.closest('.header__bottom-item');
        if (headerDropdownEl) {
            const headerSubMenuEl = headerDropdownEl.querySelector('.header__sub-menu');
            headerSubMenuEl.classList.toggle('header__sub-menu--active');
            [...headerSubMenuEl.querySelectorAll('.header__sub-link')].forEach(element => {
                element.setAttribute('tabindex', '0')
            })
            const headerActiveSubMenuEl = document.querySelectorAll(".header__sub-menu--active");
            if (headerActiveSubMenuEl.length > 1) {
                Array.from(headerActiveSubMenuEl).forEach(el => {
                    el.classList.remove('header__sub-menu--active')
                })
                headerSubMenuEl.classList.toggle('header__sub-menu--active');
            }


            if (!headerDropdownEl.classList.contains('header__bottom-item--active')) {
                const headerBottomItemsEl = document.querySelectorAll('.header__bottom-item');
                Array.from(headerBottomItemsEl).forEach(el => {
                    el.classList.remove('header__bottom-item--active')
                })
                addClass(headerDropdownEl, 'header__bottom-item--active');
            } else {
                removeClass(headerDropdownEl, 'header__bottom-item--active');
            }


        } else if (event.target !== getDomEl('.header__bottom-link')) {
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
            if (!headerSubMenuEl.classList.contains('header__sub-menu--active')) {
                [...headerSubMenuEl.querySelectorAll('.header__sub-link')].forEach(element => {
                    element.setAttribute('tabindex', '-1')
                })
            }
        })
    })

    document.querySelector('.header__search-wrapper').addEventListener('mouseover', event => {
        const headerSearchWrapper1El = document.querySelector('.header__search-wrapper');
        if (headerSearchWrapper1El) {

            addClass(headerSearchWrapper1El, 'header__search-wrapper--active')

            headerSearchWrapper1El.addEventListener('mouseout', function () {

                removeClass(headerSearchWrapper1El, 'header__search-wrapper--active')
            })
        }
    })

    function activateHeaderSearch(event) {
        const headerSearchWrapper1024El = getDomEl('.header__search-wrapper-1024px');
        const headerSearchInputEl = event.target.closest('.header__search-1024px');
        const headerSearchBtnEl = event.target.closest('.header__searchBtn-1024px');
        if (headerSearchBtnEl) {
            if (window.innerWidth > 844) {
                if (headerSearchBtnEl.classList.contains('header__searchBtn--hide')) {
                    removeClass(headerSearchBtnEl, 'header__searchBtn--hide');
                    removeClass(headerSearchWrapper1024El, 'header__search--active');
                } else {
                    addClass(headerSearchWrapper1024El, 'header__search--active');
                    addClass(headerSearchBtnEl, 'header__searchBtn--hide');
                }
            } else if (window.innerWidth <= 844 && window.innerWidth > 400) {
                headerLogoEl.classList.add('hide');
                if (headerSearchBtnEl.classList.contains('header__searchBtn--hide')) {
                    removeClass(headerSearchBtnEl, 'header__searchBtn--hide');
                    removeClass(headerSearchWrapper1024El, 'header__search--active');
                    removeClass(headerTopEl, 'header__top--active');
                    removeClass(headerBugerBtnEl, 'hide');
                    removeClass(headerLogoEl, 'hide');

                } else {
                    addClass(headerSearchWrapper1024El, 'header__search--active');
                    addClass(headerSearchBtnEl, 'header__searchBtn--hide');
                    addClass(headerTopEl, 'header__top--active');
                    addClass(headerBugerBtnEl, 'hide');
                }

            } else if (window.innerWidth <= 400) {
                const headerSearch320El = getDomEl('.header__search320');
                addClass(headerEl, 'header--hide');
                addClass(headerSearch320El, 'header__search320--show');
                getDomEl('.header__search320-input').tabIndex = '0';
                getDomEl('.header__search320-btn').tabIndex = '0';
            }
        } else if (!headerSearchInputEl) {
            let headerSearchBtnHiddenEl = getDomEl('.header__searchBtn--hide');
            removeClass(headerSearchWrapper1024El, 'header__search--active');
            headerSearchBtnHiddenEl ? removeClass(headerSearchBtnHiddenEl, 'header__searchBtn--hide') : false
            removeClass(headerLogoEl, 'hide')
            removeClass(headerBugerBtnEl, 'hide');
            removeClass(headerTopEl, 'header__top--active');
            removeClass(headerEl, 'header--hide');
            removeClass(headerSearch320El, 'header__search320--show');
            getDomEl('.header__search320-input').tabIndex = '-1';
            getDomEl('.header__search320-btn').tabIndex = '-1';
        }

    }

    function activateHeaderMenu(event) {
        const headerBurgerEl = event.target.closest('.header__burger');
        const headerNavEl = getDomEl('.header__nav');
        if (headerBurgerEl) {
            if (headerBurgerEl.classList.contains('active')) {
                removeClass(headerBurgerEl, 'active')
                removeClass(headerNavEl, 'header__nav--active')
            } else {
                headerBurgerEl.classList.add('active')
                headerNavEl.classList.add('header__nav--active')
            }
        }
        if (event.target !== document.querySelector('.header__burger')) {

            getDomEl('.header__burger').classList.remove('active');
            removeClass(headerNavEl, 'header__nav--active')
        }
    }

    function removeFocusLogo(event) {
        const burgerEl = event.target.closest('.header__burger')
        const headerNavEl = getDomEl('.header__nav');
        if (burgerEl) {
            if (headerNavEl.classList.contains('header__nav--active')) {

                headerLogoEl.setAttribute('tabindex', '-1');
                getDomEl('.header__searchBtn-1024px').setAttribute('tabindex', '-1');
                getDomEl('.hero__btn').setAttribute('tabindex', '-1');
                [...document.querySelectorAll(".header__menu-link")].forEach(el => {
                    el.tabIndex = '0'
                })
                getDomEl('.header__login-1024px').setAttribute('tabindex', '0');



            } else {
                headerLogoEl.removeAttribute('tabindex', '-1');
                getDomEl('.header__searchBtn-1024px').removeAttribute('tabindex', '-1');
                getDomEl('.hero__btn').removeAttribute('tabindex', '-1');
                [...document.querySelectorAll(".header__menu-link")].forEach(el => {
                    el.tabIndex = '-1'
                });
                getDomEl('.header__login-1024px').setAttribute('tabindex', '-1');
            }
        } else {

            if (window.innerWidth <= 1024) {
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


    function deleteSelectItem(event) {

        const gallerySelectItemEl = event.target.closest('.gallery__select-item');
        const gallerySelectTrigger = event.target.closest('.gallery__select-trigger');

        if (gallerySelectTrigger) {

            [...document.querySelectorAll('.gallery__select-item')].forEach(el => {

                if (el.classList.contains('select__item_selected')) {
                    el.style.display = 'none'
                } else {
                    el.style.display = 'block'
                }

            })
        }

        if (event.target !== getDomEl('.gallery__select-trigger')) {
            getDomEl('.gallery__select').classList.remove('select_show')


        }
    }




    // POPUPS############################################

    let popup_link = [...document.querySelectorAll('._popup-link')];
    let popups = [...document.querySelectorAll('.popup')];


    function activatePopup(event) {
        const popup_link = event.target.closest('._popup-link');
        const popup_close_icon = event.target.closest('.popup__close');
        const popupsAll = document.querySelectorAll('.popup');
        if (popup_link) {
            //  popup_link.getAttribute('popupName')
            popupsAll.forEach(el => {
                if (el.getAttribute('data-name') === popup_link.getAttribute('data-popupName')) {
                    popup_open(el);
                }
            })
        } else if (popup_close_icon) {
            const popup_active = popup_close_icon.closest('.popup');
            popup_close(popup_active)
        } else if (!event.target.closest('.popup__body')) {

            popupsAll.forEach(el => {
                el.classList.contains('_active') ? popup_close(el) : false
            })

        }

    }

    let unlock = true;

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

    function selectCountry(event) {

        const countryBtn = event.target.closest('.catalog__lang-btn');
        if (countryBtn) {
            const allNameBtnList = [...document.querySelectorAll('.catalog__accordion-list')];


            if (countryBtn.classList.contains('catalog__lang-btn--franch')) {

                allNameBtnList.forEach(el => {
                    el.innerHTML = newArrFr;
                    setNameBtnAttr()
                })
            };

            if (countryBtn.classList.contains('catalog__lang-btn--germany')) {

                allNameBtnList.forEach(el => {
                    el.innerHTML = newArrGer;
                    setNameBtnAttr()
                })
            };

            if (countryBtn.classList.contains('catalog__lang-btn--russian')) {

                allNameBtnList.forEach(el => {
                    el.innerHTML = newArrRu;
                    setNameBtnAttr()
                })
            };

            if (countryBtn.classList.contains('catalog__lang-btn--italian')) {

                allNameBtnList.forEach(el => {
                    el.innerHTML = newArrIt;
                    setNameBtnAttr()
                })
            };

            if (countryBtn.classList.contains('catalog__lang-btn--belgium')) {

                allNameBtnList.forEach(el => {
                    el.innerHTML = newArrBelg;
                    setNameBtnAttr()
                })
            }
        }
    }


    var arr1 = '3649824598';
    var arr2 = 'АБВГДЕЖЗИК';
    for (i = 0; i < arr1.length; i++) {
        for (j = 0; j < arr2.length; j++) {
            if (arr1[i] == j)
                arr1[i] = arr2[j];
            console.log(arr1);
        }
    }






    // SPOLLER#########################################################
    function activateSpoller(event) {
        const spoller = event.target.closest('.catalog__accordion-btn');
        const allSpollersBody = [...document.querySelectorAll('.catalog__accordion-body')];
        const allSpollersLists = [...document.querySelectorAll('.catalog__accordion-list')];
        if (spoller) {
            const spollerBody = spoller.nextElementSibling;
            const allLists = spollerBody.querySelectorAll('.catalog__accordion-list');
            const btn = spollerBody.previousElementSibling;
            const btnAll = [...document.querySelectorAll('.catalog__accordion-btn')];

            // if(window.innerWidth <= 400){
            //     allSpollersLists.forEach(el => removeClass(el, 'animate__animated '))
            // }

            if (spollerBody.classList.contains('catalog__accordion-body--active') && window.innerWidth > 440) {
                removeClass(spollerBody, 'catalog__accordion-body--active');
                removeClass(btn, '_active');
                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
                    el.tabIndex = -1;
                })
                // // allSpollersLists.forEach(el => removeClass(el,'animate__flipInX'))
                allLists.forEach(el => {
                    removeClass(el, 'animate__flipInX')
                    addClass(el, "animate__flipOutX")
                });

            } else if (window.innerWidth > 440) {
                allSpollersBody.forEach(el => removeClass(el, 'catalog__accordion-body--active'));
                btnAll.forEach(el => removeClass(el, '_active'));
                allSpollersLists.forEach(el => addClass(el, 'animate__flipOutX'));

                addClass(spollerBody, 'catalog__accordion-body--active');
                addClass(btn, '_active');
                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
                    el.tabIndex = 0;
                })

                allLists.forEach(el => {
                    removeClass(el, "animate__flipOutX")
                    setTimeout(() => {
                        addClass(el, 'animate__flipInX')
                    }, 50);
                });

            } else if (spollerBody.classList.contains('catalog__accordion-body--active') && window.innerWidth <= 440) {
                removeClass(spollerBody, 'catalog__accordion-body--active');
                removeClass(btn, '_active');
                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
                    el.tabIndex = -1;
                })

            } else if (window.innerWidth <= 440) {
                allSpollersBody.forEach(el => removeClass(el, 'catalog__accordion-body--active'));
                btnAll.forEach(el => removeClass(el, '_active'));

                addClass(spollerBody, 'catalog__accordion-body--active');
                addClass(btn, '_active');

                [...spoller.nextElementSibling.querySelectorAll('.catalog__accordion-nameBtn')].forEach(el => {
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

            if (!catalogAccordionBody.classList.contains('catalog__accordion-body--active')) {
                catalogAccordionItem.forEach(el => el.tabIndex = -1)
            }
        })
    });

    // CATALOG_INFO_BLOCK ############################################################

    function setNameBtnAttr() {
        const allNameBtn = [...document.querySelectorAll('.catalog__accordion-nameBtn')];

        for (let index = 0; index < allNameBtn.length; index++) {
            if (index % 2 === 0) {

                allNameBtn[index].setAttribute('data-tabName', 'Художник 1')
            }

            if (index % 2 === 1) {
                allNameBtn[index].setAttribute('data-tabName', 'Художник 2')
            }

        }
    };



    function activateCatalogInfoBlock(event) {
        const nameBtn = event.target.closest('.catalog__accordion-nameBtn');
        if (nameBtn) {
            const allBlocks = [...document.querySelectorAll('.catalog__info-block')];
            const allBtnName = [...document.querySelectorAll('.catalog__accordion-nameBtn')];
            allBlocks.forEach(el => {
                // removeClass(el, 'catalog__info-block--show');
                if (el.getAttribute('data-blockName') === nameBtn.getAttribute('data-tabName')) {
                    removeClass(el, 'catalog__info-block--hide');

                    el.querySelector('.catalog__info-name').textContent = nameBtn.textContent;

                    setTimeout(() => {
                        addClass(el, 'catalog__info-block--show')

                    }, 300);

                    allBtnName.forEach(el => removeClass(el, 'catalog__accordion-nameBtn--active'))

                    addClass(nameBtn, 'catalog__accordion-nameBtn--active')

                } else if (el.classList.contains('catalog__info-block--show')) {
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

    for (let index = 0; index < 3; index++) {

        allEventsLinks[index].setAttribute('tabindex', '0');
        // // allEventsLinks[0].setAttribute('autofocus','')

    }

    function activateEventsSection(event) {
        const sectionBtn = event.target.closest('.events__btn');
        if (sectionBtn && window.innerWidth > 600) {

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


    function eventsSliderDestroy() {
        if (eventsSlider) {
            eventsSlider.destroy();
            eventsSlider = null;
        }
    }
    function editionsSliderDestroy() {
        if (editionsSlider) {
            editionsSlider.destroy();
            editionsSlider = null;
        }
    }



    window.addEventListener('resize', function (ev) {

        if (this.innerWidth <= mediaQuerySizeEvent) {
            // Инициализировать слайдер если он ещё не был инициализирован
            eventsSliderInit()
        } else {
            // Уничтожить слайдер если он был инициализирован
            eventsSliderDestroy()
        }

        if (this.innerWidth > mediaQuerySizeEdittions) {
            addClass(editionsSliderEl, 'swiper-continer');
            addClass(editionsSliderWrapper, 'swiper-wrapper')
            editionsSlideElAll.forEach(el => addClass(el, 'swiper-slide'))
            // Инициализировать слайдер если он ещё не был инициализирован
            editionsSliderInit()
        } else {
            removeClass(editionsSliderEl, 'swiper-continer');
            removeClass(editionsSliderWrapper, 'swiper-wrapper');
            editionsSlideElAll.forEach(el => removeClass(el, 'swiper-slide'))
            // Уничтожить слайдер если он был инициализирован
            editionsSliderDestroy()
        }

    })

    if (window.innerWidth > mediaQuerySizeEdittions) {
        addClass(editionsSliderEl, 'swiper-continer');
        addClass(editionsSliderWrapper, 'swiper-wrapper')
        editionsSlideElAll.forEach(el => addClass(el, 'swiper-slide'))
        // Инициализировать слайдер если он ещё не был инициализирован
        editionsSliderInit()
    } else {
        removeClass(editionsSliderEl, 'swiper-continer');
        removeClass(editionsSliderWrapper, 'swiper-wrapper');
        editionsSlideElAll.forEach(el => removeClass(el, 'swiper-slide'))
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


    function activateCheckBox(target) {
        const checkTarget = target.querySelector('.editions__check');
        const CheckBox = target.querySelector('.editions__checkbox-box');
        const allCheckBoxes = [...document.querySelectorAll('.editions__checkbox-box')]
        const allCheck = [...document.querySelectorAll('.editions__check')];
        const categoriesAccordionList = getDomEl('.editions__accordion-list');
        const mobileBtn = getDomEl('.editions__accordion-btn--mobile');


        allCheckBoxes.forEach(el => removeClass(el, 'editions__checkbox-box--active'))
        allCheck.forEach(el => removeClass(el, 'editions__check--active'))
        addClass(checkTarget, 'editions__check--active');
        addClass(CheckBox, 'editions__checkbox-box--active');
        removeClass(categoriesAccordionList, 'editions__categories--active')
        removeClass(mobileBtn, 'editions__accordion-btn--mobile-active')


    }

    function activateEditionsCheckbox(event) {
        const allCheck = [...document.querySelectorAll('.editions__check')];
        const targetCheck = event.target.closest('.editions__check');
        const allCheckBoxes = [...document.querySelectorAll('.editions__checkbox-box')]
        const liItemEl = event.target.closest('.editions__accordion-item');
        if (targetCheck) {
            allCheckBoxes.forEach(el => removeClass(el, 'editions__checkbox-box--active'))
            const closestCheckBox = targetCheck.querySelector('.editions__checkbox-box');
            allCheck.forEach(el => removeClass(el, 'editions__check--active'))
            addClass(targetCheck, 'editions__check--active');
            addClass(closestCheckBox, 'editions__checkbox-box--active')
        }

        if (liItemEl) {
            activateCheckBox(liItemEl)
        }
    }

    // EDITIONS__ACCORDION########################


    function activateEditionsAcordion(event) {
        const categoriesBtn = event.target.closest('.editions__accordion-btn--mobile');
        const allEditionsItemsAccordion = [...document.querySelectorAll('.editions__accordion-item')];
        if (categoriesBtn) {
            const accordionBody = getDomEl('.editions__categories');
            if (accordionBody.classList.contains('editions__categories--active')) {
                removeClass(accordionBody, 'editions__categories--active')
                removeClass(categoriesBtn, 'editions__accordion-btn--mobile-active')
            } else {
                addClass(accordionBody, 'editions__categories--active')
                addClass(categoriesBtn, 'editions__accordion-btn--mobile-active')
                allEditionsItemsAccordion.forEach(el => el.tabIndex = 0)
            }
        }
    }

    const categoriesBtn = getDomEl('.editions__accordion-btn--mobile');
    const categoriesListEl = getDomEl('.editions__categories');

    categoriesBtn.addEventListener('focus', (event) => {
        const allEditionsItemsAccordion = [...document.querySelectorAll('.editions__accordion-item')];
        if (!categoriesListEl.classList.contains('.editions__categories--active')) {
            allEditionsItemsAccordion.forEach(el => el.tabIndex = -1)
        } else {
            allEditionsItemsAccordion.forEach(el => el.tabIndex = 0)

        }
    })


    const allEditionsAccordionItems = [...document.querySelectorAll('.editions__accordion-item')];


    allEditionsAccordionItems.forEach(el => {
        el.addEventListener('keyup', (event) => {
            if (event.code === 'Enter' || event.code === 'Space') {
                activateCheckBox(el)
            }
        })
    })

    // EDITIONS__SLIDE-TITLE########################

    const editionsSlideTitle = [...document.querySelectorAll('.editions__slide-title')];
    const editionsSlideSubTitle = [...document.querySelectorAll('.editions__slide-sub-title')];

    editionsSlideTitle.forEach(el => {
        if (el.textContent.length > 18) {
            setInterval(function () {
                addClass(el, 'editions__slide-title--active')
            }, 1000)
            setInterval(function () {
                removeClass(el, 'editions__slide-title--active')
            }, 7000)
        }
    });
    editionsSlideSubTitle.forEach(el => {
        if (el.textContent.length > 18) {
            setInterval(function () {
                addClass(el, 'editions__slide-title--active')
            }, 1000)
            setInterval(function () {
                removeClass(el, 'editions__slide-title--active')
            }, 7000)
        }
    })

    // INPUTMASK##########################
    Inputmask({ "mask": "+7 (999) 999-9999" }).mask(document.querySelector('input[type="tel"]'));

    setNameBtnAttr()
    addClickListener();

};


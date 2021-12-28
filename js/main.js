// window.addEventListener('DOMContentLoaded', function(){
//     document.querySelector("#list-initial-1").addEventListener('click', function(){
//         document.querySelector('#list-items').classList.toggle('is-active')
//     })
// });

// window.addEventListener('DOMContentLoaded', function(){
//     document.querySelector("#list-initial-2").addEventListener('click', function(){
//         document.querySelector('#list-items2').classList.toggle('is-active')
//     })
// });

// window.addEventListener('DOMContentLoaded', function(){
//     document.querySelector("#list-initial-3").addEventListener('click', function(){
//         document.querySelector('#list-items3').classList.toggle('is-active')
//     })
// });

// window.addEventListener('DOMContentLoaded', function(){
//     document.querySelector("#list-initial-4").addEventListener('click', function(){
//         document.querySelector('#list-items4').classList.toggle('is-active')
//     })
// });

// window.addEventListener('DOMContentLoaded', function(){
//     document.querySelector("#list-initial-5").addEventListener('click', function(){
//         document.querySelector('#list-items5').classList.toggle('is-active')
//     })
// });

// window.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.span-for-svg').addEventListener('click', function(){
//         document.querySelector('.span-for-svg').classList.toggle('is-active')
//     })
// });

// window.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.span-for-svg-2').addEventListener('click', function(){
//         document.querySelector('.span-for-svg-2').classList.toggle('is-active')
//     })
// });

// window.addEventListener('DOMContentLoaded', function() {
//     document.querySelector('.span-for-svg-3').addEventListener('click', function(){
//         document.querySelector('.span-for-svg-3').classList.toggle('is-active')
//     })
// });

// $(function(){
//     $(".section__events-article-card").slice(0,3).show();
//     $("#loadMore").on('click', function(e){
//         e.preventDefault();
//         $(".section__events-article-card:hidden").slice(0,3).slideDown();
//     })
// });





let num;
const mediaQuery = window.matchMedia('(max-width: 992px)');

function handleTabletChange(e) {
    if (e.matches) {
        console.log('mobile');
        num = 2;
        $(".section__events-article-card").hide();
        $(".section__events-article-card").slice(0, num).show();
    } else {
        num = 3;
        $(".section__events-article-card").hide();
        $(".section__events-article-card").slice(0, num).show();
    }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);
$("#loadMore").on('click', function (e) {
    e.preventDefault();
    $(".section__events-article-card:hidden").slice(0, num + 1).slideDown();
})

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.section__events-link-load-more').addEventListener('click', function () {
        document.querySelector('.section__events-link-load-more').classList.add('btn-hidden')
    })
});



$(function () {
    $("#accordion").accordion();
});

$(function () {
    $("#accordion2").accordion();
});

$(function () {
    $("#accordion3").accordion();
});

$(function () {
    $("#accordion4").accordion();
});

$(function () {
    $("#accordion5").accordion();
});

window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function (tabContent) {
                tabContent.classList.remove('tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('tab-content-active')
        })
    })
});


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.burger-menu-btn').addEventListener('click', function () {
        document.querySelector('.section__header-nav-lc-wrap').classList.add('open-burger-menu')
    })
})

window.addEventListener('DOMContentLoaded', function(){
    document.querySelector('.section__header-nav-lc-wrap-close-burger-menu').addEventListener('click', function(){
        document.querySelector('.section__header-nav-lc-wrap').classList.remove('open-burger-menu')
    })
})


$(function () {
    $("#accordion").accordion();
});



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs__btn').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content').forEach(function (
                tabContent) {
                tabContent.classList.remove(
                    'tab-content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList
                .add('tab-content-active')
        })
    })
});



document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.tabs__btn2').forEach(function (tabsBtn) {
        tabsBtn.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.tab-content2').forEach(function (
                tabContent) {
                tabContent.classList.remove(
                    'tab-content-active2')
            })
            document.querySelector(`[data-target="${path}"]`).classList
                .add(
                    'tab-content-active2')
        })
    })
});







window.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.section__editions-checkbox').forEach(function (arr1) {
        arr1.addEventListener('focus', function (event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.label-checkbox-editions').forEach(function (arr2) {
                arr2.classList.remove('focus-label')
            })
            document.querySelector(`[for="${event.target.id}"]`).classList.add('focus-label')
        })
    })
})








const element = document.querySelector('#section__gallery-select-category');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',

    classNames: {
        containerOuter: 'choices section__gallery-select-category',
    },
});






const swiper3 = new Swiper('.editions-slider-container', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,

    // If we need pagination
    pagination: {
        el: '.esp',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.editions-slider-next',
        prevEl: '.editions-slider-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        625: {
            slidesPerView: 1,
            spaceBetween: 34,
        },

        930: {
            slidesPerView: 2,
            spaceBetween: 30,
        },

        1024:{
            spaceBetween:50,
            slidesPerView: 2,
        },

        1200:{
            spaceBetween: 30,
        },

        1430: {
            slidesPerView: 3,
        },
    },

});

const swiper = new Swiper('.partners-swiper-container', {
    direction: 'horizontal',
    slidesPerView: 3,
    slidesPerColumn: 1,
    spaceBetween: 50,

    navigation: {
        nextEl: '.partners-slider-next',
        prevEl: '.partners-slider-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        1430: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

const swiper4 = new Swiper('.events-slider-container', {
    direction: 'horizontal',
    slidesPerView: 1,

    breakpoints: {

        320: {
            slidesPerView: 1,
        },

    },

    pagination: {
        el: '.events-slider-pagination',
        type: 'bullets',
        clickable: true,
    },
});

window.addEventListener('DOMContentLoaded', function () {
    new SmartPhoto(".js-smartPhoto", {
        resizeStyle: 'fit'
    });
});


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.section__top-nav-second-menu-item').addEventListener('click', function (event) {
        document.querySelector('.second-menu-btn').classList.toggle('is-active-list')
    })
});

let tabFlag = document.querySelectorAll('.section__catalog-flag-item');
tabFlag.forEach(item => {
    item.addEventListener('click', (e) => {
        tabFlag.forEach(el => {
            el.classList.remove('is-active-tab-flag');
        });
        item.classList.add('is-active-tab-flag');
    })
});

const accardBtn = document.querySelectorAll('.accardion-tabs-title');
accardBtn.forEach(item => {
    item.addEventListener('click', (i) => {
        accardBtn.forEach(el => {
            el.classList.remove('is-active-accardion-btn');
        });
        item.classList.add('is-active-accardion-btn');
    })
});

let tab2 = document.querySelectorAll('.tabs__btn2');
tab2.forEach(item => {
    item.addEventListener('click', (e) => {
        tab2.forEach(el => {
            el.classList.remove('is-active-tab2')
        })
        item.classList.add('is-active-tab2');
    })
});


window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.editions-btn-wrap').addEventListener('click', function (event) {
        document.querySelector('.section__editions-checkbox-wrap').classList.toggle('is-active-checkbox-list')
    })
});

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.editions-btn-wrap').addEventListener('click', function (event) {
        document.querySelector('.editions-btn-wrap').classList.toggle('is-active-btn-after')
    })
});

window.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.editions-btn-wrap').addEventListener('click', function (event) {

        let add = document.querySelectorAll('.checkbox-label-wrap');
        add.forEach(i => {
            i.classList.toggle('is-active-item');
        })
    })
});

window.addEventListener('DOMContentLoaded', function () {
    let ololo = document.querySelectorAll('.section__editions-checkbox');
    document.addEventListener('click', function () {

        ololo.forEach(trololo => {
            if (trololo.checked) {
                trololo.parentNode.classList.add('item-checked');
            } else {
                trololo.parentNode.classList.remove('item-checked');
            }
        })

    })
});


ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.758139, 37.600334],
            zoom: 18,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemarkWithContent = new ymaps.Placemark([55.758139, 37.600334], {
            hintContent: 'West coast',
            balloonContent: '',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/contacts/map-mark.svg',
            // Размеры метки.
            iconImageSize: [24, 24],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemarkWithContent);
});

let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask("+7 (999) 999-99-99");
im.mask(selector);

new window.JustValidate('.contact-form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 30
        },

        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.Inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },

    messages: {
        tel: 'Укажите ваш телефон',
        name: 'Как вас зовут?',
    },
});

const swiper7 = new Swiper('.slider-hero-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
});

const swiper11 = new Swiper('.slider-cont', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerColumn: 2,

    grid: {
        rows: 2,
    },

    breakpoints: {

        320:{
            slidesPerView:1,
            grid:{
                rows:1
            }
        },

        576:{
            slidesPerView:2,
            grid:{
                rows:2
            },
            spaceBetween:30
        },


        1200:{
            slidesPerView:3,
            grid:{
                rows:2
            },
            spaceBetween:50
        },
    },

    // If we need pagination
    pagination: {
        el: '.sp',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.sbn',
        prevEl: '.sbp',
    },
});

tippy('#tulltip-id-1', {
    content: 'Пример современных тенденций - современная методология разработки',
    trigger: 'click',
    theme: 'blanchard',
});

tippy('#tulltip-id-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции  ',
    trigger: 'click',
    theme: 'blanchard',
});

tippy('#tulltip-id-3', {
    content: 'В стремлении повысить качество',
    trigger: 'click',
    theme: 'blanchard',
});








document.querySelectorAll(".second-menu-btn").forEach(item => {
    item.addEventListener("click", function () {
        let btn = this;
        let dropdown = this.parentElement.querySelector(".wrap2");
        let arrow = this.parentElement.querySelector('.arrow-for-second-menu-btn');

        document.querySelectorAll(".second-menu-btn").forEach(el => {
            if (el != btn) {
                el.classList.remove("active-btn");
            }
        });

        document.querySelectorAll('.arrow-for-second-menu-btn').forEach(el => {
            el.classList.remove('active-arrow-rotate');
            el.classList.remove('active-arrow')
        })

        document.querySelectorAll(".wrap2").forEach(el => {
            if (el != dropdown) {
                el.classList.remove("section__top-nav-second-menu-item");
            }
        })
        dropdown.classList.toggle("section__top-nav-second-menu-item");
        btn.classList.toggle("active-btn");
        arrow.classList.toggle('active-arrow');
        arrow.classList.toggle('active-arrow-rotate');
    })
})

document.addEventListener("click", function (e) {
    let target = e.target;
    if (!target.closest(".section__top-nav-second-menu-list")) {
        document.querySelectorAll(".wrap2").forEach(el => {
            el.classList.remove("section__top-nav-second-menu-item");
        })
        document.querySelectorAll(".second-menu-btn").forEach(el => {
            el.classList.remove("active-btn");
        });

        document.querySelectorAll('.arrow-for-second-menu-btn').forEach(el => {
            el.classList.remove('active-arrow-rotate');
            el.classList.remove('active-arrow')
        })
    }
})



const btnOpen = document.querySelector('.btn-search');
const fromSearch = document.querySelector('.hide-search');
const wrapfromSearch = document.querySelector('.wrap-from-search');
const closeBtn = document.querySelector('.hide-close-btn-search');


btnOpen.addEventListener('click', ()=>{
    fromSearch.classList.toggle('open-closed');
    wrapfromSearch.classList.toggle('wrap-bg');
})

closeBtn.addEventListener('click', ()=>{
    wrapfromSearch.classList.remove('wrap-bg');
    fromSearch.classList.remove('open-closed');
})

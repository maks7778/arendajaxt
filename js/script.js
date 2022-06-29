$(document).ready(function () {
    $('.block-list__slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        // slidesToScroll:, страницы
        speed: 500,
        easing: 'linear',
        // infinite:true, бесконечность
        // initialSkide:0, выбор первого слайда
        // autoplay: true,
        // autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        // pauseOnDotsHover:true,
        // swipe:true, свайп для тач скринов
        touchThreshold: 10,
        // responsive: [
        //     {
        //         breakpoint: 1300,
        //         settings: {
        //             slidesToShow: 2
        //         }
        //     }
        // ]
        // touchMove:, регулирует листание касанием
        // waitForAnimate:, ругулирует листание кнопками управления (будет листаться посде окончания анимации или при клике)
        // centerMode:, центровка
        // variableWidth:, склеивает слайды
        // rows:, 
        // slidesPerRow:, количество слайдов
        // vertical:,
        // verticalSwiping:,
        // asNavFor:"", используется для связки нескольких слайдеров
        // mobileFirst:, работает вместе с функцией responsive -- переназначает разрешение на из max-width на min-width
        // appendArrows: $('.content'),
        //стрелки управления покидают блок слайдера и создают div с классом в скобках
        // appendDots: $('.имя класса'),
    })
});


$(document).ready(function () {
    $('.routes__list').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        // slidesToScroll:, страницы
        speed: 500,
        easing: 'linear',
        // infinite:true, бесконечность
        // initialSkide:0, выбор первого слайда
        // autoplay: true,
        // autoplaySpeed: 1000,
        pauseOnFocus: true,
        pauseOnHover: true,
        // pauseOnDotsHover:true,
        // swipe:true, свайп для тач скринов
        touchThreshold: 10,
        // touchMove:, регулирует листание касанием
        // waitForAnimate:, ругулирует листание кнопками управления (будет листаться посде окончания анимации или при клике)
        // centerMode:, центровка
        // variableWidth:, склеивает слайды
        // rows:, 
        // slidesPerRow:, количество слайдов
        // vertical:,
        // verticalSwiping:,
        // asNavFor:"", используется для связки нескольких слайдеров
        // responsive:[{
        //     breakpoint:768,
        //     settings:{
        //         // slidesToShow:2 (для привера)
        //     }
        // }]
        // mobileFirst:, работает вместе с функцией responsive -- переназначает разрешение на из max-width на min-width
        // appendArrows: $('.content'),
        //стрелки управления покидают блок слайдера и создают div с классом в скобках
        // appendDots: $('.имя класса'),
    })
});

const burgerMenu = document.querySelector('.header__menu-burger');
if (burgerMenu) {
    const burgerBody = document.querySelector('.header__nav');
    burgerMenu.addEventListener('click', function (e) {
        document.body.classList('lock');
        burgerMenu.classList.toggle('active');
        burgerBody.classList.toggle('active');
    })
}


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iOS/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile1/i);
    },

    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }

}

if (isMobile.any()) {
    document.body.classList.add('touch');

    let menuArrows = document.querySelectorAll('.menu-arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener('click', function (e) {
                menuArrow.parentElement.classList.toggle('active');
            });
        }
    }
} else {
    document.body.classList.add('pc');
};

const iconMenu = document.querySelector('.header__menu-burger');
if (iconMenu) {
    const headerNav = document.querySelector('.header__nav');
    iconMenu.addEventListener('click', function (e) {
        iconMenu.classList.toggle('active');
        headerNav.classList.toggle('active');
        document.body.classList.toggle('lock');
    })
}
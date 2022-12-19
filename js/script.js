// бургер

let BurgerOpen = document.querySelector('.burger');
let menu = document.querySelector('.header__links');
let links = menu.querySelectorAll('.header__link');

BurgerOpen.addEventListener('click', function () {

    BurgerOpen.classList.toggle('burger-active');
    menu.classList.toggle('nav-active');
    document.body.classList.toggle('stop-scroll');
});


//отключаю бургер при нажатии на ссылки
links.forEach(function (el) {
    el.addEventListener('click', function () {

        BurgerOpen.classList.remove('burger-active');
        menu.classList.remove('nav-active');
        document.body.classList.remove('stop-scroll');
    });
});

//------------------------------------------
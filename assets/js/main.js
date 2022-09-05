$(document).ready(function () {
    let reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            prevEl: '.reviews__prev',
            nextEl: '.reviews__next',
        },

    });
});
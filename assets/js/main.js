$(document).ready(function () {
    let reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            prevEl: '.reviews__prev',
            nextEl: '.reviews__next',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,

            },
            576: {
                slidesPerView: 1.2,
            },
            320: {
                slidesPerView: 1.2,
            },
        },
        on: {
            afterInit(swiper) {
                //console.log($('.reviews-slider .swiper-slide-active').attr('aria-label'));
                setTimeout(function () {
                    let reviewsSliderCurrent = $('.reviews-slider .swiper-slide-active').attr('aria-label').split(' / ');
                    $('.reviews-slider .pagination-digits_current').text(reviewsSliderCurrent[0]);
                    $('.reviews-slider .pagination-digits_total').text(reviewsSliderCurrent[1]);
                }, 0);
            }
        }
    });

    reviewsSlider.on('slideChange', function () {
        let reviewsSliderCurrent = reviewsSlider.slides.eq(reviewsSlider.activeIndex)[0].ariaLabel.split(' / ');
        $('.reviews-slider .pagination-digits_current').text(reviewsSliderCurrent[0]);
        $('.reviews-slider .pagination-digits_total').text(reviewsSliderCurrent[1]);
    });


    let actionsSlider = new Swiper('.actions-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: '.reviews__prev',
            nextEl: '.reviews__next',
        },
        breakpoints: {
            992: {
                slidesPerView: 1,

            },
            576: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            },
        },
        on: {
            afterInit(swiper) {
                //console.log($('.reviews-slider .swiper-slide-active').attr('aria-label'));
                setTimeout(function () {
                    let actionsSliderCurrent = $('.actions-slider .swiper-slide-active').attr('aria-label').split(' / ');
                    $('.actions-slider .pagination-digits_current').text(actionsSliderCurrent[0]);
                    $('.actions-slider .pagination-digits_total').text(actionsSliderCurrent[1]);
                }, 0);
            }
        }
    });

    actionsSlider.on('slideChange', function () {
        let actionsSliderCurrent = actionsSlider.slides.eq(actionsSlider.activeIndex)[0].ariaLabel.split(' / ');
        $('.actions-slider .pagination-digits_current').text(actionsSliderCurrent[0]);
        $('.actions-slider .pagination-digits_total').text(actionsSliderCurrent[1]);
    });

});
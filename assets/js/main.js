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

});
$(document).ready(function () {

    $('.services-selector a').on('click', function () {
        $('.services-selector a').removeClass('active');
        $(this).addClass('active');
        var indexSelector = $(this).parent().index();
        $('.service-block').eq(indexSelector).show().siblings().hide();
    });

    if ($(window).outerWidth() <= 575) {
        $('.problems-wrapper_cols').niceScroll({
            cursorcolor: "#ca6857",
            autohidemode: false,
            //background: "#ebdcd9",
            cursorborder: "1px solid #ca6857"
        });
    }

    let servicesHeaderSlider = new Swiper('.services-header', {
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            prevEl: '.services-pagination .reviews__prev',
            nextEl: '.services-pagination .reviews__next',
        },
        breakpoints: {
            992: {
                slidesPerView: 4,

            },
            576: {
                slidesPerView: 1.5,
            },
            320: {
                slidesPerView: 1.5,
            },
        }
    });

    let dSlider = new Swiper('.services-selector_content .swiper-container', {
        slidesPerView: 1,
        allowTouchMove: false,
        autoHeight: true,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });

    $('.services-header .swiper-slide').on('click', function () {
        $(this).addClass('slide-active').siblings().removeClass('slide-active');
        temp = $(this).attr('aria-label').split(' / ');
        idx = parseInt(temp[0]);
        //console.log(idx);
        dSlider.slideTo(idx - 1);
    });


    let reviewsSlider = new Swiper('.reviews-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            prevEl: '.reviews-pagination .reviews__prev',
            nextEl: '.reviews-pagination .reviews__next',
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
        loop: true,
        navigation: {
            prevEl: '.actions-pagination .reviews__prev',
            nextEl: '.actions-pagination .reviews__next',
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


    let certsSlider = new Swiper('.certificates-slider', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        slidesPerGroup: 3,
        slidesPerColumnFill: 'row',
        spaceBetween: 30,
        navigation: {
            prevEl: '.cert__prev',
            nextEl: '.cert__next',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,
                slidesPerColumn: 2,

            },
            576: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
            320: {
                slidesPerView: 2,
                slidesPerColumn: 2,
                slidesPerGroup: 3,
            },
        },
        on: {
            afterInit(swiper) {
                //console.log($('.reviews-slider .swiper-slide-active').attr('aria-label'));
                setTimeout(function () {
                    let certsSliderCurrent = $('.certificates-slider .swiper-slide-active').attr('aria-label').split(' / ');
                    $('.cerificates-content .pagination-digits_current').text(certsSliderCurrent[0]);
                    $('.cerificates-content .pagination-digits_total').text(certsSliderCurrent[1]);
                }, 0);
            }
        }
    });

    certsSlider.on('slideChange', function () {
        let certsSliderCurrent = $('.certificates-slider .swiper-slide-active').attr('aria-label').split(' / ');
        $('.cerificates-content .pagination-digits_current').text(certsSliderCurrent[0]);
        $('.cerificates-content .pagination-digits_total').text(certsSliderCurrent[1]);
    });


    let aboutSlider = new Swiper('.about-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
            prevEl: '.about-pagination .reviews__prev',
            nextEl: '.about-pagination .reviews__next',
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
                    let aboutSliderCurrent = $('.about-slider .swiper-slide-active').attr('aria-label').split(' / ');
                    $('.about-pagination .pagination-digits_current').text(aboutSliderCurrent[0]);
                    $('.about-pagination .pagination-digits_total').text(aboutSliderCurrent[1]);
                }, 0);
            }
        }
    });

    aboutSlider.on('slideChange', function () {
        setTimeout(function () {
            let aboutSliderCurrent = $('.about-slider .swiper-slide-active').attr('aria-label').split(' / ');
            $('.about-pagination .pagination-digits_current').text(aboutSliderCurrent[0]);
            $('.about-pagination .pagination-digits_total').text(aboutSliderCurrent[1]);
            current = parseInt(aboutSliderCurrent[0]) - 1;
            $('.about-sliders_tabs ul li a').removeClass('active').eq(current).addClass('active')
        }, 0);
    });

    $('.about-sliders_tabs ul li').on('click', function (e) {
        aboutSlider.slideTo($(this).index());
    });

    let worksSlider = new Swiper('.works-slider', {
        slidesPerView: 3,
        loop: true,
        spaceBetween: 30,
        navigation: {
            prevEl: '.works-pagination .reviews__prev',
            nextEl: '.works-pagination .reviews__next',
        },
        breakpoints: {
            992: {
                slidesPerView: 3,

            },
            576: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
                slidesPerColumnFill: 'row',
                slidesPerColumn: 2,
                slidesPerGroup: 2,
            },
        },
        on: {
            afterInit(swiper) {
                //console.log($('.reviews-slider .swiper-slide-active').attr('aria-label'));
                setTimeout(function () {
                    let worksSliderCurrent = $('.works-slider .swiper-slide-active').attr('aria-label').split(' / ');
                    $('.works-pagination .pagination-digits_current').text(worksSliderCurrent[0]);
                    $('.works-pagination .pagination-digits_total').text(worksSliderCurrent[1]);
                }, 0);
            }
        }
    });

    worksSlider.on('slideChange', function () {
        setTimeout(function () {
            let worksSliderCurrent = $('.works-slider .swiper-slide-active').attr('aria-label').split(' / ');
            $('.works-pagination .pagination-digits_current').text(worksSliderCurrent[0]);
            $('.works-pagination .pagination-digits_total').text(worksSliderCurrent[1]);
        }, 0);
    });

});
$(document).ready(function(){

    //item-tile-video
    $('.js-btn-video').on('click', function () {
        let videoURL = $(this).parent('.item-tile-video').attr('data-video');
        $(this).parents('.item-tile-video').addClass('active');
        $(this).parents('.item-tile-video').find('.tile-video').append('<iframe width="100%" height="100%" src="' + videoURL + '" frameborder="0" allowfullscreen></iframe>')
        return false;
    })


    //gallery slider
    if (!!$('.gallery-slider-box').offset()) {
        let pSlider = $('.gallery-slider-box .inner-slider-wrap .inner-slider').slick({
            dots: false,
            slidesToShow: 1,
            infinite: false,
            adaptiveHeight: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
        let pSliderPreview = $('.gallery-slider-box .inner-slider-tabs-wrap .inner-slider').slick({
            dots: false,
            slidesToShow: 1,
            vertical: false,
            infinite: false,
            variableWidth: true,
            prevArrow: false,
            nextArrow: false,
            rows: 1,
            swipeToSlide: true,
        });
        //pSlider.slick('refresh');
        //pSliderPreview.slick('refresh');
        $('.gallery-slider-box .inner-slider-wrap .inner-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
            $('.gallery-slider-box .inner-slider-tabs-wrap .sl-wrap.active').removeClass('active');
            $('.gallery-slider-box .inner-slider-tabs-wrap .btn-action-tab[data-slide="' + currentSlide + '"]').parent().addClass('active');
        });
        $('.gallery-slider-box .inner-slider-tabs-wrap .inner-slider .btn-action-tab').click(function () {
            let newSlide = $(this).attr('data-slide');
            $('.gallery-slider-box .inner-slider-tabs-wrap .sl-wrap.active').removeClass('active');
            $(this).parent().addClass('active');
            $('.gallery-slider-box .inner-slider-wrap .inner-slider').slick('slickGoTo', newSlide);
            return false;
        })
    }


    //guides-box
    if (!!$('.guides-box').offset()) {
        $('.guides-box .inner-slider').slick({
            dots: false,
            slidesToShow: 6,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 5,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        infinite: false,
                    }
                },
            ]
        });
    }
    
    
    //documents-box
    if (!!$('.documents-box').offset()) {
        $('.documents-box .inner-slider').slick({
            dots: false,
            slidesToShow: 4,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        variableWidth: true,
                        infinite: false,
                    }
                },
            ]
        });
    }

    //reviews-box
    if (!!$('.reviews-box').offset()) {
        $('.reviews-box .inner-slider').slick({
            dots: false,
            slidesToShow: 1,
            variableWidth: false,
            infinite: true,
            adaptiveHeight: false,
            rows: 1,
            swipeToSlide: true,
            prevArrow: '<span class="btn-action-ico ico-arrow ico-arrow-prev"></span>',
            nextArrow: '<span class="btn-action-ico ico-arrow ico-arrow-next"></span>',
        });
    }
    
	
});



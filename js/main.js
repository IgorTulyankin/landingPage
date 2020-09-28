$(function(){
	$('.popup-with-form').magnificPopup({
        type: 'inline',
        focus: '#name'
    });

    $('.slider__inner, .news__slider-inner').slick({
        prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
        infinite: false
    });

    $('select').styler();

    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
    });
    // плагин inputmask, +7 нельзя удалить
    $('.phone').inputmask({"mask": ["+7(999) 999-9999","+7(999) 999-9999",], keepStatic: true});

});

$(document).ready(function () {
  // Основной слайдер в карточке товара
  const swiperProductThumbs = new Swiper(".product-thumbs__swiper", {
    slidesPerView: "auto",
    spaceBetween: 9,
    mousewheel: false,
    keyboard: false,
  });

  const swiperProduct = new Swiper(".product-slider__swiper", {
    slidesPerView: 1,
    draggable: true,
    thumbs: {
      swiper: swiperProductThumbs,
    },
  });
  const swiperUnderSlide = new Swiper(".under_slider__swiper", {
    slidesPerView: 1,
    draggable: true,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 9000,
      disableOnInteraction: false,
    },
  });

  const swipeReviewSlide = new Swiper(".review_slider__swiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 14,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      540: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      }
    }

  });

  /* Меню */

  $(".hamburger").click(function() {
    $(this).toggleClass("active");
    $('body').toggleClass("mobile");
  });

  $(".header-fixed__hamburger").click(function() {
    $(this).toggleClass("active");
    $('body').toggleClass("mobile");
  });  

  /* Закрытие крестика */
  $(".nav-mobile-close").click(function() {
    $('body').toggleClass("mobile");
  });

  $(".nav__item").click(function(e) {
    e.preventDefault();
    $(this).children('.nav-sec-level1').slideToggle();
  });


});


/* Fixed HEADER */

$(window).scroll(function(){
  let sticky = $('.header-fixed'),
      scroll = $(window).scrollTop();
  if (scroll >= 200) {
    sticky.addClass('fixed');
  } else {
    sticky.removeClass('fixed');
  }
});



$(".main_catalog .select").on("click", function (e) {
  if ($(e.target).is(".select__item")) {
    e.preventDefault();
    return;
  }
  $(this).find(".select__list").toggle();
});

$(".main_catalog .select__item").on("click", function () {
  var $selectList = $(this).parents(".select__list");
  var $selectSelected = $selectList.siblings(".select__selected");
  var $selectKey = $selectSelected.attr("data-filter-name");
});

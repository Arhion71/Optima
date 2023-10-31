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
      delay: 4000,
      disableOnInteraction: false,
    },
  });

  // Слайдер в карточке
  var swiperCardThumbs = new Swiper(".card-slider__thumb", {
    slidesPerView: 4,
    spaceBetween: 9,
    mousewheel: false,
    keyboard: false,
    navigation: {
      nextEl: ".swiper-button-next-thumb",
      prevEl: ".swiper-button-prev-thumb",
    },
  });
  var swiperCard = new Swiper(".card-slider__big", {
    slidesPerView: 1,
    draggable: true,
    loop: true,
    effect: "fade",
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiperCardThumbs,
    },
  });


  // Tabs
  $(".tabs__caption").on("click", ".tabs__btn:not(.active)", function (e) {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".tabs")
        .find(".tabs__content")
        .hide()
        .removeClass("active")
        .eq($(this).index())
        .fadeIn(50)
        .addClass("active");
  });

  $(".tabs__inner-caption").on("click", ".tabs__inner-btn:not(.active)", function (e) {
    $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest(".tabs__inner")
        .find(".tabs__inner-content")
        .hide()
        .removeClass("active")
        .eq($(this).index())
        .fadeIn(50)
        .addClass("active");
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
      },
    },
  });

  /* Меню */

  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("mobile");
  });

  $(".header-fixed__hamburger").click(function () {
    $(this).toggleClass("active");
    $("body").toggleClass("mobile");
  });

  /* Закрытие крестика */
  $(".nav-mobile-close").click(function () {
    $("body").toggleClass("mobile");
  });

  /*$(".nav__item").click(function (e) {
    e.preventDefault();
    $(this).children(".nav-sec-level1").slideToggle();
  });*/
});
$(".mobile .nav__item_sec::after").click(function () {
  $(".nav__item_sec.active").not(this).removeClass("active");
  $(this).toggleClass("active");
});
$(document).mouseup(function (e) {
  let questionsBlock = $(".mobile .nav__item_sec::after");
  if (questionsBlock.has(e.target).length === 0) {
    $(".nav__item_sec.active").removeClass("active");
  }
});

/* Fixed HEADER */

$(window).scroll(function () {
  let sticky = $(".header-fixed"),
    scroll = $(window).scrollTop();
  if (scroll >= 200) {
    sticky.addClass("fixed");
  } else {
    sticky.removeClass("fixed");
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

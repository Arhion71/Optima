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
  });
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

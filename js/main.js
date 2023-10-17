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
  const swiperUnderSlide = new Swiper(".under_slider__slide", {
    slidesPerView: 2,
    draggable: true,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});

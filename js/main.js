$(document).ready(function () {
  // Основной слайдер в карточке товара
  const swiperProductThumbs = new Swiper(".product-thumbs__swiper", {
    slidesPerView: "auto",
    spaceBetween: 9,
  });

  const swiperProduct = new Swiper(".product-slider__swiper", {
    slidesPerView: 1,
    draggable: true,
    thumbs: {
      swiper: swiperProductThumbs,
    },
  });
});

const swiperCarousel = document.querySelector('.swiper')
console.log(swiperCarousel)
const swiper = new Swiper(swiperCarousel, {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 10,
  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true
  // },
  pagination: {
    el: '.swiper-pagination'
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})

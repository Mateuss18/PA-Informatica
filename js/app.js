window.addEventListener('scroll', showBackToTopButtonOnScroll)

const backToTopButton = document.querySelector('.back-to-top')
console.log(backToTopButton)
function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
    backToTopButton.classList.remove('hidden')
  } else {
    backToTopButton.classList.remove('show')
    backToTopButton.classList.add('hidden')
  }
}

const swiperCarousel = document.querySelector('.swiper')
const swiper = new Swiper(swiperCarousel, {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true
  },
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
    1024: {
      slidesPerView: 2
    },
    // when window width is >= 640px
    1025: {
      slidesPerView: 3,
      spaceBetween: 35
    }
  }
})

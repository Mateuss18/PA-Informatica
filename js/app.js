window.addEventListener('scroll', showBackToTopButtonOnScroll)

const backToTopButton = document.querySelector('.back-to-top')
const swiperCarousel = document.querySelector('.swiper')
const menuElement = document.querySelector('.menu')
const menuButton = document.querySelector('.btn-reset')

const closeAndOpenMenu = () => {
  menuElement.classList.toggle('active')
  menuButton.classList.toggle('close-btn')
}

const closeMenu = () => {
  menuElement.classList.remove('active')
  menuButton.classList.remove('close-btn')
}

menuButton.addEventListener('click', closeAndOpenMenu)
backToTopButton.addEventListener('click', closeMenu)

document
  .querySelectorAll('#navbar .menu li')
  .forEach((el) => el.addEventListener('click', closeMenu))

function showBackToTopButtonOnScroll() {
  if (scrollY > 400) {
    backToTopButton.classList.add('show')
    backToTopButton.classList.remove('hidden')
  } else {
    backToTopButton.classList.remove('show')
    backToTopButton.classList.add('hidden')
  }
}

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
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    750: {
      slidesPerView: 2
    },
    1110: {
      slidesPerView: 3,
      spaceBetween: 35
    }
  }
})

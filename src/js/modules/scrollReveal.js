import ScrollReveal from 'scrollreveal'

// Базовые настройки
ScrollReveal({
  distance: '150%',
  duration: 2000,
  delay: 100
})

ScrollReveal().reveal(`.hints` , {
  origin: 'top',
})

ScrollReveal().reveal(`.about__undertext, .equipment__title` , {
  origin: 'left',
})

ScrollReveal().reveal(`.about__subtext, .images,  .category__sl` , {
  origin: 'right',
})

ScrollReveal().reveal(`.equipment__subtitle, .equipment__table, .category__text` , {
  origin: 'bottom',
})

export default ScrollReveal
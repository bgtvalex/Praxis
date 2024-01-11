document.addEventListener("click", () => {
	const screenWidth = window.screen.width
	if (screenWidth < 767)
	document.querySelector('body').requestFullscreen()
});


import mobileNav from './modules/mobile-nav.js'
mobileNav()

import loaderFunc from './modules/loader.js'
loaderFunc()

import observerFunc from './modules/observer.js'
observerFunc()

import slidersFunc from './modules/swiper-slides.js'
slidersFunc()

// import scrollRevealFunc from './modules/scrollReveal.js'
// scrollRevealFunc()

// equipment images
import imagesFunc from './modules/images.js'
imagesFunc()

// header top fixed
import headerShow from './modules/headerShow.js'
headerShow()

// modal windows
import modalFunc from './modules/modal.js'
modalFunc()

// form input files
import inputFile from './modules/inputFile.js'
inputFile()

// form input tel mask
import inputMask from './modules/formMask.js'
inputMask()

// form submit
import formFunc from './modules/form.js'
formFunc()


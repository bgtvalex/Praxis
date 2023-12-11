function headerShow () {

	window.onscroll = function (e) {
		if ( window.scrollY > 80) {
			document.querySelector('.header__top').classList.add('fixed')
		} else {
			document.querySelector('.header__top').classList.remove('fixed')
		}
	}
}

export default headerShow
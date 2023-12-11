function headerItem () {

	const items = document.querySelectorAll('.header__top .header__item a')
	const mobItems = document.querySelectorAll('.mobile__link')

	const numberObserver = new IntersectionObserver( (entries, observer) => {
		entries.forEach(entry => {
				if (entry.isIntersecting) {
					let num = parseInt(entry.target.getAttribute('data-sector'))

					addActive(items)
					addActive(mobItems)

					function addActive (arr) {
						for (let i = 0; i < arr.length; i++) {
							if (i === num) {
								arr[i].classList.add('active')
							} else {
								arr[i].classList.remove('active')
							}
						}
					}
				}
		})
	})

	document.querySelectorAll('.sector').forEach( (sector) => numberObserver.observe(sector))
}

export default headerItem
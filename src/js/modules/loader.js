function loader() {
	const loader = document.querySelector('#loader')

	window.addEventListener('load', () => {

		document.body.classList.add('no-scroll');
		setTimeout(() => {
			loader.classList.add('loader-wrapper--hidden')
			document.body.classList.remove('no-scroll');
		}, 1500)
	})
}

export default loader
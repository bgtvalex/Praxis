function modalFunc() {

	const modal = document.querySelector('.modal')
	const modalWindow = document.querySelector('.modal__window')
	const btns = document.querySelectorAll('.btn')
	const close = document.querySelector('.modal__close')
	const sucModal = document.querySelector('.modal-s')
	const sucClose = document.querySelector('.modal-s__close')

	for (let btn of btns) {
		btn.addEventListener('click', () => {
			modal.classList.add('active')
			document.body.classList.add('no-scroll');
		})
	}

	close.addEventListener('click', () => {
		modal.classList.remove('active')
		document.body.classList.remove('no-scroll');
	})

	sucClose.addEventListener('click', () => {
		sucModal.classList.remove('active')
		document.body.classList.remove('no-scroll');
	})

	modalWindow.addEventListener('click', (e) => {
		e.stopPropagation()
	})

	modal.addEventListener('click', e => {
		modal.classList.remove('active')
		document.body.classList.remove('no-scroll');
	})
}

export default modalFunc
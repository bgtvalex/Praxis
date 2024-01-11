function formFunc() {

	/*
	  === FORMS ===
	*/
  const form = document.getElementById('form')
	const phoneInp = document.getElementById('phone')
	const alarmMes = document.querySelector('.modal__alarm')
	const modal = document.querySelector('.modal')
	const modalSuccess = document.querySelector('.modal-s')
	const btn = document.getElementById('btn')

  form.addEventListener('submit', formSubmit)

  function formSubmit(e) {
    e.preventDefault()
		console.log('phone', phoneInp.value)
		if (phoneInp.value.length < 16) {
			phoneInp.classList.add('alarm')
			phoneInp.focus()
			alarmMes.classList.add('active')

		} else {
			phoneInp.classList.remove('alarm')
			alarmMes.classList.remove('active')
			showSuccess(form)
		}
  }

	function showSuccess() {
		modal.classList.remove('active')
		modalSuccess.classList.add('active')
	}

}

export default formFunc

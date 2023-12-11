function images () {
	var imgs = document.querySelectorAll('.images__img-img')

	for (let img of imgs) {
		img.addEventListener('click', () => {
			let num = +img.dataset.img
			if (num < 6) {
				document.querySelector('.images__img-put--01').src = `./../../img/equipments/equipment--01/0${num}.jpg`
			} else {
				document.querySelector('.images__img-put--02').src = `./../../img/equipments/equipment--02/${num}.jpg`
			}
		})
	}
}

export default images
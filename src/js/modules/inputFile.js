function inputFile() {
	const dropPut = document.querySelector('.modal__window')
  const dropZone = document.querySelector('.modal__input-desc')
  const inputFile = document.querySelector(
    '.modal__label-file .modal__input-file'
  )
  const modalLoads = document.querySelector('.modal__loads')

  const types = [
    'image/svg+xml',
    'image/png',
    'image/webp',
    'image/jpeg',
    'image/jpg',
  ]
  var imgLoads = []

  // при клике на элемент
  inputFile.addEventListener('change', (e) => {
    addFiles(inputFile.files)
  })

  dropPut.addEventListener('dragenter', (e) => {
    console.log('dragenter', )
    e.preventDefault()
    dropPut.classList.add('active')
  })
  dropPut.addEventListener('dragleave', (e) => {
    console.log('%cdragleave', 'color: red')
    e.preventDefault()
    dropPut.classList.remove('active')
  })
  dropPut.addEventListener('dragover', (e) => {
    console.log('%cdragover', 'color: lightgreen')
    e.preventDefault()
  })
  dropPut.addEventListener('drop', (e) => {
    console.log('drop')
    e.preventDefault()
    addFiles(e.dataTransfer.files)
    dropPut.classList.remove('active')
  })

  const addFiles = (files) => {
    modalLoads.replaceChildren()
		imgLoads = []
    let count = 0

    for (let key in files) {
			if (!types.includes(files[key].type)) continue // imgs only
      imgLoads.push(files[key])

      let imgSrc = URL.createObjectURL(files[key])
      if (!imgSrc) imgSrc = './../../img/icon/file.webp'

      let name = files[key].name.slice(0, 4) + '...'
      let el = createImageElement(name, imgSrc, count)
      count++

      modalLoads.appendChild(el)
    }
  }

  function createImageElement(title, url, id) {
    let modalCard = document.createElement('div')
    modalCard.classList.add('modal__card')
    modalCard.setAttribute('id', id)

    let modalCardClose = document.createElement('div')
    modalCardClose.classList.add('modal__card-close')
    modalCardClose.innerText = 'x'

    let modalCardImg = document.createElement('img')
    modalCardImg.classList.add('modal__card-img')
    modalCardImg.setAttribute('src', url)

    let modalCardTitle = document.createElement('div')
    modalCardTitle.classList.add('modal__card-title')
    modalCardTitle.innerText = title

    modalCard.appendChild(modalCardClose)
    modalCard.appendChild(modalCardImg)
    modalCard.appendChild(modalCardTitle)

    modalCardClose.addEventListener('click', () => {
      let id = modalCardClose.parentNode.id
      imgLoads.splice(id, 1)
      addFiles(imgLoads)
    })

    return modalCard
  }
}

export default inputFile

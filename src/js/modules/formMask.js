import IMask from 'imask'

function maskForm() {
  const element = document.getElementById('phone')
  // const alarm = document.querySelector('.modal__alarm')

  // element.addEventListener('focus', () => {
  //   element.addEventListener('blur', () => {
  //     element.classList.add('alarm')
  //     alarm.style.display = 'block'
  //   })
  // })

  const maskOptions = {
    mask: '+{7}(000)000-00-00',
  }
  const mask = IMask(element, maskOptions)
}

export default maskForm

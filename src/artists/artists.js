window.addEventListener('load', function () {
  let activeSlide = -1

  function setActiveSlide (n) {
    if (activeSlide === n) {
      return
    }

    if (activeSlide > -1) {
      document.getElementById(`artist-${activeSlide}`).classList.remove('active')
      document.getElementById(`artist-icon-${activeSlide}`).classList.remove('active')
    }
    activeSlide = n
    if (activeSlide > -1) {
      document.getElementById(`artist-${activeSlide}`).classList.add('active')
      document.getElementById(`artist-icon-${activeSlide}`).classList.add('active')
    }
  }

  const icons = document.getElementById('artists').getElementsByClassName('artist-icon')

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i]
    icon.addEventListener('click', function () {
      setActiveSlide(icon.dataset.artistIndex)
    })
  }

  setActiveSlide(0)
})

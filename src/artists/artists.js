window.addEventListener('load', function () {
  let activeSlide = 0

  function setActiveSlide (n) {
    document.getElementById(`artist-${activeSlide}`).classList.remove('active')
    activeSlide = n
    document.getElementById(`artist-${activeSlide}`).classList.add('active')
  }

  const leftButton = document.getElementById('artist-track-left')
  const rightButton = document.getElementById('artist-track-right')

  const items = document.getElementById('artists').getElementsByClassName('artist').length

  leftButton.addEventListener('click', function () {
    setActiveSlide((activeSlide + items - 1) % items)
  })
  rightButton.addEventListener('click', function () {
    setActiveSlide((activeSlide + 1) % items)
  })

  setActiveSlide(activeSlide)
})

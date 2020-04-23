window.addEventListener('load', function () {
  let activeSlide = 0

  function setActiveSlide (n) {
    document.getElementById(`artist-${activeSlide}`).classList.remove('active')
    activeSlide = n
    document.getElementById(`artist-${activeSlide}`).classList.add('active')
  }

  const icons = document.getElementById('artists').getElementsByClassName('artist-icon')

  console.log(icons)

  for (let i = 0; i < icons.length; i++) {
    const icon = icons[i]
    icon.addEventListener('click', function () {
      setActiveSlide(icon.dataset.artistIndex)
    })
  }

  setActiveSlide(activeSlide)
})

let scrollId = 0

const smoothScrollTo = window.smoothScrollTo = (elId) => {
  function increment (y, handlerId) {
    if (scrollId !== handlerId) {
      return
    }

    if (Math.abs(window.scrollY - y) < 1) {
      window.scrollTo(0, y)
      return
    }

    const scrollBy = (y - window.scrollY) / 15
    if (scrollBy < 0) {
      window.scrollBy(0, Math.min(-1, scrollBy))
    } else {
      window.scrollBy(0, Math.max(1, scrollBy))
    }

    setTimeout(() => increment(y, handlerId), 10)
  }

  scrollId++
  const el = document.getElementById(elId)
  if (el) {
    const y = Math.min(el.getBoundingClientRect().y + window.scrollY, document.body.scrollHeight - window.innerHeight)

    console.log(y, window.scrollY)

    increment(y, scrollId)
  }
}

window.addEventListener('load', function () {
  window.addEventListener('wheel', function () {
    scrollId++
  })

  const navigationElements = document.querySelectorAll('[data-navigate-to]')
  for (let i = 0; i < navigationElements.length; i++) {
    const el = navigationElements[i]
    el.addEventListener('click', () => smoothScrollTo(el.dataset.navigateTo))
  }
})

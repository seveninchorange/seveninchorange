let id = 0

function increment (y, handlerId) {
  if (id !== handlerId) {
    return
  }

  if (Math.abs(window.scrollY - y) < 1) {
    window.scrollTo(0, y)
    return
  }

  window.scrollBy(0, Math.max(1, (y - window.scrollY) / 15))

  setTimeout(() => increment(y, handlerId), 10)
}

window.smoothScrollTo = function smoothScrollTo (elId) {
  const el = document.getElementById(elId)
  if (el) {
    const y = el.getBoundingClientRect().y + window.scrollY

    increment(y, id)
  }
}

window.addEventListener('wheel', function () {
  id++
})

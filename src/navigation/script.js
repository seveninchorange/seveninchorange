const makeId = (str) => str.toLowerCase().replace(/\s/g, '-')

window.addEventListener('load', function () {
  const navEl = document.getElementsByTagName('nav')[0]
  let currentNav = null

  function setCurrentNav (id) {
    if (currentNav) {
      document.getElementById(currentNav).classList.remove('active')
    }
    currentNav = id
    if (currentNav) {
      document.getElementById(currentNav).classList.add('active')
    }
  }

  function navigateTo (headerId, liId) {
    window.smoothScrollTo(headerId)
    setCurrentNav(liId)
  }

  const headers = document.getElementsByTagName('h2')
  const navList = navEl.getElementsByTagName('ul')[0]

  function onScroll () {
    if (window.scrollY > window.innerHeight * 0.8) {
      navEl.classList.add('active')
    } else {
      navEl.classList.remove('active')
    }

    let currentEl = null
    for (let i = 0; i < headers.length; i++) {
      const headerEl = headers[i]
      const y = headers[i].getBoundingClientRect().y

      if (y < window.innerHeight * 0.6) {
        currentEl = headerEl
      }
    }

    setCurrentNav(currentEl ? currentEl.dataset.navId : null)
  }

  for (let i = 0; i < headers.length; i++) {
    const headerEl = headers[i]
    const headerText = headerEl.innerText
    const headerId = makeId(headerText)
    const liId = `nav-${headerId}`

    const li = document.createElement('li')
    li.appendChild(document.createTextNode(headerText))
    li.setAttribute('id', liId)
    li.addEventListener('click', () => navigateTo(headerId, liId))
    navList.appendChild(li)

    headerEl.setAttribute('id', headerId)
    headerEl.setAttribute('data-nav-id', liId)
  }

  window.addEventListener('scroll', onScroll)

  onScroll()
})

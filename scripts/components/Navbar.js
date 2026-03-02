import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'

export function navbar() {
  const navlinks = ['forside', 'shop', 'forhandlere', 'inspiration', 'om kryb', 'kontakt']
  const root = get('#root')

  const nav = create('nav')
  nav.classList = 'flex flex-row gap-4 center'

  navlinks.forEach((link) => {
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.classList = 'text-blue-200'
    set(linkEl, nav)
  })
  set(nav, root)
}

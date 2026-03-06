import { create } from '../utils/create.js'
import { get } from '../utils/get.js'
import { set } from '../utils/set.js'
import { createImage } from '../elements/createImage.js'
import { createInput } from '../elements/createInput.js'

export function createNavbar(links, targetLocation) {
  const nav = create('nav')
  nav.classList = 'flex flex-col gap-4 bg-customWhite w-full'

  const navTop = create('div')
  navTop.classList = 'grid grid-rows-[1fr,3fr] gap-8 h-16 w-full'

  const logo = createImage('../../assets/images/logo.png', 'KRYB logo')
  logo.classList = 'w-75'

  const search = createInput('text', 'Enter search...')
  search.classList = 'w-50 h-8 p-4 m-2 bg-white'

  set([search, logo], navTop)

  const linkList = create('ul')
  linkList.classList = 'flex flex-row m-2 gap-8'

  links.forEach((link) => {
    const listEl = create('li')
    const linkEl = create('a')
    linkEl.href = `#${link}`
    linkEl.innerText = link.toUpperCase()
    linkEl.classList = 'text-black text-lg'
    set(linkEl, listEl)
    set(listEl, linkList)
  })

  set([navTop, linkList], nav)
  set(nav, targetLocation)
}

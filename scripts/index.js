import { createHero } from './components/Hero.js'
import { createNavbar } from './components/Navbar.js'
import { get } from './utils/get.js'

function initApp() {
  // Set up root element
  const root = get('#root')
  root.classList = 'min-h-full m-auto flex flex-col'

  // set up navbar
  const navlinks = ['forside', 'shop', 'forhandlere', 'inspiration', 'om kryb', 'kontakt']
  createNavbar(navlinks, root)
  createHero(root)
}

initApp()

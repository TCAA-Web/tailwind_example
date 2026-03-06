import { createImage } from '../elements/createImage.js'
import { create } from '../utils/create.js'
import { set } from '../utils/set.js'

export function createHero(targetElement) {
  const heroImage = createImage('../../assets/images/hero.jpg', 'hero image')
  const heroText = create('h1')
  heroText.innerText = 'KRYB'
  set(heroImage, targetElement)
}

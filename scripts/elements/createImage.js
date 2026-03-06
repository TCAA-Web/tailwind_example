import { create } from '../utils/create.js'

export function createImage(url, alt) {
  const _img = create('img')
  _img.src = url
  _img.alt = alt
  return _img
}

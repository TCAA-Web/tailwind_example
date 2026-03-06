import { create } from '../utils/create.js'

export function createInput(type, placeholder, callback) {
  const _input = create('input')
  _input.placeholder = placeholder
  _input.setAttribute('type', type)
  _input.addEventListener('change', callback ? callback : null)
  return _input
}

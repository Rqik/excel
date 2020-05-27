import { capitalize } from './utils'

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('no root provided for DOMlistenter')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMehodName(listener)
      if (!this[method]) {
        throw Error(`Method ${method} is not emp* in ${this.name} Component`)
      }
      this[method] = this[method].bind(this)
      this.$root.on(listener, this[method])
    })
  }

  removeDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMehodName(listener)
      this.$root.off(listener, this[method])
    })
    console.log(this.listeners)
  }
}

function getMehodName(eventName) {
  return 'on' + capitalize(eventName)
}
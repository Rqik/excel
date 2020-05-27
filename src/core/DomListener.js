export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('no root provided for DOMlistenter')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    console.log(this.listeners)
  }

  removeDomListeners() {
  }
}
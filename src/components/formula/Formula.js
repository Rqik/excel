import { ExcelComponent } from '../../core/ExcelComponent';
import { $ } from '../../core/dom';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root, options) {
    super($root, {
      name: 'Formuala',
      listeners: ['input', 'click', 'keydown'],
      ...options
    })
  }
  toHTML() {
    return ` <div class="info">fx</div>
    <div class="input" contenteditable=""></div>`
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text())
  }
  onClick() {

  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      event.preventDefault()
      this.$emit('formula:done')
    }
  }
}
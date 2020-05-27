import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formuala',
      listeners: ['input', 'click']
    })
  }
  toHTML() {
    return ` <div class="info">fx</div>
    <div class="input" contenteditable=""></div>`
  }

  onInput(event) {
    console.log('Formula on input', event.data)
  }
  onClick() {

  }
}
import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './tableTamplete';
import { resierHandler } from './table.resize';
import {
  shouldResize,
  cellTable,
  matrix,
  nextSelector
} from './table.fucntion';
import { TableSelection } from './TableSelection';
import { $ } from '../../core/dom'
export class Table extends ExcelComponent {
  static className = 'excel__tabel'
  constructor($root, options) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown', 'keydown'], // , 'mousemove'
      ...options
    })
  }
  toHTML() {
    return createTable()
  }

  prepare() {
    this.selection = new TableSelection()
  }

  init() {
    super.init()
    const $cell = this.$root.find('[data-id="0:0"]')
    this.selection.select($cell)
    this.$on('formula:input', text => {
      this.selection.current.text(text)
    })
    this.$on('formula:done', () => {
      this.selection.current.focus()
    })
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resierHandler(this.$root, event)
    } else if (cellTable(event)) {
      const $target = $(event.target)
      if (event.shiftKey) {
        const $cells = matrix($target, this.selection.current)
            .map(id => this.$root.find(`[data-id="${id}"]`))
        this.selection.selectGroup($cells)
      } else this.selection.select($target)
    }
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowUp',
      'ArrowDown']
    const { key } = event
    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault()

      const id = this.selection.current.id(true)
      const $next = this.$root.find(nextSelector(key, id))
      this.selection.select($next)
    }
  }
}



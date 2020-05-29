import { ExcelComponent } from '../../core/ExcelComponent';
import { createTable } from './tableTamplete';
import { $ } from '@core/dom'

export class Table extends ExcelComponent {
  static className = 'excel__tabel'
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown'] // , 'mousemove'
    })
  }
  toHTML() {
    return createTable()
  }

  onMousedown(event) {
    if (event.target.dataset.resize) {
      const $resizer = $(event.target)
      const $parent = $resizer.closest('[data-type="resizable"]')
      const cords = $parent.getCords()
      const type = $resizer.data.resize
      const dynamicRob = type === 'col' ? 'bottom' : 'right'
      let value

      $resizer.css({
        opacity: 1,
        [dynamicRob]: '-5000px'
      })

      if (type === 'col') {
        // cells =
        document.onmousemove = e => {
          const delta = e.clientX - cords.right
          value = cords.width + delta
          $resizer.css({ right: -delta + 'px' })
        }
      } else {
        document.onmousemove = e => {
          const delta = e.clientY - cords.bottom
          value = cords.height + delta
          $resizer.css({ bottom: -delta + 'px' })
        }
      }
      document.onmouseup = (e) => {
        document.onmousemove = null
        document.onmouseup = null

        if (type === 'col') {
          $parent.css({ width: value + 'px' })
          this.$root.findAll(`[data-index="${$parent.data.index}"]`)
              .forEach(el => {
                el.style.width = value + 'px'
              })
        } else {
          $parent.css({ height: value + 'px' })
        }

        $resizer.css({
          opacity: 0,
          bottom: 0,
          right: 0
        })
      }
    }
  }
}


// 118 msScripting
// 1317 msRendering
// 232 msPainting
// 217 msSystem
// 2276 msIdle
// 4161 msTotal
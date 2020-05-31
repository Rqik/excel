import { $ } from '../../core/dom'

export function resierHandler($root, event) {
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
      $root.findAll(`[data-index="${$parent.data.index}"]`)
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
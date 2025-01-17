import { rolls } from '../../core/utils'

export function shouldResize(event) {
  return event.target.dataset.resize
}
export function cellTable(event) {
  return event.target.dataset.id
}

export function matrix($target, $current) {
  const target = $target.id(true)
  const current = $current.id(true)
  const cols = rolls(target.col, current.col)
  const rows = rolls(target.row, current.row)

  const ids = cols.reduce((acc, col) => {
    rows.forEach(row => acc.push(row + ':' + col))
    return acc
  }, [])
  return ids
}

export function nextSelector(key, { col, row }) {
  const MIN_VALUE = 0

  switch (key) {
    case 'Enter':
    case 'ArrowDown':
      row++
      break
    case 'Tab':
    case 'ArrowRight':
      col++
      break
    case 'ArrowLeft':
      col = col - 1 < MIN_VALUE ? MIN_VALUE : col - 1
      break
    case 'ArrowUp':
      row = row - 1 < MIN_VALUE ? MIN_VALUE : row - 1
      break
  }

  return `[data-id="${row}:${col}"]`
}
const CODES = {
  A: 65,
  Z: 90
}

function toCell(_, index) {
  return `<div class="cell" contenteditable="" data-index="${index}"></div>`
}

function toColumn(elem, index) {
  return `
  <div class="column" data-type="resizable" data-index="${index}">
    ${elem}
    <div class="col-resize" data-resize="col"></div>
  </div>`
}

function createRow(index, cols) {
  const resize = index ? '<div class="row-resize" data-resize="row"></div>' : ''
  return `
  <div class="row" data-type="resizable">
    <div class="row_info">
    ${index ? index : ''}
    ${resize}
    </div>
    <div class="row_data">${cols}</div>
  </div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 20) {
  const colsCount = CODES.Z - CODES.A
  const rows = []
  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  const cell = new Array(colsCount)
      .fill('')
      .map(toCell)
      .join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow(i + 1, cell))
  }
  return rows.join('')
}
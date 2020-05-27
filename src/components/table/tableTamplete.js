const CODES = {
  A: 65,
  Z: 90
}

function toCell() {
  return `<div class="cell" contenteditable=""></div>`
}

function toColumn(elem) {
  return `<div class="column">
    ${elem}
  </div>`
}

function createRow(index, content) {
  return `
  <div class="row">
    <div class="row_info">${index}</div>
    <div class="row_data">${content}</div>
  </div>`
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 20, ) {
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

  console.log(cell)
  rows.push(createRow('', cols))
  for (let i = 0; i < rowCount; i++) {
    rows.push(createRow(i+1, cell))
  }
  return rows.join('')
}
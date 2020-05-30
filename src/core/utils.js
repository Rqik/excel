// Pure functions не взаимодействуют с глобальными переменымиб
// реагиру.т отлько на входяхие параметры

export function capitalize(string) {
  if (typeof string != 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function rolls(start, end) {
  if (start > end) {
    [end, start] = [start, end]
  }
  return new Array((end - start) + 1)
      .fill('')
      .map((_, indx) => start + indx)
  // const arr = []
  // for (let i = start; i < end + 1; i++) {
  //   arr.push(i)
  // }
  // return arr
}
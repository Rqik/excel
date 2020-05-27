// Pure functions не взаимодействуют с глобальными переменымиб
// реагиру.т отлько на входяхие параметры

export function capitalize(string) {
  if (typeof string != 'string') {
    return ''
  }
  return string.charAt(0).toUpperCase() + string.slice(1)
}
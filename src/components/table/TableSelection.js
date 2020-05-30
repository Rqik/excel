export class TableSelection {
  static tableSelect = 'selected'
  constructor() {
    this.group = []
    this.current = null
  }

  // $el instanceof DOM === true
  select($el) {
    this.clear()
    this.current = $el
    this.group.push($el)
    $el.focus().addClass(TableSelection.tableSelect)
  }

  clear() {
    this.group.forEach(el => el.removeClass(TableSelection.tableSelect))
    this.group = []
  }

  selectGroup($el) {
    this.clear()
    this.group = $el
    this.group.forEach(el => el.addClass(TableSelection.tableSelect))
    // const arr = this.group.map(el => el.data.id.split(':'))
    // .sort((a, b) => a[0] - b[0])
    // const findArr = []
    // for (let i = arr[0][0]; i < arr[1][0]; i++) {
    //   findArr.push(i + ':' + arr[1][0])
    // }
    // findArr.forEach(el => this.$root.find(`[data-id="${el}"]`)
    // console.log(findArr)
    // $el.addClass(TableSelection.tableSelect)
    // console.log(this.group)
  }
}

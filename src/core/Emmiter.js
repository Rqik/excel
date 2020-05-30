export class Emitter {
  constructor() {
    this.listeners = {}
  }
  // dispatch, fire , trigger
  // уведомляем слуаштелей если они етсь
  // table.emit(table:select , ()=>{})
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false
    }
    this.listeners[event].forEach(listener => {
      listener(...args)
    });
  }
  // on, listen
  // подписываемя на уведломлени е
  // Добавляем нового слушателя
  // formula.subscribe(table:select , ()=>{})

  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || []
    this.listeners[event].push(fn)
    return () => {
      this.listeners[event] =
        this.listeners[event]
            .filter(listener => listener != fn)
    }
  }
}


// Example
// const emitter = new Emitter()
//
// const unsub = emitter.subscribe('vladilen', data => console.log(data))
// emitter.emit('1231231', 42)
//
// setTimeout(() => {
//   emitter.emit('vladilen', 'After 2 seconds')
// }, 2000)
//
// setTimeout(() => {
//   unsub()
// }, 3000)
//
// setTimeout(() => {
//   emitter.emit('vladilen', 'After 4 seconds')
// }, 4000)
class Dispatcher {
  constructor() {
    this.stores = [];
  }

  subscribe(fn) {
    this.stores.push(fn)
  }

  unsubscribe(fn) {
    this.stores = this.stores.filter(subscriber => subscriber !== fn)
  }

  dispatch(data) {
    this.stores.forEach(subscriber => subscriber(data))
  }
}

export default new Dispatcher();

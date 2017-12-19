import dispatcher from '../dispatcher';
import actions from '../action_creators/actions';

class Store {
  constructor() {
    this.name = [];
    this.views = [];
    this.reduce = this.reduce.bind(this);
    dispatcher.subscribe(this.reduce);
  }

  subscribe(fn) {
    this.views.push(fn);
  }

  unsubscribe(fn) {
    this.views = this.views.filter(subscriber => subscriber !== fn);
  }

  trigger() {
    this.views.forEach(subscriber => subscriber());
  }

  reduce(action) {
    switch (action.type) {
      case actions.ADD_NAME:
        this.name.push(action.payload);
        this.trigger();
        break;
      default:
  			return this.name;
    }
  }
}

export default new Store();

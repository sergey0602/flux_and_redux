import React, { Component } from 'react';
import store from './store';
import ac from './action_creators';
import UserList from './component/UserList';

class App extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.changeState = this.changeState.bind(this);
    this.state = {
      value: ''
    }
  }

  changeState(event) {
    this.setState({value: event.target.value});
  }

  update() {
    this.setState({});
  }

  componentDidMount() {
    store.subscribe(this.update);
  }

  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='Enter name'
          value={this.state.value}
          onChange={this.changeState}/>
        <button onClick={() => ac.addName(this.state.value)}>Add Name</button>
        {store.name.length ? <UserList names={store.name} /> : null}
      </div>
    );
  }
};

export default App;

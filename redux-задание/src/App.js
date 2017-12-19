import React, { Component } from 'react';
import UserList from './component/UserList';
import { addName } from './action_creators';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends Component {

  handlerClick() {
    this.props.addName(this.refs.input.value);
  }

  render() {
    return (
        <div>
          <input
            type='text'
            placeholder='Enter name'
            ref='input' />
          <button onClick={this.handlerClick.bind(this)}>Add Name</button>
          {this.props.names.length ? <UserList names={this.props.names} /> : null}
        </div>
    );
  }
};

App.defaultProps = {
  names: []
}

App.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
  addName: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    names: state.names
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addName: data => dispatch(addName(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

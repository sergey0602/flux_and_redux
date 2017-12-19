import React from 'react';
import PropTypes from 'prop-types';

const UserList = props =>
  <ul>
    {props.names.map((name, i) => <li key={i}>{name}</li>)}
  </ul>

UserList.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string)
};

export default UserList;

import React from 'react';

const UserList = props =>
  <ul>
    {props.names.map((name, i) => <li key={i}>{name}</li>)}
  </ul>

export default UserList;

import React from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends React.Component {
  render(){
    return (
      <header>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/smurf-form">Add</NavLink>
      </header>
    )
  }
}

export default Nav;
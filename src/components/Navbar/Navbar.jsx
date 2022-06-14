import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav>
      <NavLink className="nav_a" to='/'>Home</NavLink>
      <NavLink className="nav_a" to='/contacts'>Contacts</NavLink>
      <NavLink className="nav_a" to='/about'>About</NavLink>
    </nav>
  );
}






export default Navbar;

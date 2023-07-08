import React from 'react';
import {Link, NavLink} from 'react-router-dom'

const activeLinkClass = ({isActive}) => {
  return isActive ? 'rounded-sm bg-slate-300 py-1 px-2 text-gray-700' : 'py-1 px-2 text-slate-700'
} 


const Navbar = () => {
  return (
    <nav>
      <ul>
      <li>
          <NavLink to="/" className={activeLinkClass}>Главное</NavLink>
        </li>
        <li>
          <NavLink to="/productSlice" className={activeLinkClass}>Товары</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

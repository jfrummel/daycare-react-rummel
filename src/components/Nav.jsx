import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/Nav.scss';

const Nav = () => (
    <nav>
        <NavLink exact to="/" activeClassName="activeLink">Home</NavLink>
        <NavLink to="/about" activeClassName="activeLink">About</NavLink>
        <NavLink to="/contact" activeClassName="activeLink">Contact</NavLink>
    </nav>
);

export default Nav;
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from '../../Assets/logo.svg';
import NavIcon from '../../Assets/icons/icon-hamburger.svg';

function Nav() {
    return (
        <div className="nav-container">
            <div className="nav">
            <NavLink exact activeClassName="active" to="/">
                <img className="nav-logo" src={Logo} />
                </NavLink>
                <img className="nav-mobile-icon" src={NavIcon} />
                <NavLink activeClassName="active" to="/portfolio">
                <p className="nav-link">Portfolio</p>
                </NavLink>
                <NavLink activeClassName="active" to="/about">
                <p className="nav-link">About Us</p>
                </NavLink>
                <NavLink activeClassName="active" to="/contact">
                <p className="nav-link">Contact</p>
                </NavLink>
            </div>
        </div>
    )
}

export default Nav

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
                <p className="nav-link">
                <NavLink activeClassName="active" to="/portfolio">
                    Portfolio
                </NavLink>
                    </p>
                <p className="nav-link">
                <NavLink activeClassName="active" to="/about">
                    About Us
                </NavLink>
                    </p>
                <p className="nav-link">
                <NavLink activeClassName="active" to="/contact">
                    Contact
                    </NavLink>
                    </p>
            </div>
        </div>
    ) 
}

export default Nav

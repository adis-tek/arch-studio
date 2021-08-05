import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './nav.scss';
import Logo from '../../Assets/logo.svg';
import NavIcon from '../../Assets/icons/icon-hamburger.svg';
import NavClose from '../../Assets/icons/icon-close.svg';

function Nav() {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileNav = () => {
        if (mobileMenu === false) {
            setMobileMenu(true);
        } else {
            setMobileMenu(false);
        }
    }
    return (
        <>
        <div className="nav-container">
            <div className="nav">
            <NavLink exact activeClassName="active" to="/">
                <img className="nav-logo" src={Logo} />
                </NavLink>
                {mobileMenu === false && (
                <img className="nav-mobile-icon" src={NavIcon} onClick={toggleMobileNav} />
                )}
                {mobileMenu === true && (
                <img className="nav-mobile-icon-close" src={NavClose} onClick={toggleMobileNav} />
                )}
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
        {mobileMenu === true && (
        <div className="mobile-menu-backdrop">
            <div className="mobile-menu-container">
                <div className="mobile-menu-border">
                <p className="mobile-nav-link" onClick={toggleMobileNav}>
                <NavLink activeClassName="active" to="/portfolio">
                    Portfolio
                </NavLink>
                </p>
                <p className="mobile-nav-link" onClick={toggleMobileNav}>
                <NavLink activeClassName="active" to="/about">
                    About
                </NavLink>
                </p>
                <p className="mobile-nav-link" onClick={toggleMobileNav}>
                <NavLink activeClassName="active" to="/contact">
                    Contact
                </NavLink>
                </p>
                </div>
            </div>
        </div>
        )}
        </>
    ) 
}

export default Nav;

import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './footer.scss';
import Logo from '../../Assets/footer-logo.svg';
import FooterArrow from '../../Assets/icons/icon-arrow.svg';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-inner-container">
            <div className="footer">
            <div className="white-block-mobile" />
                <div className="logo-block">
                    <NavLink exact activeClassName="active" to="/">
                    <img className="logo" src={Logo} />
                    </NavLink>
                </div>
                <div className="link-buttons-container">
                <div className="footer-links-container">
                <NavLink exact activeClassName="active" to="/portfolio">
                <p className="nav-link">Portfolio</p>
                </NavLink>
                <NavLink exact activeClassName="active" to="/about">
                <p className="nav-link">About Us</p>
                </NavLink>
                <NavLink exact activeClassName="active" to="/contact">
                <p className="nav-link">Contact</p>
                </NavLink>
                </div>
                <NavLink exact activeClassName="active" to="/portfolio">
            <button className="button-mobile">
                    <p className="button-text">See Our Portfolio</p>
                    <img className="button-arrow" src={FooterArrow} />
            </button>
            </NavLink>
                </div>
            </div>
            <NavLink exact activeClassName="active" to="/portfolio">
            <button className="button">
                    <p className="button-text">See Our Portfolio</p>
                    <img className="button-arrow" src={FooterArrow} />
            </button>
            </NavLink>
            </div>
        </div>
    )
} 
 
export default Footer

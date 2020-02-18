import React, { useState } from 'react';
import { Link } from 'gatsby';
import { IoIosMenu } from 'react-icons/io';
import '../scss/components/navbar.styles.scss';

const Navbar = () => {

    const [ openNav, setOpenNav ] = useState(false);
    const toggleNav = () => {
        setOpenNav(openNav => !openNav);
    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__inner__home">
                        <Link to="/">
                            <span>TheBlog</span>
                        </Link>
                        <button type="button" className="hb-menu" onClick={toggleNav}>
                            <IoIosMenu className="hb-menu__icon" />
                        </button>
                    </div>
                    <nav className={ openNav ? `nav-links show-nav` : `nav-links` }>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blog">Blog</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
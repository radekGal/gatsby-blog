import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import '../scss/components/layout.styles.scss';

const Layout = ({ children }) => {
    return(
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default Layout;

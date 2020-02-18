import React from 'react';
import Img from 'gatsby-image';
import '../scss/components/banner.styles.scss';

const Banner = ({ img }) => {
    return(
        <div className="banner">
            <div className="container">
                <Img fluid={img} alt="Some image" />
            </div>
        </div>
    );
}

export default Banner;
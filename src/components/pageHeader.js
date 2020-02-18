import React from 'react';
import '../scss/components/pageHeader.styles.scss';

const PageHeader = ({ title, subtitle, children }) => {
    return(
        <div className="page-header">
            <div className="container">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                {children}
            </div>
        </div>
    );
}

export default PageHeader;
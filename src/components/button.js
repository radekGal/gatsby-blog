import React from 'react';
import '../scss/components/button.styles.scss';

const Button = ({ children, ...otherProps }) => (
    <button 
        className="btn"
        {...otherProps}
    >
        {children}
    </button>
)

export default Button;
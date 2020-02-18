import React from 'react';
import socials from '../constants/socials-icons';
import '../scss/components/footer.styles.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="footer__socials">
                    <ul>
                        {socials.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.icon}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__credits">
                    <p>&copy; 2020 Logo. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
import React from 'react';
import Layout from '../components/layout';
import { Link } from 'gatsby';
import Button from '../components/button';
import '../scss/pages/error.styles.scss';

const Error = () => {
    return(
        <Layout>
            <section className="error">
                <div className="container">
                    <div className="error__inner">
                        <span>404</span>
                        <div className="error__inner__content">
                            <h2>Page not found</h2>
                            <p>Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                            <Button>
                                <Link to="/">Back to Home</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default Error;
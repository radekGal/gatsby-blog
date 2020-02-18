import React from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import { useStaticQuery, graphql } from 'gatsby';
import '../scss/pages/about.styles.scss';
import Banner from '../components/banner';

const aboutImage = graphql`
    {
        aboutBanner: file(relativePath: {eq: "aboutBg.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 600, quality: 80) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const About = () => {
    const response = useStaticQuery(aboutImage);
    const image = response.aboutBanner.childImageSharp.fluid;
    return(
        <Layout>
            <PageHeader title="About Me" subtitle="Nullam nisl arcu, consequat eget pharetra eget, aliquam eu massa. Ut tincidunt fringilla lacinia. Praesent et lacus a mi viverra cursus." />
            <Banner img={image} />
            <section className="about-more">
                <div className="container">
                    <h2>Hello, I'm John Doe.</h2>
                    <div className="about-more__content">
                        <p>Suspendisse elementum, massa quis tempor viverra, magna lectus iaculis lorem, at egestas enim neque tincidunt nulla. Donec interdum condimentum orci, sit amet convallis nisi elementum ac. Aliquam blandit est augue, sed dapibus justo blandit eget. Donec fermentum mi ac sollicitudin blandit. Pellentesque hendrerit dui quam, non sollicitudin nisl dictum ac.</p>
                        <p>Mauris tristique rutrum massa vel eleifend. Suspendisse elementum, massa quis tempor viverra, magna lectus iaculis lorem, at egestas enim neque tincidunt nulla. Donec interdum condimentum orci, sit amet convallis nisi elementum ac. Aliquam blandit est augue, sed dapibus justo blandit eget. Donec fermentum mi ac sollicitudin blandit. Pellentesque hendrerit dui quam non.</p>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default About;
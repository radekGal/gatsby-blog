import React from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import Banner from '../components/banner';
import Form from '../components/form';
import { useStaticQuery, graphql } from 'gatsby';

const contactImage = graphql`
    {
        contactBanner: file(relativePath: {eq: "contactBg.jpg"}) {
            childImageSharp {
                fluid(maxWidth: 1200, maxHeight: 600, quality: 80) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`

const Contact = () => {
    const response = useStaticQuery(contactImage);
    const image = response.contactBanner.childImageSharp.fluid;
    return(
        <Layout>
            <PageHeader title="Contact Me" subtitle="Duis volutpat leo vitae diam venenatis aliquam. Proin a eleifend mauris." />
            <Banner img={image} />
            <Form />
        </Layout>
    );
}

export default Contact;
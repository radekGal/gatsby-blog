import React from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import Post from '../components/post';
import '../scss/styles.scss';

import {  useStaticQuery, graphql } from 'gatsby';
const getPosts = graphql`
    query {
        featuredBlog: allMdx(
            filter: {frontmatter: {featured: {eq: true}}}, 
            sort: {fields: frontmatter___date, order: DESC}
        ){
          edges {
            node {
              id
              frontmatter {
                date(formatString: "DD MMM YYYY")
                author
                title
                slug
                image {
                  childImageSharp {
                    fluid(maxWidth: 1400, maxHeight: 800, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              excerpt
            }
          }
        }
    }
`

export default () => {
    const response = useStaticQuery(getPosts);
    const posts = response.featuredBlog.edges;
    return(
        <Layout>
            <PageHeader title="Latest blog posts" subtitle="Nullam tincidunt libero consectetur lacus pretium, vel efficitur justo porta." />
            <section className="featured-blog">
              {posts.map(({node}) => (
                <Post key={node.id} post={node} />
              ))}
            </section>
        </Layout>
    );
}

import React from 'react';
import Layout from '../components/layout';
import PageHeader from '../components/pageHeader';
import Img from 'gatsby-image';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { Link, graphql } from 'gatsby';
import '../scss/templates/blog-template.styles.scss';

export const query = graphql`
    query ($slug: String!) {
        mdx(fileAbsolutePath: {regex: "/posts/"}, frontmatter: {slug: {eq: $slug}}) {
            frontmatter {
                title
                author
                date(formatString: "DD MMM YYYY")
                image {
              	  childImageSharp{
                    fluid(maxWidth: 1200, maxHeight: 800, quality: 80){
                      ...GatsbyImageSharpFluid
                    }
                  }
              	} 
            }
        body
        }
    }
`

const BlogTemplate = ({ data, pageContext }) => {
    const { title, date, author, image } = data.mdx.frontmatter;
    const img = image.childImageSharp.fluid;
    const { body } = data.mdx;
    const { prev, next } = pageContext;
    return(
        <Layout>
            <article className="single-post">
                <PageHeader title={title}>
                    <div className="single-post__content">
                        <span>By</span>
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>
                </PageHeader>
                <div className="container">
                    <div className="single-post__image">
                        <Img fluid={img} />
                    </div>
                    <div className="single-post__body">
                        <MDXRenderer>
                            {body}
                        </MDXRenderer>
                    </div>
                </div>
            </article>
            <section className="single-post__links">
                <div className="container">
                    <div className="post-item-nav">
                        {prev &&
                            <Link to={`/blog/${prev.frontmatter.slug}`}>
                                <span>Prev: </span>
                                <span className="hide-nav">{prev.frontmatter.title}</span>
                            </Link>
                        }
                        {next &&
                            <Link to={`/blog/${next.frontmatter.slug}`}>
                                <span>Next: </span>
                                <span className="hide-nav">{next.frontmatter.title}</span>
                            </Link>
                        }
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default BlogTemplate;
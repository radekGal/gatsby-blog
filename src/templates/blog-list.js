import React from 'react';
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby';
import Post from '../components/post';
import PageHeader from '../components/pageHeader';
import '../scss/templates/blog-list.styles.scss';

export const getBlogList = graphql`
    query blogList($skip: Int!, $limit: Int!) {
        allMdx(
            sort:{ fields: [frontmatter___date], order: DESC},
            limit: $limit,
            skip: $skip
        ) {
            edges {
                node {
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

const BlogList = ({ data, pageContext }) => {
    const posts = data.allMdx.edges;
    const { numPages } = pageContext;
    return(
        <Layout>
            <PageHeader title="The blog" subtitle="Ut tempor ipsum quis euismod pulvinar. Maecenas a elementum tortor, at tempus lorem." />
            {posts.map(({ node }) => (
                <Post key={node.id} post={node} />
            ))}
            <section className="pagination">
                <div className="container">
                    <ul className="pagination__numbers">
                        {Array.from({ length: numPages }, (_, i) => (
                            <li key={`pagination-number${i + 1}`}>
                                <Link
                                    to={`/blog${i === 0 ? `` : `/${i + 1}`}`}
                                    activeClassName="active-pg"
                                >
                                    {i + 1}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </Layout>
    );
}

export default BlogList;
import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import Button from './button';
import { Link } from 'gatsby';
import '../scss/components/post.styles.scss';

const Post = ({ post }) => {
    const { date, author, title, slug, image} = post.frontmatter;
    const img = image.childImageSharp.fluid;
    return(
        <section className="post">
            <div className="container">
                <div className="post__img">
                    <Link to={`/blog/${slug}`}>
                        <Img 
                            fluid={img}
                            className="hello_image"
                            objectFit="cover"
                            alt={title}
                        />
                    </Link>
                </div>
                <div className="post__content">
                    <h3>{title}</h3>
                    <div className="post__content__small">
                        <span>By</span>
                        <span>{author}</span>
                        <span>{date}</span>
                    </div>
                    <p>{post.excerpt}</p>
                    <Button>
                        <Link to={`/blog/${slug}`}>
                            Read More
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}

export default Post;
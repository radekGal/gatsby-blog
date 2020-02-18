const path = require(`path`);

exports.createPages = async({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve(`src/templates/blog-template.js`)
    const { data: { blogPosts: { edges : posts }}} = await graphql(`
        {
            blogPosts: allMdx(filter: {fileAbsolutePath: {regex: "/posts/"}}) {
                edges {
                    node {
                        frontmatter {
                            slug
                            title
                        }
                    }
                }
            }
        } 
    `)
    
    posts.forEach(({ node }, index) => {
        createPage({
            path: `blog/${node.frontmatter.slug}`,
            component: blogTemplate,
            context: {
                slug: node.frontmatter.slug,
                prev: index === 0 ? null : posts[index - 1].node,
                next: index === (posts.length -1) ? null : posts[index + 1].node
            },
        })
    })

    //blog post list pages
    const postsPerPage = 3
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: path.resolve(`./src/templates/blog-list.js`),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
    const { createNodeField } = actions
    if (node.internal.type === `allMdx`) {
      const value = createFilePath({ node, getNode })
      createNodeField({
        name: `slug`,
        node,
        value,
      })
    }
  }
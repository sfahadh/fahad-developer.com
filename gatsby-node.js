exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  query {
      allContentfulBlogPost(sort: {fields: published, order: DESC}) {
        edges {
          node {
            title
            slug
            tags
            published(formatString: "MMMM Do, YYYY")

            synopsis {
              synopsis
            }

            thumbnail {
              gatsbyImageData
            }
          }
        }
      }
    }
  `)

  data.allContentfulBlogPost.edges.forEach(edge => {
    const slug = edge.node.slug
    
    actions.createPage({
      path: `blogs/${slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    })
  })
}
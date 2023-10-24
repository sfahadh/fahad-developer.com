exports.createPages = async function ({ actions, graphql }: any) {
  const { data } = await graphql(`
    query BlogPosts {
      allContentfulBlogPost(sort: {published: DESC}) {
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

  data.allContentfulBlogPost.edges.forEach((edge: any) => {
    const slug = edge.node.slug
    
    actions.createPage({
      path: `blogs/${slug}`,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    })
  })
}
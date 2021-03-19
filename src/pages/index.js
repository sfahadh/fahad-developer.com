import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Blog from "../components/main/blog/blog"
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    { console.log(props) }
    <SEO title="Home" />
    <Blog />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
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
            fluid {
              src
            }
          }
        }
      }
    }
	}
`


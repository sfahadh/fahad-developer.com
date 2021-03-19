import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Blog from "../components/main/blog"
import Landing from "../components/main/landing";
import SEO from "../components/seo"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <Blog blogs={props.data.allContentfulBlogPost.edges} />
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


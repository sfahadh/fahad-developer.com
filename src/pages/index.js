import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Landing from "../components/main/landing";
import About from "../components/main/about";
import Project from "../components/main/project";
import Blog from "../components/main/blog";
import Seo from "../components/seo";

const IndexPage = props => (
	<Layout>
		<Seo title="Home" />
		<Landing />
		<About />
		<Project projects={ props.data.contentfulProject } />
		<Blog blogs={ props.data.allContentfulBlogPost.edges } />
	</Layout>
)

export default IndexPage;

export const pageQuery = graphql`
	query {
		allContentfulBlogPost(sort: {fields: published, order: DESC}, limit: 3) {
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

		contentfulProject(name: {eq: "Breaking Bricks"}) {
			name
			tags

			description {
				description
			}

			thumbnail {
				gatsbyImageData
			}

			sourceLink
			liveLink
		}
	}
`


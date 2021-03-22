import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Blog from "../components/main/blog";
import "../styles/pages.scss";

const Blogs = props => {
	const siteTitle = props.data.site.siteMetadata.title;
	const blogs = props.data.allContentfulBlogPost.edges;
	const content = {
		header: "Blogs",
		description: "A resource of all blogs I've written",
		type: "POSTS"
	}
	
	return (
		<Layout location={ props.location } title={ siteTitle }>
			<div className="pages-container">
				<div className="container">
					<Bio numOfContent={ blogs.length } content={ content } />
					<hr />
					<div className="blog-list">
						<Blog blogs={ blogs } />
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Blogs;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}

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
`
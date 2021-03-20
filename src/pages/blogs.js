import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
// import Blog from "../components/main/blog/blog";
import Bio from "../components/bio";

import "../styles/pages.scss";

const Blogs = props => {
	const siteTitle = props.data.site.siteMetadata.title;
	const content = {
		header: "Blogs",
		description: "A resource of all blogs I've written",
		type: "POSTS"
	}

	return (
		<Layout location={ props.location } title={ siteTitle }>
			<div className="blogs-container">
				<div className="container">
					<Bio numOfBlogs="3" content={ content } />
					{/* <hr style={{ marginBottom: rhythm(4) }} /> */}
					{/* <Blog markdowns={markdowns} /> */}
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
	}
`
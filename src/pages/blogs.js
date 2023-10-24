import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Blog from "../components/main/blog";
import Seo from "../components/seo";
import "../styles/pages.scss";

const Blogs = props => {
	const blogs = props.data.allContentfulBlogPost.edges;
	const content = {
		header: "Blogs",
		description: "A resource of all the blogs I've written",
		type: "POSTS"
	}
	
	return (
		<Layout location={ props.location }>
			<Seo
				title={ content.header }
				description={ `${content.description}. Blogs relating to Gatsby, Javascript, React, 
					Angular and computer science topics such as algorithms & data structures.` }
			/>
			
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
`
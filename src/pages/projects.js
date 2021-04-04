import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Project from "../components/main/project";
import "../styles/pages.scss";

const Projects = props => {
	const siteTitle = props.data.site.siteMetadata.title;
	const projects = props.data.allContentfulProject.edges;
	const content = {
		header: "Projects",
		description: "A list of all projects I've created",
		type: "PROJECTS"
	}

	return (
		<Layout location={ props.location }>
			<div className="pages-container">
				<div className="container">
					<Bio numOfContent={ projects.length } content={ content } />
					<hr />
				</div>
			</div>

			<div className="project-list">
				<Project projects={ projects } />
			</div>
		</Layout>
	)
}

export default Projects;

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}

		allContentfulProject {
			edges {
				node {
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
		}
	}
`
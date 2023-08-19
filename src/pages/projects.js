import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Bio from "../components/bio";
import Project from "../components/main/project";
import Seo from "../components/seo";
import "../styles/pages.scss";

const Projects = props => {
	const projects = props.data.allContentfulProject.edges;
	const content = {
		header: "Projects",
		description: "A list of all the projects I've created",
		type: "PROJECTS"
	}

	return (
		<Layout location={ props.location }>
			<Seo
				title={ content.header }
				description={ `${content.description}. Projects that are based on a variety of tech stacks 
					including but not limited to Javascript, React, Ruby on Rails and PostgreSQL` }
			/>
			
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
		allContentfulProject(filter: {name: {ne: "Breaking Bricks"}}) {
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
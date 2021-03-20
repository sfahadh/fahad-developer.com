import React from "react";
import { graphql } from "gatsby";
import ProjectsData from "../utils/projectsData.json";
import Project from "../components/main/project";
import Layout from "../components/layout";
import Bio from "../components/bio";
import "../styles/pages.scss";

const Projects = props => {
	const siteTitle = props.data.site.siteMetadata.title;
	const content = {
		header: "Projects",
		description: "A list of all projects I've created",
		type: "PROJECTS"
	}

	return (
		<Layout location={ props.location } title={ siteTitle }>
			<div className="projects-container">
				<div className="container">
					<Bio numOfBlogs="3" content={ content } />
					{/* <hr style={{ marginBottom: rhythm(-3) }} /> */}
				</div>
			</div>

            { ProjectsData.map((project, index) => {
                return <Project project={ project } key={ index } />
			})}
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

		allFile(filter: {relativeDirectory: {eq: "images/projects"}}) {
			edges {
				node {
					childImageSharp {
						fluid {
							src
						}
					}
					name
				}
			}
		}
	}
`
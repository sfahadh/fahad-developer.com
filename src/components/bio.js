import React from "react";
import ProjectCard from "./main/_projectCard";
import "../../styles/main/project.scss"

const Project = ({ projects }) => {
  return (
    <section className="project-container">
      { projects.length ? 
        <div className="container">
          {
            projects.map(({ node }) => {
              return (
                <ProjectCard node={node} key={ node.name }/>
              )
            })
          }
        </div>
        :
        <div className="container project-card">
          <ProjectCard node={projects} />
        </div>
      }
    </section>
  );
}
 
export default Project;
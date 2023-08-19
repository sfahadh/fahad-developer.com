import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GoMarkGithub } from "react-icons/go";
import { FiLink } from "react-icons/fi";

function ProjectCard({ node }) {
  const image = getImage(node.thumbnail);

  return (
    <div className="project-card mb-5">
      <div className="projectImg">
        <GatsbyImage image={ image } alt={ node.name } />
      </div>

      <div className="content">
        <div className="tags">{ node.tags && node.tags.map((tag, id) => <span key={id}>{ tag }</span>) }</div>
        <h2>{ node.name }</h2>
        <p>{ node.description.description }</p>

        <div className="d-flex">
          <GoMarkGithub className="mt-1 project-icon" />
          <a href={ node.sourceLink } target="_blank" rel="noreferrer">Source Code</a>
        </div>

        <div className="d-flex">
          <FiLink className="mt-1 project-icon" />
          <a href={ node.liveLink } target="_blank" rel="noreferrer">Live Site</a>
        </div> 
      </div>
    </div>
  )
}

export default ProjectCard;
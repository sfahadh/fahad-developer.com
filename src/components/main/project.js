import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { GoMarkGithub } from "react-icons/go";
import { FiLink } from "react-icons/fi";

import "../../styles/main/project.scss"

const Project = ({ project, images }) => {
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fluid: {originalName: {eq: "breaking-bricks.png"}}) {
                gatsbyImageData
            }
        }
    `)
    
    const image = getImage(data.imageSharp);

    return (
        <section className="project-container">
            { project ? 
                <div className="container project-card">
                    <div className="projectImg">
                        {/* {
                            images.map(({ node }) => {
                                if (node.name === project.imageName) {
                                    return <Img fluid={node.childImageSharp.fluid} key={node.name}/>
                                }
                                
                            })
                        } */}
                    </div>

                    <div className="content">
                        <div className="tags">{ project.tags.map((tag, id) => <span key={id}>{ tag }</span>) }</div>
                        <h2>{ project.title }</h2>
                        <p>{ project.description }</p>

                        <div className="d-flex">
                            <GoMarkGithub className="mr-2 mt-1" />
                            <a href={ project.liveLink } target="_blank" rel="noreferrer">Source Code</a>
                        </div>

                        <div className="d-flex">
                            <FiLink className="mr-2 mt-1" />
                            <a href={ project.sourceLink } target="_blank" rel="noreferrer">Live Site</a>
                        </div> 
                    </div>
                </div>
                :
                <div className="container project-card">
                    <div className="projectImg">
                        <GatsbyImage image={ image } alt="Breaking Bricks" />
                    </div>

                    <div className="content">
                        <span>JavaScript</span>
                        <h2>Breaking Bricks</h2>
                        <p>A classic arcade game with a twist. With the combination of the Breaking Bad
                            theme and Mario theme, I present to you the recreation of "Brick Breakers"
                            into, "Breaking Bricks.
                        </p>

                        <div className="d-flex">
                            <GoMarkGithub className="mr-2 mt-1" />
                            <a href="https://github.com/sfahadh" target="_blank" rel="noreferrer">Source Code</a>
                        </div>

                        <div className="d-flex">
                            <FiLink className="mr-2 mt-1" />
                            <a href="https://github.com/sfahadh" target="_blank" rel="noreferrer">Live Site</a>
                        </div> 
                    </div>
                </div>
            }
        </section>
    );
}
 
export default Project;
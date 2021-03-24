import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";
import { GoMarkGithub } from "react-icons/go";
import { FiLink } from "react-icons/fi";
import "../../styles/main/project.scss"

const Project = ({ projects }) => {
    return (
        <section className="project-container">
            { projects ? 
                <div className="container">
                    {
                        projects.map(({ node }) => {
                            console.log(node);
                            const image = getImage(node.thumbnail);
                            return (
                                <div key={ node.name } className="project-card">
                                    <div className="projectImg">
                                        <GatsbyImage image={ image } alt={ node.name } />
                                    </div>

                                    <div className="content">
                                        <div className="tags">{ node.tags.map((tag, id) => <span key={id}>{ tag }</span>) }</div>
                                        <h2>{ node.name }</h2>
                                        <p>{ node.description.description }</p>

                                        <div className="d-flex">
                                            <GoMarkGithub className="mr-2 mt-1" />
                                            <a href={ node.liveLink } target="_blank" rel="noreferrer">Source Code</a>
                                        </div>

                                        <div className="d-flex">
                                            <FiLink className="mr-2 mt-1" />
                                            <a href={ node.sourceLink } target="_blank" rel="noreferrer">Live Site</a>
                                        </div> 
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                :
                <div className="container project-card">
                    <div className="projectImg">
                        <StaticImage src="../../images/projects/breaking-bricks.png" alt="Breaking Bricks" placeholder="blurred" />
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
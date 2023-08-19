import React from "react";
import { VscTrash } from "react-icons/vsc";
import { GiMuscleFat } from "react-icons/gi";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/main/about.scss";

const About = () => {
  return (
    <section className="about-container" id="about">
      <div className="container-sm aboutMe">
        <div className="details">
          <h1 className="mb-3">about me</h1>
          <h3 className="mb-3">An engineer who likes to eat, sleep & lift <GiMuscleFat /></h3>
          <p>
              Transitioned from a career of a Personal Trainer in pursuit of becoming a Physical
              Therapist to a software engineer. Treat me to lunch (coffee is <VscTrash />) and
              I'll tell you more
          </p>
        </div>
        
        <div className="thumbnail">
          <StaticImage 
            src="../../images/dev.svg" 
            alt="Typing on my laptop" 
            placeholder="tracedSVG" 
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}
 
export default About;
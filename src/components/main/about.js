import React from "react";
// import { VscTrash } from "react-icons/vsc";
// import { GiMuscleFat } from "react-icons/gi";
// import dev from "../../../assets/images/dev.svg";
import "../../styles/main/about.scss";

const About = () => {
    return (
        <section className="about-container" id="about">
            <div className="container-sm aboutMe">
                <div className="details">
                    <h1 className="mb-3">about me</h1>
                    <h3 className="mb-3">An engineer who likes to eat, sleep & lift
                    {/* <GiMuscleFat /> */}
                    </h3>
                    <p>Transitioned from a career as a Personal Trainer with an 
                    original goal of becoming a Physical Therapist. Treat me to lunch (coffee is
                        {/* <VscTrash /> */}
                        ) and I'll
                        tell you more
                    </p>
                </div>
                
                <div className="thumbnail">
                    {/* <img src={dev} alt="I’m Fahad, buy me lunch!" /> */}
                </div>
            </div>
        </section>
    );
}
 
export default About;
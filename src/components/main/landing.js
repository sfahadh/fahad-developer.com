import React from "react";
import Space from "./_space";
import "../../styles/main/landing.scss";


const Landing = () => {
    return (  
        <div className="landing-container">
            <Space />

            {/* <div className="intro">
                <h1 className="text-center font-weight-bold mb-3">Front End Engineer</h1>
                <h3 className="text-center mb-4">Expand your knowledge far beyond the infinite stars by viewing my work</h3>
                <Scroll type="id" element="about">
                    <button className="btn btn-lg btn-primary d-block m-auto" href="#about">
                        Bet <ImArrowDown2 />
                    </button>
                </Scroll>
            </div> */}
        </div>
    );
}
 
export default Landing;
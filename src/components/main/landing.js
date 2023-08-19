import React from "react";
import "../../styles/main/landing.scss";
import "../../styles/global.scss";

const Landing = () => {
  return (  
    <div className="landing-container">
      <div className="space">
        <div className="egg">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div className="face">
            <div className="eyes"></div>
            <div className="smile"></div>
            <div className="cheeks"></div>
            <div className="shine"></div>
          </div>
        </div>
      </div>

      <div className="stars">
        { new Array(20).fill(null).map((_, i) => <span className="star" key={i}></span>) }
      </div>
    </div>
  );
}
 
export default Landing;
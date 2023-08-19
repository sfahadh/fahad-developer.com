import React from "react";
import "../../styles/header/toggle.scss";

const Toggle = () => {
  return ({ theme, toggleTheme }) => {
    if (theme == null) return null;
    
    return (
      <div className="toggler-container">
        <span className="am">AM</span>
        <div className="toggleWrapper">
          <input
            type="checkbox"
            className="dn dmcheck"
            id="dn"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />

          <label htmlFor="dn" className="toggle">
            <span className="toggle__handler">
              <span className="crater crater--1"></span>
              <span className="crater crater--2"></span>
              <span className="crater crater--3"></span>
            </span>
            <span className="star star--1"></span>
            <span className="star star--2"></span>
            <span className="star star--3"></span>
            <span className="star star--4"></span>
            <span className="star star--5"></span>
            <span className="star star--6"></span>
          </label>
        </div>
        <span className="pm">PM</span>
      </div>			
    )
  }
}
 
export default Toggle;
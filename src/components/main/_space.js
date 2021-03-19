  
import React from "react";

const Space = () => {
    return (  
        <>
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
                { new Array(20).fill(null).map((elem, i) => <span className="star" key={i}></span>) }
            </div>
        </>
    );
}
 
export default Space;
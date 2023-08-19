import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const BlogCardFooter = ({ date }) => {
  return ( 
    <div className="blog-footer">
      <div className="logo">
        <StaticImage src="../../images/logo.png" alt="Logo" placeholder="blurred" />
      </div> 

      <div className="blog-footer-content mt-3">
        <Link to="/blogs"><h6>BLOGS</h6></Link>
        <h6>{ date }</h6>
      </div>
    </div>
  );
}
 
export default BlogCardFooter;
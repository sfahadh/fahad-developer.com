import React from "react"
import { StaticImage } from "gatsby-plugin-image";
import "../styles/bio.scss";

const Bio = ({ numOfContent, content }) => {
  return (
		<div className="bio">
			<div className="logo mr-3 mb-1">
          <StaticImage src="../images/logo.png" alt="Logo" placeholder="blurred" />
		  	</div>
		  
		  	<div className="bio-content">
			  	<h1>{ content.header }</h1>
				<p>{ content.description }</p>
			  
			  	<ul>
			 		<h5>NEW YORK</h5>
				  	<h6 className="bullet">•</h6>
				  	<h5>{ numOfContent } { content.type }</h5>
					<h6 className="bullet">•</h6>
				  
					<a
						href="https://github.com/sfahadh"
						target="_blank"
						rel="noopener noreferrer"
						className="bio-link"
					>
						GITHUB
					</a>

					<h6 className="bullet">•</h6>

					<a
						href="https://www.linkedin.com/in/fahad-hussain23/"
						target="_blank"
						rel="noopener noreferrer"
						className="bio-link"
					>
						LINKEDIN
					</a>
				</ul>
			</div>
		</div>
	)
}

export default Bio
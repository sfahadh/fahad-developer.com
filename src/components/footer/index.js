import React from "react";
import "../../styles/footer/footer.scss";

const Footer = () => {
  return ( 
    <footer className="mt-5">
      <div className="container d-flex justify-content-between pt-3">
        <div className="d-flex info">
          <h6>Fahad Hussain</h6>
          <h6>© {new Date().getFullYear()}{" "}</h6>
          <h6>| My Portfolio Blog</h6>
        </div>

        <div className="footer-links">
          <a
            href="https://fahad-developer.com/blogs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Latest Posts
          </a>

          &bull;{" "}{" "}

          <a
            href="https://fahad-portfolio.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Old Portfolio
          </a>
          
          &bull;{" "}{" "}

          <a
            href="https://www.linkedin.com/in/fahad-hussain23/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>

          &bull;{" "}{" "}

          <a
            href="https://github.com/sfahadh"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}
 
export default Footer;
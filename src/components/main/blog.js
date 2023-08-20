import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import BlogFooter from "./_blogFooter";
import "../../styles/main/blog.scss";
import { Link } from "gatsby";

const Blogs = ({ blogs }) => {
  return ( 
    <div className="blog-container">
      <div className="container">
        <div className="row blog-list">
          { blogs.map(({ node }) => {
            const image = getImage(node.thumbnail);

            return (
              <article key={node.slug} className="col-lg-4 col-md-6 mb-5">
                <GatsbyImage image={ image } alt={ node.title } />
                
                <div className="tags">
                  { node.tags.map(tag => <span key={ tag }>{ tag }</span>) }
                </div>

                <header>
                  <Link to={node.slug}>
                    <h2>{ node.title }</h2>
                  </Link>
                </header>

                <section>
                  <p>{ node.synopsis.synopsis }</p>
                </section>

                <BlogFooter date={ node.published } />
              </article>
            )
          }) } 
        </div>
      </div>
    </div>
  );
}
 
export default Blogs;
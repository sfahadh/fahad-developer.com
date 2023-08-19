import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import BlogFooter from "./_blogFooter";
import "../../styles/main/blog.scss";

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
                  <AniLink cover direction="left" to={`/blogs/${node.slug}`} bg="#29a9f9">
                    <h2>{ node.title }</h2>
                  </AniLink>
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
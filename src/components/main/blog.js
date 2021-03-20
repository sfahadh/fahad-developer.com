import React from "react";
import Img from "gatsby-image";
import "../../styles/main/blog.scss";

const Blogs = ({ blogs }) => {
    return ( 
            <div className="blog-container">
                <div className="container">
                    <div className="row blog-list">
                    {blogs.map(({ node }) => {
                            return (
                                <article key={node.slug} className="col-lg-4 col-md-6 mb-5">
                                    <Img fluid={node.thumbnail.fluid} />
                                    <div className="tags">
                                        { node.tags.map(tag => <span key={ tag }>{ tag }</span>) }
                                    </div>

                                    <header>
                                        <h2>{ node.title }</h2>
                                    </header>
 
                                    <section>
                                        <p>{ node.synopsis.synopsis }</p>
                                    </section>
                                </article>
                            )
                        }) } 
                    </div>
                </div>
            </div>
    );
}
 
export default Blogs;
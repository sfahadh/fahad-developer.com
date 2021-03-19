import React from "react";
// import "../../../styles/main/blog/blog.scss";

const Blogs = ({ blogs }) => {

    return ( 
            <div className="blog-container">
                <div className="container">
                    <div className="row blog-list">
                        {/* {markdowns.map(({ node }) => {
                            const title = node.frontmatter.title || node.fields.slug;
                            return (
                                <article key={node.fields.slug} className="col-lg-4 col-md-6 mb-5">
                                    <Img fluid={node.frontmatter.thumbnail.childImageSharp.fluid} />
                                    <div className="tags">
                                        { node.frontmatter.tags.map(tag => <span key={tag}>{tag}</span>) }
                                    </div>

                                    <header>
                                        <h2></h2>										
                                    </header>
 
                                    <section>
                                        <p dangerouslySetInnerHTML={{
                                            __html: node.frontmatter.spoiler || node.excerpt,
                                        }}/>
                                    </section>
                                </article>
                            )
                        })}  */}
                    </div>
                </div>
            </div>
    );
}
 
export default Blogs;
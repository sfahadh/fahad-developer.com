import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import BlogFooter from "../components/main/_blogFooter";
import PostBody from "./postBody";
import Seo from "../components/seo";
import "../styles/template.scss";

const Post = ({ data }) => {
  const post = data.contentfulBlogPost;
	console.log("post", post)
  return (
    <Layout>
      <Seo
        title={ post.title }
        description={ post.synopsis.synopsis }
        keywords={ post.keywords }
      />

      <article className="pages-container">
          <div className="container-md post">
            <header>
              { post.tags ? (
                <div className="tags">
                  { post.tags.map(tag => <span key={ tag + `${tag}` }>{ tag }</span>) }
                </div>
              ) : null }

              <h1>{ post.title }</h1>
              <hr />
              <BlogFooter date={ post.published }/>
            </header>

            <section className="post-body">
              <PostBody content={ post.body }/>
            </section>
          </div>
      </article>
    </Layout>
  )
}

export default Post;

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            published(formatString: "MMMM Do, YYYY")
            tags
            synopsis {
                synopsis
            }
            body {
                raw
            }
            thumbnail {
                gatsbyImageData
            }
        }
    }
`


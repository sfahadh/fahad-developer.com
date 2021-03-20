import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Post = ({ data }) => {
    const post = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{ post.title }</h1>
            <h6>{ post.published }</h6>
            <p>{ post.body.raw }</p>
        </Layout>
    )
}

export default Post;

export const pageQuery = graphql`
    query($slug: String!) {
        contentfulBlogPost(slug: { eq: $slug }) {
            title
            published(formatString: "MMMM Do, YYYY")
            body {
                raw
            }
        }
    }
`


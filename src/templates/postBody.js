import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const PostBody = ({ content }) => {
    const document = {
        nodeType: 'document',
        content: [{
            nodeType: 'paragraph',
            content: [
                {
                    nodeType: 'text',
                    value: 'Hello',
                    marks: [{ type: 'bold' }],
                },
                {
                    nodeType: 'text',
                    value: ' world!',
                    marks: [{ type: 'italic' }],
                }
            ],
        }]
    };

    return (
        <article className="blog-body">{ documentToReactComponents(document) }</article>
    )
}

export default PostBody;
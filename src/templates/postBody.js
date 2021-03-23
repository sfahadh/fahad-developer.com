import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const PostBody = ({ content }) => {
    const Bold = ({ children }) => <p className="bold">{ children }</p>;
    const Text = ({ children }) => <p className="align-center">{children}</p>;
    
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

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{ text }</Bold>,
        },

        renderNode: {
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{ children }</Text>,
        },

        renderText: text => text.replace('!', '?'),
    };

    return (
        <article>{ renderRichText(content, options) }</article>
    )
}

export default PostBody;
import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

const PostBody = ({ content }) => {
    const Bold = ({ children }) => <p className="bold">{ children }</p>;
    const Text = ({ children }) => <p className="align-center">{ children }</p>;

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{ text }</Bold>,
        },

        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => <h2>{ children }</h2>,
            [BLOCKS.HEADING_4]: (node, children) => <h4>{ children }</h4>,
            [BLOCKS.PARAGRAPH]: (node, children) => <Text>{ children }</Text>,
            // [BLOCKS.EMBEDDED_ASSET]: node => <code>{ JSON.stringify(node, null, 2) }</code>,
        }
    };

    return (
        <>{ renderRichText(content, options) }</>
    )
}

export default PostBody;


import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { useContentfulImage } from "../utils/useContentfulImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const asset = useContentfulImage(node.data.target.sys.id);
                const image = getImage(asset.node);
                return <GatsbyImage image={image} alt={ asset.node.contentful_id } src="" />
            }
        },

        renderText: text => text.split("\n").flatMap((text, i) => [i > 0 && <br />, text])
    };

    return (
        <>{ renderRichText(content, options) }</>
    )
}

export default PostBody;


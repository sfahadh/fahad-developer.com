import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { ContentfulImage } from "../utils/image";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostBody = ({ content }) => {
    const Bold = ({ children }) => <p className="bold">{ children }</p>;
    // const Text = ({ children }) => <p className="align-center">{ children }</p>;
    
    function code(text) {
        try {
            const value = text.reduce((acc, cur) => {
                return typeof cur !== "string" && cur.type === "br" ? acc + "\n" : acc + cur
            }, "");
        
            return (
              <>{ value }</>
            );
        } catch (error) {
            console.log(error);
        }
    }

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{ text }</Bold>,
            [MARKS.CODE]: code,
        },

        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => <h2>{ children }</h2>,
            [BLOCKS.HEADING_4]: (node, children) => <h4>{ children }</h4>,
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const asset = ContentfulImage(node.data.target.sys.id);
                const image = getImage(asset.node);
                return <GatsbyImage image={ image } alt={ asset.node.contentful_id } />
            }
        },

        renderText: (text) => {
            return text.split("\n").reduce((children, textSegment, index) => {
                return [...children, index > 0 ? <br key={index} /> : "", textSegment];
            }, []);
        },
    };

    return (
        <>{ renderRichText(content, options) }</>
    )
}

export default PostBody;


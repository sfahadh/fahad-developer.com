import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { obsidian } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { useContentfulImage } from "../utils/useContentfulImage";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostBody = ({ content }) => {
    const Bold = ({ children }) => <p className="bold">{ children }</p>;
    const Text = ({ children }) => <p className="align-center">{ children }</p>;
    
    function code(text) {
        try {
            const language = text.shift();
        
            const value = text.reduce((acc, cur) => {
            if (typeof cur !== "string" && cur.type === "br") {
                return acc + "\n";
            }
        
            return acc + cur;
            }, "");
        
            return (
                <SyntaxHighlighter language={language} style={obsidian}>
                    {value}
                </SyntaxHighlighter>
            );
        } catch (error) {
            console.log(error);
        }
    }

    const options = {
        renderMark: {
            [MARKS.BOLD]: text => <Bold>{text}</Bold>,
            [MARKS.CODE]: code,
        },

        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => <h2>{ children }</h2>,
            [BLOCKS.HEADING_4]: (node, children) => <h4>{ children }</h4>,
            [BLOCKS.PARAGRAPH]: (node, children) => {
                if (
                    node.content.length === 1 &&
                    find(node.content[0].marks, { type: 'code' })
                ) {
                    return <pre><code>{node.content[0].value}</code></pre>;
                }
                return <p>{children}</p>;
            },
            [BLOCKS.EMBEDDED_ASSET]: node => {
                const asset = useContentfulImage(node.data.target.sys.id);
                const image = getImage(asset.node);
                return <GatsbyImage image={ image } alt={ asset.node.contentful_id } />
            },
            [BLOCKS.EMBEDDED_ENTRY]: (node) => {
                const { __typename } = node.data.target;
                switch (__typename) {
                    case "ContentfulCodeBlock":
                        const { language, code } = node.data.target;
                        return (
                            <pre className={ language }>
                                <code>{ code }</code>
                            </pre>
                        )
                    default:
                        return null;
                }   
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


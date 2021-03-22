import * as React from "react";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const Bold = ({ children }) => <p className="bold">{ children }</p>;
const Text = ({ children }) => <p className="align-center">{ children }</p>;

const document = {
    nodeType: 'document',
    data: {},
    content: [
      {
        nodeType: 'paragraph',
        data: {},
        content: [
          {
            nodeType: 'text',
            value: 'Hello world!',
            marks: [],
            data: {}
          },
        ],
      },
    ],
};

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
  renderText: text => text.replace('!', '?'),
};

const PostBody = ({ title, description }) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
    )
}

export default PostBody;

documentToReactComponents(document, options);
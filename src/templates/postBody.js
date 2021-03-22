import * as React from "react";
// import { BLOCKS, MARKS } from "@contentful/rich-text-types";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
// ​
// const Bold = ({ children }) => <span className="bold">{children}</span>
// const Text = ({ children }) => <p className="align-center">{children}</p>
// ​
// const options = {
//   renderMark: {
//     [MARKS.BOLD]: text => <Bold>{text}</Bold>,
//   },
//   renderNode: {
//     [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
//     [BLOCKS.EMBEDDED_ASSET]: node => {
//       return (
//         <>
//           <h2>Embedded Asset</h2>
//           <pre>
//             <code>{JSON.stringify(node, null, 2)}</code>
//           </pre>
//         </>
//       )
//     },
//   }
// }

const PostBody = () => {
    return (
        <div>Hello</div>
    )
}

export default PostBody;

// documentToReactComponents(options);
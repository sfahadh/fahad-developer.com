import { graphql, useStaticQuery } from "gatsby";

export const ContentfulImage = assetUrl => {
  const { assets } = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        assets: allContentfulAsset {
          edges {
            node {
              contentful_id
              gatsbyImageData
            }
          }
        }
      }
    `
  )
    
  return assets.edges.find(({ node }) => node.contentful_id === assetUrl);
}
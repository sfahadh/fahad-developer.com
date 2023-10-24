require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
		title: `Fahad Hussain`,
		description: `A portfolio of my work and blogs I've written using Gatsby, Contentful, and Sass. 
			It displays completed Javascript projects and blogs written about Gatsby, Javascript, and Algorithms & Data Structures`,
		author: `Fahad Hussain`,
		siteUrl: 'https://www.fahad-developer.com',
		socialLinks: {
			linkedIn: `https://www.linkedin.com/in/fahad-hussain23/`,
			github: `https://github.com/sfahadh`
		},
		email: `sfahadh14@gmail.com`,
		address: `New York, NY`,
		keywords: ["Gatsby", "Sass", "Contentful", "Headless CMS", "Netlify", "Portfolio", "Blog"]
	},

  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": process.env.CONTENTFUL_ACCESS_TOKEN,
      "spaceId": process.env.CONTENTFUL_SPACE_ID
    }
  }, 
  "gatsby-plugin-image", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp",
  "gatsby-plugin-sass"
  ]
};

export default config;

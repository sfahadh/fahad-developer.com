require("dotenv").config({
  	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: `Portfolio Blog`,
		description: `A portfolio of my work and blogs I've written`,
		author: `Fahad Hussain`,
	},

	plugins: [
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [ process.env.GA_TRACKING_ID ],
				head: true,
				anonymize: true,
			},
		},

		`gatsby-plugin-dark-mode`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-image`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-transition-link`,
		
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},

		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
				downloadLocal: true
			},
		},

		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		
		`gatsby-plugin-gatsby-cloud`,
	],
}

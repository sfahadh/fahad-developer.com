require("dotenv").config({
  	path: `.env.${process.env.NODE_ENV}`,
});

const {
	NODE_ENV,
	URL: NETLIFY_SITE_URL = 'https://fahad-developer.com/',
	DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
	CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
	siteMetadata: {
		title: `Fahad Hussain`,
		description: `A portfolio of my work and blogs I've written using Gatsby, Contentful, and Sass. 
			It displays completed Javascript projects and blogs written about Gatsby, Javascript, and Algorithms & Data Structures`,
		author: `Fahad Hussain`,
		siteUrl: siteUrl,
		socialLinks: {
			linkedIn: `https://www.linkedin.com/in/fahad-hussain23/`,
			github: `https://github.com/sfahadh`
		},
		email: `sfahadh14@gmail.com`,
		address: `New York, NY`,
		keywords: ["Gatsby", "Sass", "Contentful", "Headless CMS", "Netlify", "Portfolio", "Blog"]
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
		`gatsby-plugin-sitemap`,
		
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

		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				resolveEnv: () => NETLIFY_ENV,
				env: {
					production: {
						policy: [{ userAgent: '*' }]
					},

					'branch-deploy': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null
					},
					
					'deploy-preview': {
						policy: [{ userAgent: '*', disallow: ['/'] }],
						sitemap: null,
						host: null
					}
				}
			}
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

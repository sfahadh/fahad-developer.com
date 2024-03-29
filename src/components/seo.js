import * as React from "react";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ title, description, keywords, meta }) => {
	const { site } = useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
						description
						author
						siteUrl
						keywords
					}
				}
			}
		`
	)

	const defaultTitle = site.siteMetadata?.title;
	const metaDescription = description || site.siteMetadata.description;
	const metaKeywords = keywords || site.siteMetadata.keywords;

	return (
    <HelmetProvider>
      <Helmet
        htmlAttributes={{ lang: `en` }}
        title={ title }
        titleTemplate={ defaultTitle ? `%s | ${defaultTitle}` : null }
        meta={ [
          { name: `description`, content: metaDescription },
          { name: `keywords`, content: metaKeywords },
          { property: `og:title`, content: title },
          { property: `og:description`, content: metaDescription },
          { property: `og:type`, content: `website` },
          { name: `twitter:card`, content: `summary` },
          { name: `twitter:creator`, content: site.siteMetadata?.author || `` },
          { name: `twitter:title`, content: title },
          { name: `twitter:description`, content: metaDescription },
        ].concat(meta) }
      />
    </HelmetProvider>
	)
}

SEO.defaultProps = {
	description: ``,
	keywords: [],
	meta: [],
}

SEO.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string,
	lang: PropTypes.string,
	keywords: PropTypes.arrayOf(PropTypes.string),
	meta: PropTypes.arrayOf(PropTypes.object),
}

export default SEO;

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/header";
import Footer from "./footer/footer";
import "../styles/global.scss";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<div className="layout-container">
			<Header siteTitle={ data.site.siteMetadata?.title || `Title` } />
			<main className="mb-5">{ children }</main>
			<Footer />
		</div>
	)
}

Layout.propTypes = {
  	children: PropTypes.node.isRequired,
}

export default Layout;

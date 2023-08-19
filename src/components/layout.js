import * as React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";
import "../styles/global.scss";

const Layout = ({ children }) => (
	<div className="layout-container">
		<Header />
		<main className="mb-5">{ children }</main>
		<Footer />
	</div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

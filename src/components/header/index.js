import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from 'prop-types';
import { Link } from "gatsby";
import "../../styles/header/header.scss";

const Header = () => {
	const [openMenu, setOpenMenu] = useState("");

	const toggleMenu = () => {
		setOpenMenu(openMenu === "not-active" ? "active" : "not-active");
	}

  return (
		<Navbar expand="md" className={`fixed-top navbar`}>
			<div className="container mainNav">
				<Link to="/" className="nav-link navbar-brand">Fahad Hussain</Link>

				<Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle">
					<div className={`btn ${openMenu}`} onClick={ toggleMenu } onKeyDown={ toggleMenu } role="button" tabIndex={0}>
						<span className="line"></span>
						<span className="line"></span>
						<span className="line"></span>
					</div>
				</Navbar.Toggle>

				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
					<Nav className="navbar-items">
						<Link to="/projects" className="nav-link">Projects</Link>
						<Link to="/blogs" className="nav-link">Blogs</Link>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header;

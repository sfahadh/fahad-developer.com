import React, { useState, useEffect, useCallback } from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from 'prop-types';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Toggle from "./toggle";
import debounce from "lodash.debounce";
import { Link } from "gatsby";
import "../../styles/header/header.scss";

const Header = () => {
	const [visibilityClass, setVisibilityClass] = useState("");
	const [openMenu, setOpenMenu] = useState("");

	useEffect(() => {
		handleScroll();
		window.addEventListener('resize', debouncedScroll)
		window.addEventListener('scroll', debouncedScroll);
		
		return () => {
			window.removeEventListener('resize', debouncedScroll);
			window.removeEventListener('scroll', debouncedScroll);
		}
	}, [visibilityClass])

	const toggleMenu = () => {
		setOpenMenu(openMenu === "not-active" ? "active" : "not-active");
	}
    
	const handleScroll = () => {
		const { pageYOffset, innerWidth, location } = window; 
		if (pageYOffset > 425 || innerWidth < 768 || location.pathname !== "/") {
			if (visibilityClass !== 'navbar-shrink') {
				setVisibilityClass("navbar-shrink");
			}
		} else {
			if (visibilityClass === 'navbar-shrink') {
				setVisibilityClass("");
			}
		}
	};

	const debouncedScroll = useCallback(debounce(handleScroll, 50), [visibilityClass]);

  return (
		<Navbar expand="md" className={`fixed-top ${visibilityClass}`}>
			<div className="container mainNav">
				<AniLink cover direction="top" to="/" bg="#29a9f9">
					<h3 className="navbar-brand">Fahad Hussain</h3>
				</AniLink>

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
						<Toggle />
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

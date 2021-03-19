import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from 'prop-types';
// import AniLink from "gatsby-plugin-transition-link/AniLink";
import Toggle from "./toggle";
import { Link } from "gatsby";
import "../../styles/header/header.scss";

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { visibilityClass: '' };
    }
    
	handleScroll = () => {
		const { visibilityClass } = this.state;
		if (window.pageYOffset > 50) {
			if (visibilityClass !== 'navbar-shrink') {
				this.setState({ visibilityClass: 'navbar-shrink' });
			}
		} else {
			if (visibilityClass === 'navbar-shrink') {
				this.setState({ visibilityClass: '' });
			}
		}
	};
	
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

    render() {
        const { visibilityClass } = this.state;

		return (
			<Navbar expand="md" className={`fixed-top ${visibilityClass}`}>
                <div className="container mainNav">
                    {/* <AniLink cover direction="down" bg="#8c61ff" to="/" className="navbar-brand"> */}
                        Fahad Hussain
					{/* </AniLink> */}

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle"/>
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
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

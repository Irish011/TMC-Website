import React from "react";
import { useMediaQuery } from '@react-hook/media-query';
import Logo from '../images/logo-1.png';
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap';

function SiteNavbar() {
    const matches = useMediaQuery('only screen and (max-width: 992px)');

    return (
        <div className='app-navbar'>
            {matches ? (
                /* Small Screen */
                <Navbar expand="lg" id="navbar-small" fixed="top">
                    <Container>
                        <Navbar.Brand className="logobrand"><a href="/"><img className="logoheader" src={Logo} alt="Logo" /></a></Navbar.Brand>
                        <Navbar.Toggle style={{ backgroundColor: '#65500a'}} id="opentoggle" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className={'site-navbar-small'}>
                            <Nav className="ml-auto navbar-content">
                                {/* <Nav className="ml-auto navbar-title"></Nav> */}
                                {/* <div className="vl"></div> */}
                                <Nav.Link href="/" className="links">Home</Nav.Link>
                                <Nav.Link href="/aboutUs" className="links">About Us</Nav.Link>
                                <NavDropdown title="Project" id="basic-nav-dropdown" className='navbar-primary-color'>
                                    <NavDropdown.Item href="/completed">Completed</NavDropdown.Item>
                                    <NavDropdown.Item href="/upcoming">Upcoming</NavDropdown.Item>
                                </NavDropdown>
                                {/* <Nav.Link href="/contact" className="links">Testimonial</Nav.Link> */}
                                <Nav.Link href="/career" className="links">Career @TMC</Nav.Link>
                                {/* <Nav.Link href="/contact" className="links">Contact</Nav.Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            ) : (
                /* Big Screen */
                <Navbar expand="lg" id="navbar-big" className="navbar-big">
                    <Container style={{padding: '2rem', width: '100%'}}>
                        <Navbar.Brand><a href="/"><img className="logoheader" src={Logo} alt="Logo" /></a></Navbar.Brand>
                        <Nav className="ml-auto navbar-content-big">
                            <Nav.Link href="/" className="links2">Home</Nav.Link>
                            <Nav.Link href="/aboutUs" className="links2">About Us</Nav.Link>
                            <NavDropdown title="Project" id="basic-nav-dropdown" className="links2">
                                <NavDropdown.Item href="/completed">Completed</NavDropdown.Item>
                                <NavDropdown.Item href="/upcoming">Upcoming</NavDropdown.Item>
                            </NavDropdown>
                            {/* <Nav.Link href="/testimonial" className="links2">Testimonial</Nav.Link> */}
                            <Nav.Link href="/career" className="links2">Career @TMC</Nav.Link>
                            {/* <Nav.Link href="/contact" className="links2">Contact</Nav.Link> */}
                        </Nav>
                    </Container>
                </Navbar>
            )}
        </div>
    )
}

export default SiteNavbar;

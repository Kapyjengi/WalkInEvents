import React from 'react'
import { Nav, Navbar, Image } from 'react-bootstrap'
import logo from '../SharedViewComponents/wie-logo.png'

export const NavLinks = () => (
    <>
        <Nav.Link href="/">Events</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/instructions">Instructions</Nav.Link>
    </>
)

export const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="/"><Image alt="WIE" className="wie-logo" src={logo} height={30} ></Image></Navbar.Brand>
            <p className="tagline d-none d-md-block">Explore the events near you!</p>
            <Navbar.Collapse id="responsive-navbar-nav2" className="justify-content-end ml-3 d-none d-lg-block">
                <Nav className="">
                    <NavLinks />
                </Nav>
            </Navbar.Collapse>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="flex-grow-0">
                <Nav className="d-lg-none">
                    <NavLinks />
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;
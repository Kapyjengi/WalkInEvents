import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'



const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/Index">WalkInEvents</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/about">About</Nav.Link>
                    {/* ANTON JA PÄIVI! */}
                    {/* Routerointi tehdään rivin 14 mukaan. */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )


}

export default NavBar;
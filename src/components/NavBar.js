import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="#index">WalkInEvents</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#linkki1">Linkki1</Nav.Link>
                    <Nav.Link href="#linkki2">Linkki2</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="#linkki3">Linkki3</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default NavBar;
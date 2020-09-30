import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'


const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/Index">WalkInEvents</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    {/*<Nav.Link href="/Map">Map</Nav.Link>
                    <Nav.Link href="/List">List</Nav.Link>*/}
                    <Nav.Link href="#">Filters</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )

}

export default NavBar;
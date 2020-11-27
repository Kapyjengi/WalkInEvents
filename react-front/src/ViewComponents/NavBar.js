import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Filtteri from '../SharedViewComponents/FilterEvents'



const NavLinks = () => (
    <>
        <Nav.Link href="/">Events</Nav.Link>
        <Nav.Link href="/about">About</Nav.Link>
        <Nav.Link href="/instructions">Instructions</Nav.Link>
    </>
)

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="secondary" bg="dark" variant="dark" className="justify-content-end">
        <Navbar.Brand className="mr-auto" href="/">WalkInEvents</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav2" className="justify-content-end ml-3 d-none d-lg-block">
            <Nav className="mr-auto">
                <NavLinks />
            </Nav>
        </Navbar.Collapse>
        {/* <Filtteri /> */}
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
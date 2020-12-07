import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from 'react-bootstrap'

export default function NavigationBar(){

    return (
        
        <Nav defaultActiveKey="/" as="ul">
          <Nav.Item as="li">
            <Nav.Link exact eventKey="1" as={Link} activeClassName="active" to="/">
              Walk-in Events
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link exact eventKey="2" as={Link} activeClassName="active" to="/about">
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link exact eventKey="3" as={Link} activeClassName="active" to="/instructions">
              Contact
            </Nav.Link>
          </Nav.Item>
        
      </Nav>
    )
}
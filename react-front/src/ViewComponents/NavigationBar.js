import React from 'react'
import { NavLink } from "react-router-dom"

export default function NavigationBar(){

    return (
        <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/instructions">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    )
}
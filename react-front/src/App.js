import React from 'react'
import './App.css'

import NavBar from './ViewComponents/NavBar'
import MainView from './ViewComponents/MainView'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ShowAboutUs from './ViewComponents/About'
import InstructionsView from './ViewComponents/InstructionsView'
export default function App() {


  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" component={ShowAboutUs} />
          <Route path="/instructions" component={InstructionsView} />
          <Route path="/" component={MainView} />
        </Switch>
      </Router>
    </div >
  )
}
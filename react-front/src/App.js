import React, { useState, useEffect } from 'react'
import './App.css'

import NavBar from './ViewComponents/NavBar'
import MainView from './ViewComponents/MainView'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import ShowAboutUs from './ViewComponents/About'

export default function App() {

  // Tests in console
  /* useEffect(() => {
    ReduxTests()
  }, []) */

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/about" component={ShowAboutUs} />
          {/*  <ShowAboutUs />
          </Route> */}
          <Route path="/" component={MainView} />
          {/* <MainView />
          </Route> */}
        </Switch>
      </Router>
    </div >
  )
}
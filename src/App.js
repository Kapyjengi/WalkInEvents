import React, { useState, useEffect } from 'react'
import './App.css'

import NavBar from './ViewComponents/NavBar'
import MainView from './ViewComponents/MainView'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export default function App() {

  // Tests in console
  /* useEffect(() => {
    ReduxTests()
  }, []) */

  return (
    <div>
      <Router>
        <NavBar />
        <MainView />
        <Switch>
          {/*
          Esimerkki routeroinnista filteörintinäkymään
          <Route path="/Filters" component={Filters}>
            <Filters />
          </Route>
          */}
        </Switch>
      </Router>
    </div >
  )
}
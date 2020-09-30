import React, { useState, useEffect } from 'react'
import './App.css'
import ListView from './components/ListView'

import NavBar from './components/NavBar'
import MainView from './components/MainView'
import MapScreen from './components/MapScreen'
import ListScreen from './components/ListScreen'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export default function App() {

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
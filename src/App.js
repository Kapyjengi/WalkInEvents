import React, { useState, useEffect } from 'react'
import './App.css'
import ListView from './components/ListView'

import NavBar from './components/NavBar'
import MapScreen from './components/MapScreen'
import ListScreen from './components/ListScreen'

import TabNav from './components/TabNav'

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
        <Switch>
          <Route path="/Index" >

          </Route>
          <Route path="/Map" component={MapScreen}>
            <MapScreen />
          </Route>
          <Route path="/List" component={ListScreen}>
            <ListScreen />
          </Route>
        </Switch>
      </Router>
      <TabNav />
      <ListView ></ListView>
    </div >
  )
}
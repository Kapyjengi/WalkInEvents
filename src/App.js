import React, { useState, useEffect } from 'react'
import './App.css'
import ListView from './components/ListView'
<<<<<<< Updated upstream
=======
import MapView from './components/MapView'
>>>>>>> Stashed changes

import NavBar from './components/NavBar'
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
<<<<<<< Updated upstream
       <NavBar />
    
    <ListView ></ListView>

=======
      <Router>
        <NavBar />
        <Switch>
          <Route path="/Map" component={MapScreen}>
            <MapScreen />
          </Route>
          <Route path="/List" component={ListScreen}>
            <ListScreen />
          </Route>
        </Switch>
      </Router>
      {/* <NavBar /> */}
      <MapView latitude={lat} longitude={lon} ></MapView>
      <ListView latitude={lat} longitude={lon}></ListView>
>>>>>>> Stashed changes
    </div>
  )}
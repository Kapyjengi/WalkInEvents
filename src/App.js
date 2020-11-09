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
        <MainView />
        <Switch>

          {/* 
          ANTON JA PÄIVI HOX HOX! 
           Poista alta kommentointi, jotta navigointi About sivulle toimii. 
           App.js tiedosto renderöi MainView komponentin, joka renderöi ListViewn. 
           Nyt About sivu renderöityy ListViewn alle. 
           About.js on ViewComponents kansiossa. 
           Uusi navbar linkki voidaan toteuttaa ylläolevan esimerkin lailla. NavBar.js komponenttiin pitää käydä lisäämässä
          endpointia koskevat määrittelyt. 
          */}

          {/* <Route path="/about" component={ShowAboutUs}>
            <ShowAboutUs />
          </Route> */}


        </Switch>
      </Router>
    </div >
  )
}
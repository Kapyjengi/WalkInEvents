import React, { useState, useEffect } from 'react'
import './App.css'
import ListView from './components/ListView'
import MapView from './components/MapView'
import NavBar from './components/NavBar'

export default function App() {
  const [lat, setLat] = React.useState(60.2)
  const [lon, setLon] = React.useState(25.1)

  useEffect(() => {
    coords();
  }, [lat, lon])

  const coords = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    })
  }

  return (
    <div>
      <NavBar />
      <MapView latitude={lat} longitude={lon} ></MapView>
      <ListView latitude={lat} longitude={lon}></ListView>
    </div>
  )
}
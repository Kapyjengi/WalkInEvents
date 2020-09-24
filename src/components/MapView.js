import React, { useState } from 'react'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MapView = (props) => {

    const [currentLocation, setCurrentLocation] = React.useState({lat: props.latitude, lng: props.longitude})
    const [zoom, setZoom] = React.useState(20)

    return (
      <Map center={currentLocation} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    );
  }

export default MapView;
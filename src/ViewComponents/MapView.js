import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { renderToStaticMarkup } from 'react-dom/server'
import { divIcon } from 'leaflet'
import { useSelector } from 'react-redux'

import SearchByDate from '../LogicalFunctions/SearchByDate'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import moment from 'moment'
import SearchByEvent from '../LogicalFunctions/SearchByEvent'
import SingleCard from '../SharedViewComponents/SingleCard'
import SearchByTag from '../LogicalFunctions/SearchByTag'
import { setUserLocation } from '../GlobalStore/LocationActions'

const MapView = () => {
  
  const state = useSelector(state => state)
  const filteredEvents = state.filteredEvents
  const range = state.range
  const userLocation = state.userLocation

  const [zoom, setZoom] = React.useState(15)
  const location = { lat: userLocation.latitude, lng: userLocation.longitude }
  const iconMarkup = renderToStaticMarkup(
    <span style={{ color: 'Tomato' }}>
      <i className='fas fa-street-view fa-3x' />
    </span>
  )

  const customMarkerIcon = divIcon({
    html: iconMarkup,
  })

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  })

  L.Marker.prototype.options.icon = DefaultIcon

  return (
    <div>
      <Map center={location} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <MarkerClusterGroup>
          {filteredEvents.map((event, i) => (
            <Marker key={i} position={[event.location.lat, event.location.lon]}>
              <Popup>
                <Card>
                  <Card.Body>
                    <Row style={{ paddingBottom: 20 }}>
                      <Col xs={12} md={12}>
                        {/* <Card.Title>{event.name.fi}</Card.Title>
                      <Card.Text>
                        <p>{event.description.intro}</p>
                        <p>{event.location.address.locality}</p>
                        <p>Osoite: {event.location.address.street_address}</p>
                        <p>Pvm ja aloitusaika {moment(`${event.event_dates.starting_day}`).format("DD.MM.YYYY HH:mm")}</p>
                        <p>Etäisyys: { (L.latLng(location.lat, location.lng).distanceTo(L.latLng(event.location.lat, event.location.lon))).toFixed(0) } m</p>
                      </Card.Text> */}
                        <SingleCard
                          name={event.name.fi}
                          desc={event.description.intro}
                          address={event.location.address.street_address}
                          time={moment(`${event.event_dates.starting_day}`).format("DD.MM.YYYY HH:mm")}
                          distance={(L.latLng(location.lat, location.lng).distanceTo(L.latLng(event.location.lat, event.location.lon))).toFixed(0)}
                          infoUrl={event.info_url}>
                        </SingleCard>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={6}>
                        {/* <Button variant="primary" style={{ marginRight: 10 }}>Show more</Button>
                        <Button
                          href={event.info_url}
                          target="_blank"
                          variant="secondary">WWW</Button> */}
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>

              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <Marker key={1} position={[location.lat, location.lng]} icon={customMarkerIcon} ></Marker>
        <Circle center={[location.lat, location.lng]} radius={range * 1000} />
      </Map >
    </div>
  );
}

export default MapView;
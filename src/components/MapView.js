import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { renderToStaticMarkup } from 'react-dom/server'
import { divIcon } from 'leaflet'
import SearchByDate from './SearchByDate'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import moment from 'moment'

const MapView = (props) => {

  const [zoom, setZoom] = React.useState(15)
  const location = { lat: props.latitude, lng: props.longitude }
  const iconMarkup = renderToStaticMarkup(
    <span style={{ color: 'Tomato' }}>
      <i className='fas fa-street-view fa-3x' />
    </span>
  )


  const customMarkerIcon = divIcon({
    html: iconMarkup,
  })
  const filteredEvents = SearchByDate(props.events, props.selectedDay)

  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
  })

  L.Marker.prototype.options.icon = DefaultIcon


  return (
    <Map center={location} zoom={zoom}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      <MarkerClusterGroup>
        {filteredEvents.map((event, i) => (
          <Marker key={i} position={[event.location.lat, event.location.lon]} >
            <Popup
              minWidth="500">
              <Card>
                <Card.Body>
                  <Row style={{ paddingBottom: 20 }}>
                    <Col xs={12} md={6}>
                      <Card.Title>{event.name.fi}</Card.Title>
                      <Card.Text>
                        <p>{moment(`${event.event_dates.starting_day}`).format("MM.DD.YYYY hh:mm")}</p>
                        <p>{event.location.address.street_address}</p>
                        <p>{event.location.address.postal_code} {event.location.address.locality}</p>
                        <p>{event.description.intro}</p>
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6}>300 m</Col>
                    <Col xs={6}>
                      <Button variant="primary" style={{ marginRight: 10 }}>Show more</Button>
                      <Button
                        href={event.info_url}
                        target="_blank"
                        variant="secondary">WWW</Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
      <Marker key={1} position={[location.lat, location.lng]} icon={customMarkerIcon} ></Marker>
      <Circle center={[location.lat, location.lng]} radius={props.area * 1000} />
    </Map >
  );
}

export default MapView;
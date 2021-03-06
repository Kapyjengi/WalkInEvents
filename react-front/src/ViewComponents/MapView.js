import React from 'react'
import { Map, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import icon from 'leaflet/dist/images/marker-icon.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
import MarkerClusterGroup from 'react-leaflet-markercluster'
import { renderToStaticMarkup } from 'react-dom/server'
import { divIcon } from 'leaflet'
import { useSelector } from 'react-redux'
import ToolbarFooter from '../SharedViewComponents/ToolbarFooter'
import moment from 'moment'
import SingleCard from '../SharedViewComponents/SingleCard'

const MapView = () => {

  const state = useSelector(state => state)
  const filteredEvents = state.filteredEvents
  const range = state.range
  const userLocation = state.userLocation
  const [zoom, setZoom] = React.useState(13)
  const location = { lat: userLocation.latitude, lng: userLocation.longitude }
  const iconMarkup = renderToStaticMarkup(
    <span style={{ color: '#ed420e' }}>
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
    <div className="mapDivContainer">
      <Map center={location} zoom={zoom} dragging={!L.Browser.mobile} tap={!L.Browser.mobile}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <MarkerClusterGroup>
          {filteredEvents.map((event, i) => (
            <Marker key={i} position={[event.location.lat, event.location.lon]}>
              <Popup>
                <SingleCard
                  name={event.name.fi}
                  desc={event.description.intro}
                  fullDesc={event.description.body}
                  address={event.location.address.street_address}
                  time={moment(`${event.event_dates.starting_day}`).format("DD.MM.YYYY HH:mm")}
                  distance={(L.latLng(location.lat, location.lng).distanceTo(L.latLng(event.location.lat, event.location.lon)) / 1000).toFixed(2) + ' km '}
                  info_url={event.info_url}>
                </SingleCard>
              </Popup>
            </Marker>
          ))}
        </MarkerClusterGroup>
        <Marker key={1} position={[location.lat, location.lng]} icon={customMarkerIcon} ></Marker>
        <Circle center={[location.lat, location.lng]} radius={range * 1000} />
      </Map >
      <ToolbarFooter />
    </div>
  );
}

export default MapView;
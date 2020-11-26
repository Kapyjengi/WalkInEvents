import { filter } from 'async'
import L from 'leaflet'
import moment from 'moment'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useSelector } from 'react-redux'
import { setEventSearch } from '../GlobalStore/EventActions'
import store from '../GlobalStore/Store'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'

export default function EventCard() {

    const state = useSelector(state => state)
    const userLocation = state.userLocation
    const location = { lat: userLocation.latitude, lng: userLocation.longitude }
    const filtered = state.filteredEvents

    const SeekName = (e) => {
        let keyWord = e.target.value
        store.dispatch(setEventSearch(keyWord))
        RunEventFilters()
    }

    function getName(event) {
        let nameToReturn = event.name.fi
        if (event.name.fi === null) {
            nameToReturn = event.name.sv;
            if (event.name.sv === null) {
                nameToReturn = event.name.en
            }
        }
        return nameToReturn
    }

    let cardEvents = filtered.map((events, i) => {

        let name = getName(events);
        let dateAndTime = moment(`${events.event_dates.starting_day}`).format("DD.MM.YYYY HH:mm")
        let address = events.location.address.street_address + ', ' +
            events.location.address.postal_code + ' ' +
            events.location.address.locality;
        let infoUrl = events.info_url;
        let disable = false;
        let buttonColor = "primary"
        if (infoUrl === null) {
            disable = true
            buttonColor = "secondary"
        }

        let distance = L.latLng(location.lat, location.lng).distanceTo(L.latLng(events.location.lat, events.location.lon)).toFixed(0) + " m" 

        return (
            <Card key={i} style={{ marginTop: 10 }} bg='light'>
                <Card.Body>
                    <Row style={{ paddingBottom: 20 }}>
                        <Col>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{dateAndTime}<br />{address}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>{distance}</Col>
                        <Col xs={6}>
                            {/* Jos otetaan lisätietoa ominaisuus käyttöön, tulee allaoleva rivi kommentoida pois.*/}
                            {/* <Button variant="info" style={{ marginRight: 10 }}>Show more</Button> */}
                            <Button href={infoUrl} target="_blank" variant={buttonColor} disabled={disable}>WWW</Button>

                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    })

    return (
        <div className="App">
            {filtered.length > 0 ? ( <p className="search-p">Search: <input id="eventos"  onChange={SeekName} /></p>):(<p></p>)}
            {cardEvents}
        </div>
    )
}

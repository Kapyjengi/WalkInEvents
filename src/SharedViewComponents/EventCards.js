import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import store from '../GlobalStore/Store'
import { connect } from 'react-redux'
import { useStore } from 'react-redux'
import moment from 'moment'
import L from 'leaflet'

export default function EventCard() {
    connect()
    const store = useStore()
    //let events = store.getState().filteredEvents
    //const [events, setEvents] = useState(store.getState().filteredEvents)
    const [events, setEvents] = useState(store.getState().filteredEvents)
    const [location, setLocation] = useState([])

    useEffect(() => {
        printAllEvents()
    })



    const printAllEvents = () => {
        setEvents(store.getState().filteredEvents)
        setLocation(store.getState().userLocation)
    }


    let cardEvents = events.map((events, i) => {
        let name = events.name.fi;
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

        let distance = L.latLng(location.latitude, location.longitude).distanceTo(L.latLng(events.location.lat, events.location.lon)).toFixed(0) + ' m';


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
        <div>
            {cardEvents}
        </div>
    )
}

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
import parse from 'html-react-parser'

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

        let distance = (L.latLng(location.lat, location.lng).distanceTo(L.latLng(events.location.lat, events.location.lon)) / 1000).toFixed(2) + ' km '

        return (

            <Col md={10}>
                <Card key={i} bg='light' className="event-cards-card">
                    <Card.Body>
                        <Row style={{ paddingBottom: 20 }}>
                            <Col>
                                <Card.Title><h4>{name}</h4></Card.Title>
                                <Card.Text><p>{dateAndTime}<br />{address}</p></Card.Text>
                                <Card.Text>
                                    <input type="checkbox" class="read-more-state" id={i} />
                                    <div className="read-more-wrap">
                                        <p>{events.description.intro}</p>

                                        <div className="read-more-target">

                                            {parse(events.description.body)}

                                        </div>
                                    </div>
                                    <label for={i} className="read-more-trigger"></label>
                                </Card.Text>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} className="align-middle"><p><strong>{distance}</strong></p></Col>
                            <Col xs={6}>
                                {disable === false &&

                                    <Button href={infoUrl} target="_blank" variant={buttonColor} disabled={disable} className="float-right">WWW</Button>
                                }

                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Col>

        )
    })

    return (
        <div className="App">
            <Row className="justify-content-md-center">

                {filtered.length > 0 ? (<p className="search-p">Search: <input id="eventos" onChange={SeekName} /></p>) : (<p>No events to show :( Please widen range or filters.</p>)}
                {cardEvents}
            </Row>
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import store from '../GlobalStore/Store'
import { connect, useSelector, useDispatch } from 'react-redux'
import {setFilteredEvents} from '../GlobalStore/EventActions'
import { useStore } from 'react-redux'
import moment from 'moment'
import L from 'leaflet'
import NameSearch from '../LogicalFunctions/SearchByEvent'

export default function EventCard() {
    connect()
    const store = useStore()
    //let events = store.getState().filteredEvents
    //const [events, setEvents] = useState(store.getState().filteredEvents)
    const [events, setEvents] = useState(store.getState().filteredEvents)
    const [location, setLocation] = useState([])
    const [SearchByEvent,setSearchByEvent] = useState()
    const [filtered, setFiltered] = useState(store.getState().filteredEvents)
    const [word, setWord] = useState('')
    const state = useSelector(state => state)
    const filteredEvents = state.filteredEvents
    
    useEffect(() => {
   
        if (word===''){
        printAllEvents()
        }
    })


   

  const SeekName = (e) => {
    let happening;
    happening = e.target.value
    setWord(happening)
    filtering(happening)
   

  }

  const filtering = (happening) =>{

    setFiltered(filteredEvents.filter(event => event.name.fi.includes(happening)===true))
    
  }


    const printAllEvents = () => {
        setEvents(store.getState().filteredEvents)
        setLocation(store.getState().userLocation)
        setFiltered(store.getState().filteredEvents)
    }


    let cardEvents = filtered.map((events, i) => {
        
        let name = events.name.fi;
        if (events.name.fi === null) {
            name=events.name.sv;
            if (events.name.sv===null){
                name=events.name.en
            }
        }

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
        <div className="App">
             <p>name: <input id="eventos"  onChange={SeekName} /></p>
            {cardEvents}
        </div>
    )
}

import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import store from '../GlobalStore/Store'
import { connect } from 'react-redux'
import { useStore } from 'react-redux'


export default function SingleCard(props) {
    connect()
    const store = useStore()
    //let events = store.getState().filteredEvents
    //const [events, setEvents] = useState(store.getState().filteredEvents)
    const [events, setEvents] = useState(store.getState().filteredEvents)
    const [location, setLocation] = useState([])
    
    useEffect(()=>{
        setLocation( store.getState().userLocation)
        console.log(props)
    })
 
        let name = props.name;
        let dateAndTime = props.time
        let address = props.address

        let distance = props.distance


        return (
            <Card  style={{ marginTop: 10 }} bg='light'>
                <Card.Body>
                    <Row style={{ paddingBottom: 20 }}>
                        <Col >
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{dateAndTime}<br />{address}</Card.Text>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>{distance} m</Col>
                        <Col xs={6}>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    

    return (
        <div>
           {/*  {cardEvents} */}
        </div>
    )
}

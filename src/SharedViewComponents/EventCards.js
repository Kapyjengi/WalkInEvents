import React, {useState} from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import store from '../GlobalStore/Store'
import { connect } from 'react-redux'

export default function EventCard() {
    connect()
    //let events = store.getState().filteredEvents
    const [events, setEvents] = useState(store.getState().filteredEvents)


    let cardEvents = events.map((events, i) => {
        let name = events.name.fi;
        let dateAndTime = 'date&time '+(i+1);
        //let place = 'place '+(i+1);
        let address = 'address '+(i+1);
        let distance = (i+1)*100+' m';
        
        return (
          <Card key={i} style={{ marginTop:10 }} bg='light'>
            <Card.Body>
                <Row style={{ paddingBottom:20 }}>
                    <Col>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{dateAndTime}<br/>{address}</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>{distance}</Col>
                    <Col xs={6}>
                        <Button variant="primary" style={{ marginRight:10 }}>Show more</Button>
                        <Button variant="secondary">WWW</Button>
                    </Col> 
                </Row>
            </Card.Body>
          </Card>
        )
    })

    return (
        <div>
            <Card>
                <Card.Body>
                    <Row style={{ paddingBottom:20 }}>
                        <Col xs={12} md={6}>
                        <Card.Title>John Bishop Live</Card.Title>
                        <Card.Text>
                        20.10.2020 19:30<br/>Hall of Culture<br/>Sturenkatu 4 00510 Helsinki
                        </Card.Text>
                        </Col>
                    </Row>   
                    <Row>
                        <Col xs={6}>300 m</Col>
                        <Col xs={6}>
                            <Button variant="primary" style={{ marginRight:10 }}>Show more</Button>
                            <Button variant="secondary">WWW</Button>
                        </Col> 
                    </Row>
                </Card.Body>
            </Card>
            {cardEvents}
        </div>
    )
}

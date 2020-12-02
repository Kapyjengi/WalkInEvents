import L from 'leaflet'
import moment from 'moment'
import React, { useState } from 'react'
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
    const [readMore, setReadMore] = useState(false);
    const readMorelinkName = readMore ? 'Read Less << ' : 'Read More >> '

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
    function getDesc(event) {
      let descToReturn = event.desc.fi
      if (event.desc.fi === null) {
          descToReturn = event.desc.sv;
          if (event.desc.sv === null) {
              descToReturn = event.desc.en
          }
      }
      return descToReturn
  }

    let cardEvents = filtered.map((events, i) => {
        console.log("Events from map-function: ", events)
        console.log("Events.description.intro from map-function: ", events.description.intro)
        console.log("Events.description.body from map-function: ", events.description.body)
        let name = getName(events);
        //let desc = getDesc(events);
        let dateAndTime = moment(`${events.event_dates.starting_day}`).format("DD.MM.YYYY HH:mm")
        let address = events.location.address.street_address + ', ' +
            events.location.address.postal_code + ' ' +
            events.location.address.locality;
        //let desc = events.desc
        // let fullDesc = parse(events.fullDesc)
        let fullDesc = events.fullDesc
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
              <Card key={i} style={{ marginTop: 10 }} bg='light'>
                  <Card.Body>
                      <Row style={{ paddingBottom: 20 }}>
                          <Col>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text>{dateAndTime}<br />{address}</Card.Text>
                              <Card.Text>
                                <h6>{events.description.intro}</h6> 
                                <div className="card-body-scrollable">
                                  
                                  {parse(events.description.body)}
                                
                                </div>
                             </Card.Text>
                          </Col>
                      </Row>
                      <Row>
                          <Col xs={6}>{distance}</Col>
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
            
            {filtered.length > 0 ? ( <p className="search-p">Search: <input id="eventos"  onChange={SeekName} /></p>):(<p>No events to show :( Please widen range or filters.</p>)}
            {cardEvents}
          </Row>
        </div>
    )
}

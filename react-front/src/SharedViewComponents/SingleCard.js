import React, { useState } from 'react'
import parse from 'html-react-parser'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function SingleCard(props) {

    let name = props.name;
    let dateAndTime = props.time
    let address = props.address
    let desc = props.desc
    let fullDesc = parse(props.fullDesc)
    let distance = props.distance
    let infoUrl = props.info_url;
    let disable = false;
    let buttonColor = "primary"
    if (infoUrl === null) {
        disable = true
        buttonColor = "secondary"
    }

    return (
        <Card bg='light'>
            <Card.Body>
                <Row style={{ paddingBottom: 20 }}>
                    <Col className="single-card">
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{dateAndTime}<br />{address}</Card.Text>
                        <Card.Text>
                            
                          

                            <input type="checkbox" class="read-more-state" id={name} />
                                    <div className="read-more-wrap">
                                        <p>{desc}</p>

                                        <div className="read-more-target">

                                            {fullDesc}

                                        </div>
                                    </div>
                            <label for={name} className="read-more-trigger"></label>
                        </Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>{distance}</Col>
                    <Col xs={6}>
                        {/* Jos otetaan lisätietoa ominaisuus käyttöön, tulee allaoleva rivi kommentoida pois.*/}
                        {/* <Button variant="info" style={{ marginRight: 10 }}>Show more</Button> */}

                        {disable === false &&
                            <Button href={infoUrl} target="_blank" variant={buttonColor} className="float-right">WWW</Button>
                        }
                    </Col>

                </Row>

            </Card.Body>
        </Card>
    )
}


import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

export default function SingleCard(props) {

    let name = props.name;
    let dateAndTime = props.time
    let address = props.address
    let desc = props.desc
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
                    <Col >
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{dateAndTime}<br />{address}</Card.Text>
                        <Card.Text>{desc}</Card.Text>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>{distance} m</Col>
                    <Col xs={6}>
                        {/* Jos otetaan lisätietoa ominaisuus käyttöön, tulee allaoleva rivi kommentoida pois.*/}
                        {/* <Button variant="info" style={{ marginRight: 10 }}>Show more</Button> */}
                        <Button href={infoUrl} target="_blank" variant={buttonColor} disabled={disable}>WWW</Button>
                    </Col>
                </Row>

            </Card.Body>
        </Card>
    )
}


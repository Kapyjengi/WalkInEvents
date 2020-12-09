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
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={12} className="single-card popup-card">
                    <Card.Title>{name}</Card.Title>
                    <input type="checkbox" class="read-more-state" id={name} />
                            
                            
                            <div className="read-more-wrap">
                              <Card.Text>{dateAndTime}<br /><strong>{distance}</strong> | {address} </Card.Text>
                              <Card.Text>
                                <p>{desc}</p>
                                <div className="read-more-target">
                                  {fullDesc}
                                </div>
                              </Card.Text>
                            </div>
                            

                            <label for={name} className="read-more-trigger"></label>


                        {disable === false &&
                            <Button href={infoUrl} target="_blank" variant={buttonColor} className="float-right popup-www-link">WWW</Button>
                        }
                    </Col>
                   

                </Row>

            </Card.Body>
        </Card>
    )
}


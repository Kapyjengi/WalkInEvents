import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../SharedViewComponents/InfoFooter'


const AboutView = () => {

    return (
        <>
            <Container className="textpage">
              <Row>
                <Col>
                  <h1>About <span>Walk-In-Events</span></h1>
                  <p>Walk-In-Events is an application, which shows all the events near the user.
                  All the events and their information come from an open API, which is provided by the City of Helsinki.</p>
                  <p>All rights are reserved by Helsinki city's council. The license for all the information provided by Helsinki, is a BY-license. 
                  Walk-In-Events is an application, created by team Käpy, for a course at Haaga-Helia.</p>
                  <p>Our application is built on open source data. The repository for this project is public. You can find the code and documentation from our <a href='https://github.com/Kapyjengi/WalkInEvents'>Github</a>.</p>
                  <p>Contact us: <a href="walkinevents.hki@gmail.com">walkinevents.hki@gmail.com</a></p>
                </Col>
              </Row>
            </Container>
            <Footer />
        </>
    )
}

export default AboutView
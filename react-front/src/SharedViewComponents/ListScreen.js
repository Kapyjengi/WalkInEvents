import React from 'react'
import Container from 'react-bootstrap/Container'
//import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'
import EventCard from './EventCards'
import Footer from './InfoFooter'

const ListScreen = () => {

    return (
        <div>
            <Container style={{ marginBottom: 110 }}>

                <EventCard />
            </Container>
            <Footer />
        </div>
    )
}

export default ListScreen
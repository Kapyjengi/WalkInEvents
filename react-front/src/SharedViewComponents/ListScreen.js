import React from 'react'
import Container from 'react-bootstrap/Container'
import EventCard from './EventCards'

const ListScreen = () => {

    return (
        <div>
            <Container>

                <EventCard style={{ marginTop: 10 }} />
            </Container>
           
        </div>
    )
}

export default ListScreen
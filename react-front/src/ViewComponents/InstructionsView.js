import React from 'react'
import Footer from '../SharedViewComponents/InfoFooter'
import Container from 'react-bootstrap/Container'

const InstructionsView = () => {

    return (
        <>
            <Container className="textpage">
                <h1>How to use</h1>
                <p>On starting the application, it asks the location of the user. 
                If the user grants access to the location information, then the application shows the location on a map.
                Otherwise the application will show the user on a default location, which is the center of Helsinki.
                By default the application will display events on a 1km radius and today.</p>
                <p>Our application has a number of ways for modifying the search results. Radius can be changed from the slider beneath the map, also the date picker is found underneath the map.
                There is also a sidebar for filters from which the different tags can be changed.</p>
                <p>If the preliminary search parameters can't locate any events, use the mentioned filtering methods to find events. 
                The events are shown in the map through pins.
                By clicking the pin, the events information pops up.
                All the events can be seen on the list tab aswell as the map tab.
                There is a search bar on the list tab with which you can filter from the events shown by their names.</p>
            </Container>
            <Footer />
        </>
    )
}

export default InstructionsView
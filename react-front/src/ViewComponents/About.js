import React from 'react'
import Footer from '../SharedViewComponents/InfoFooter'
import Container from 'react-bootstrap/Container'

const AboutView = () => {

    return (
        <>
            <Container className="textpage">
                <h1>About <span>Walk-In-Events</span></h1>
                <p>Walk-In-Events on sovellus, joka näyttää käyttäjälle häntä lähellä olevia tapahtumia.
                    Tapahtumat haetaan Helsinki Open APIsta. Tapahtumatietojen oikeuksien haltija on Helsingin kaupungin kanslia. 
                    Tiedoille on määritelty BY-lisenssi. 
                    Kyseinen sovellus on Haaga-Helian Ohjelmistoprojekti II -opintojaksolla Käpy-tiimin toteuttama ryhmätyö. </p>
                <p>Sovellus perustuu avoimeen lähdekoodiin. Repositoriomme on julkinen. Koodit ja tekninen dokumentaatio löytyvät 
                    <a href='https://github.com/Kapyjengi/WalkInEvents'> GitHubista</a>.</p>
                <p></p>
            </Container>
            <Footer />
        </>
    )
}

export default AboutView
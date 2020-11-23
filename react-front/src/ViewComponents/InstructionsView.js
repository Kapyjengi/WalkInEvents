import React from 'react'
import Footer from '../SharedViewComponents/InfoFooter'
import Container from 'react-bootstrap/Container'

const InstructionsView = () => {

    return (
        <>
            <Container className="textpage">
                <h1>How to use</h1>
                <p>Kun sovellus käynnistetään, se hakee käyttäjän sijainnin. 
                    Jos paikannus on pois päältä tai paikannus ei onnistu, 
                    sovellus näyttää oletussijaintina Helsingin keskustan.</p>
                <p>Oletuksena sovellus näyttää tapahtumia kilometrin säteellä. 
                    Etäisyyttä ja päivämäärää, joiden mukaan tapahtumia tarkastellaan, 
                    voi muuttaa kartan alapuolella olevista valikoista.</p>
                <p>Jos tapahtumia löytyy valitulta etäisyydeltä, sovellus näyttää ne pinneinä kartalla. 
                    Pinniä klikkaamalla tapahtuman tiedot avautuvat popup-ikkunassa. 
                    Kaikki tapahtumia voi myös tarkastella listana List -välilehdellä.
                    Sieltä tapahtumia voi rajata myös käyttämällä vapaata sanahakua tapahtuman nimestä</p>
                <p>Tapahtumia voi myös rajata sen tyypin mukaan käyttämällä toimintoa Filters.</p>
            </Container>
            <Footer />
        </>
    )
}

export default InstructionsView
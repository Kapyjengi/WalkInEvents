import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MapScreen from './MapScreen'
import ListScreen from './ListScreen'
import ListView from './ListView'

// Entinen TabNav.js komponentti uudelleennimetty MainView.js, koska tämä tulisi olemaan alkunäkymä.
// Pitäisikö ListView.js komponentin toiminnallisuus siirtää tälle sivulle fiksumman
// arkkitehtuurin näkökulmasta? Nyt ListView tekee oikeastaan kaiken toiminnallisuuden,
// vaikka nimensä mukaan sen pitäisi vain listata tapahtumat?

const MainView = () => {
    return (
        <Tabs defaultActiveKey="map" id="uncontrolled-tab-example">
            <Tab eventKey="map" title="Map">
                <ListView />
            </Tab>
            <Tab eventKey="list" title="List">
                <ListScreen />
            </Tab>
        </Tabs>
    )
}

export default MainView
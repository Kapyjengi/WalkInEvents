import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListScreen from '../SharedViewComponents/ListScreen'
import ListView from './ListView'
import TestScreen from '../Tests/TestScreen'
import { connect } from 'react-redux'
import { useStore } from 'react-redux'

// Entinen TabNav.js komponentti uudelleennimetty MainView.js, koska tämä tulisi olemaan alkunäkymä.
// Pitäisikö ListView.js komponentin toiminnallisuus siirtää tälle sivulle fiksumman
// arkkitehtuurin näkökulmasta? Nyt ListView tekee oikeastaan kaiken toiminnallisuuden,
// vaikka nimensä mukaan sen pitäisi vain listata tapahtumat?


const MainView = () => {

    const [key, setKey] = useState('TabKey')
    
    connect()
    const store = useStore()
    
    return (
        <Tabs defaultActiveKey="map" id="uncontrolled-tab-example"  onSelect={(k) => setKey(k)} >
            <Tab eventKey="map" title="Map">
                <ListView />
            </Tab>
            <Tab eventKey="list" title="List"  >
                <ListScreen />
            </Tab>
            {/* Kommentoidaan pois */}
            <Tab eventKey="Tests" title="Tests">
                <TestScreen />
            </Tab>
        </Tabs>

    )
}

export default MainView
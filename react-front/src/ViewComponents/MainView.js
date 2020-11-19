import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ListScreen from '../SharedViewComponents/ListScreen'
import ListView from './ListView'
import TestScreen from '../Tests/TestScreen'
import Filtteri from '../SharedViewComponents/FilterEvents'
import { Row, Col, Container, Nav } from "react-bootstrap";
import InfoFooter from '../SharedViewComponents/InfoFooter'


// Entinen TabNav.js komponentti uudelleennimetty MainView.js, koska tämä tulisi olemaan alkunäkymä.
// Pitäisikö ListView.js komponentin toiminnallisuus siirtää tälle sivulle fiksumman
// arkkitehtuurin näkökulmasta? Nyt ListView tekee oikeastaan kaiken toiminnallisuuden,
// vaikka nimensä mukaan sen pitäisi vain listata tapahtumat?


const MainView = () => {

    const [key, setKey] = useState('TabKey')

    return (
        <>
        {/* <Tabs defaultActiveKey="map" id="uncontrolled-tab-example" onSelect={(k) => setKey(k)} >
            <Tab eventKey="map" title="Map">
                <ListView />
            </Tab>
            <Tab eventKey="list" title="List"  >
                <ListScreen />
            </Tab>
            Kommentoidaan pois 
            <Tab eventKey="Tests" title="Tests">
                <TestScreen />
            </Tab>
        </Tabs> */}
        <Container fluid={true}>
            <Tab.Container defaultActiveKey="first">
            <Row>
            <Col xs={12} className="tabnav-row" >
                <Nav /* variant="pills" */ className="tabnav-row">
                <Nav.Item>
                    <Nav.Link eventKey="first">Map</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="second">List</Nav.Link>
                </Nav.Item>
                </Nav>
            </Col>
            <Col xs={12}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                    <ListView />
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                    <ListScreen />
                </Tab.Pane>
                </Tab.Content>
            </Col>
            </Row>
            </Tab.Container>
        </Container>
        <InfoFooter />
      </>

    )
}

export default MainView
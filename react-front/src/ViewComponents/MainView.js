import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { X } from 'react-bootstrap-icons'
import ListScreen from '../SharedViewComponents/ListScreen'
import ListView from './ListView'
import TestScreen from '../Tests/TestScreen'
import { Row, Col, Container, Nav, Button } from "react-bootstrap"
import InfoFooter from '../SharedViewComponents/InfoFooter'
import FilterEventsButton from '../SharedViewComponents/FilterEvents'
import ShowTagOptions from '../SharedViewComponents/ShowTagOptions'
import FilterEventsSidebar from '../SharedViewComponents/FilterEventsSidebar'

// Entinen TabNav.js komponentti uudelleennimetty MainView.js, koska tämä tulisi olemaan alkunäkymä.
// Pitäisikö ListView.js komponentin toiminnallisuus siirtää tälle sivulle fiksumman
// arkkitehtuurin näkökulmasta? Nyt ListView tekee oikeastaan kaiken toiminnallisuuden,
// vaikka nimensä mukaan sen pitäisi vain listata tapahtumat?


const MainView = () => {

    const [key, setKey] = useState('TabKey')
    const [sidebarOn, setSidebarOn] = useState(true)

    const onClickToggle = () => {
      setSidebarOn(!sidebarOn)
    }

    return (
        <>
        <Container fluid={true}>
            <Tab.Container defaultActiveKey="map">
              <Row className="tabnav-row">
              <Col xs={9} >
                  <Nav>
                  <Nav.Item>
                      <Nav.Link eventKey="map">Map</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                      <Nav.Link eventKey="list">List</Nav.Link>
                  </Nav.Item>
                  </Nav>
              </Col>
              <>
                {sidebarOn == false &&
                <Col xs={3} className="btn-heading-container-closed">
                  <Button
                    className={"d-none d-md-block float-right filters-btn"}
                    onClick={onClickToggle}>
                    Filters
                  </Button>
                  <FilterEventsButton css={"d-block d-md-none"} />
                </Col>
                }
                {sidebarOn == true &&
                <Col xs={3} className="btn-heading-container-open">
                  <FilterEventsButton css={"d-block d-md-none float-right filters-btn"} />
                  <h5 className="d-none d-md-inline">Filters</h5>
                  <a href="#"
                    className="d-none d-md-inline float-right close-sidebar"
                    onClick={onClickToggle}>
                    <X color="gray" size={27}/>
                  </a>
                </Col>
                }
            </>
          </Row>
              <Row>
              {sidebarOn == false &&
              <>
                <Col sm={12} md={12}>
                    <Tab.Content>
                    <Tab.Pane eventKey="map">
                        <ListView />
                    </Tab.Pane>
                    <Tab.Pane eventKey="list">
                        <ListScreen />
                    </Tab.Pane>
                    </Tab.Content>
                </Col>
              </>
              }
              {sidebarOn == true &&
              <>
              <Col sm={12} md={9}>
                  <Tab.Content>
                  <Tab.Pane eventKey="map">
                      <ListView />
                  </Tab.Pane>
                  <Tab.Pane eventKey="list">
                      <ListScreen />
                  </Tab.Pane>
                  </Tab.Content>
              </Col>
              <Col md={3} className='d-none d-md-block'>
                  <FilterEventsSidebar/>
                </Col>
              </>
              }
            
            </Row>
            </Tab.Container>
          <InfoFooter />    
        </Container>
        
      </>

    )
}

export default MainView
import React from 'react'
import Tab from 'react-bootstrap/Tab'
import ListScreen from '../SharedViewComponents/ListScreen'
import ListView from './ListView'
import { Row, Col, Container, Nav } from "react-bootstrap"
import InfoFooter from '../SharedViewComponents/InfoFooter'
import FilterEventsButton from '../SharedViewComponents/FilterEvents'
import FilterEventsSidebar from '../SharedViewComponents/FilterEventsSidebar'

const MainView = () => {

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
            <Col xs={3} className="btn-heading-container-open">
              <FilterEventsButton css={"d-block d-md-none float-right filters-btn"} />
              <h5 className="d-none d-md-block">Filters</h5>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={9} className="map-col">
              <Tab.Content>
                <Tab.Pane eventKey="map" className="map-col">
                  <ListView />
                </Tab.Pane>
                <Tab.Pane eventKey="list">
                  <ListScreen />
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Col md={3} className='d-none d-md-block'>
              <FilterEventsSidebar />
            </Col>
          </Row>
        </Tab.Container>
        <InfoFooter />
      </Container>
    </>
  )
}

export default MainView
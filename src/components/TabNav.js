import React from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import MapScreen from './MapScreen'
import ListScreen from './ListScreen'

const TabNav = () => {
    return (
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
            <Tab eventKey="map" title="Map">
                <MapScreen />
            </Tab>
            <Tab eventKey="list" title="List">
                <ListScreen />
            </Tab>
        </Tabs>
    )
}

export default TabNav
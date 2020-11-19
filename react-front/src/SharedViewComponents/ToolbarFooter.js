import React from "react";
import Slider from '../SharedViewComponents/DistanceSlider'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../GlobalStore/TimeActions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InfoFooter from './InfoFooter'
import { Container } from "react-bootstrap";



export default function ToolbarFooter() {

    const state = useSelector(state => state)
    const range = state.range
    const selectedDate = state.selectedDate
    const dispatch = useDispatch()

    return (
        <div className="toolbarfooter">
            <Container fluid={true}>
                <Row>
                    <Col xs={3} md={1}>
                        <p className="range-slider-p">Range: {range} km</p>
                    </Col>
                    <Col xs={9} md={7}>
                        <Slider />
                    </Col>
                    <Col xs={12} md={4}>
                        <p>date: <input id="selectday" type="date" value={selectedDate} onChange={event => dispatch(setDate(event.target.value))} /></p>
                    </Col>
                </Row>
            </Container>
            <InfoFooter />
        </div>
    )
}
//content div a needs a margin-bottom?
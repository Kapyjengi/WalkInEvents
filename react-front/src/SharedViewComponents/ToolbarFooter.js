import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";
import Slider from '../SharedViewComponents/DistanceSlider'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from '../GlobalStore/TimeActions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import RunEventFilters from '../LogicalFunctions/RunEventFilters'


export default function ToolbarFooter() {

    const [startDate, setStartDate] = useState(new Date());
    const state = useSelector(state => state)
    const range = state.range
    const selectedDate = state.selectedDate
    const dispatch = useDispatch()
    const changeDateAndRunFilters = (event) => {
        dispatch(setDate(event.target.value))
        RunEventFilters()
    }

    const onChanged = (e) => {
        let date = e
        date.setDate(date.getDate() + 0);
        let isoDate = date.toISOString().substr(0, 10);
        setStartDate(e)
        dispatch(setDate(isoDate))
        RunEventFilters()
    }


    return (
        <div className="toolbarfooter">
            <Container fluid={true}>
                <Row>
                    <Col xs={9} md={7}>
                        <Slider />
                    </Col>
                    <Col xs={12} md={4}>
                        {/* <p>date: <input id="selectday" type="date" value={selectedDate} 
                        onChange={event => changeDateAndRunFilters(event)} /></p>*/} 
                      <DatePicker id="selectday" dateFormat="dd.MM.yyyy" selected={startDate} onChange={onChanged} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
//content div a needs a margin-bottom?
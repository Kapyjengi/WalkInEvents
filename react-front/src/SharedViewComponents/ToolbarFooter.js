import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import React, { useState } from "react";
import Slider from '../SharedViewComponents/DistanceSlider'
import { Calendar3 } from 'react-bootstrap-icons'
import { useDispatch } from 'react-redux'
import { setDate } from '../GlobalStore/TimeActions'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Container } from "react-bootstrap";
import RunEventFilters from '../LogicalFunctions/RunEventFilters'
import Button from 'react-bootstrap/Button'


export default function ToolbarFooter() {

    const [startDate, setStartDate] = useState(new Date());
    const dispatch = useDispatch()

    const onChanged = (e) => {
        let date = e
        date.setDate(date.getDate() + 0);
        let isoDate = date.toISOString().substr(0, 10);
        setStartDate(e)
        dispatch(setDate(isoDate))
        RunEventFilters()
    }
    const ExampleCustomInput = ({ value, onClick }) => (
        <Button color="primary" onClick={onClick}>
            {value}
            <Calendar3 color="white" size={15} className="calendar-icon" />
        </Button>
    );

    return (
        <div className="toolbarfooter">
            <Container fluid={true}>
                <Row>
                    <Col xs={9} md={7} align="center">
                        <Slider />
                    </Col>
                    <Col xs={12} md={5}>
                        {/* <p>date: <input id="selectday" type="date" value={selectedDate} 
                        onChange={event => changeDateAndRunFilters(event)} /></p>*/}
                        <DatePicker id="selectday" dateFormat="dd.MM.yyyy" selected={startDate} onChange={onChanged} customInput={<ExampleCustomInput />} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
//content div a needs a margin-bottom?
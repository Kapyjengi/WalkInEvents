import React, { useState } from 'react'
import { useStore, useDispatch } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import Slider from './Slider'
import ToDay from '../LogicalFunctions/GetToday'


export default function Filtteri(props) {

  const [day, setDay] = useState(props.selectedDay)
  const [event, setEvent] = useState(props.event)
  const [area, setArea] = useState(10)
  const [open, setOpen] = useState(false);

  const store = useStore()

  let happening;

  const SeekName = (e) => {
    happening = e.target.value

    if (happening.length > 2) { setEvent(happening) }
    if (happening.length < 1) { setEvent(0) }

  }

  const ChangeDay = (event) => {
    setDay(event.target.value)
  }

  const handleClose = () => {
    props.ShowFilters(day, event, store.getState().range);
    setOpen(false);
  }

  const handleCancel = () => {
    document.getElementById("eventos").value = ""
    document.getElementById("selectday").value = ""
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  const HandleSlider = (event) => {
    setArea(event)
    /* fetchData(lat, lon, event)
    setLoading('LOADING') */
    //console.log(event)
  }

  const Reset = () => {

    setDay(ToDay())
    setEvent(0)
    document.getElementById("eventos").value = ""
    document.getElementById("selectday").value = ""
    setArea(1)
  }


  let text;
  if (event === 0) {
    text = 'event'
  } else {
    text = event
  }

  return (
    <div>
      <Button style={{ margin: 10 }} variant="primary" onClick={handleClickOpen}>
        Filters
  </Button>

      <Modal show={open} onClose={handleClose} >
        <Modal.Header>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="App">
            <p>name: <input id="eventos" placeholder={text} onChange={SeekName} /></p>
            <p>date: <input id="selectday" type="date" value={day} onChange={ChangeDay} /></p>
            <Slider HandleSlider={HandleSlider} />
          </div>
        </Modal.Body>

        <Modal.Footer>

          <Button variant="danger" onClick={Reset}>Reset</Button>

          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary" onClick={handleClose}>Search</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
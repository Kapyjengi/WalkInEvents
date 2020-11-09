import React, { useState } from 'react'
import { useStore, useDispatch, useSelector } from 'react-redux'
import { Button, Modal } from 'react-bootstrap'
import Slider from './DistanceSlider'
import ToDay from '../LogicalFunctions/GetToday'
import { setDate } from '../GlobalStore/TimeActions'
import { setLocationRange } from '../GlobalStore/LocationActions'
import ShowTagOptions from './ShowTagOptions'

export default function Filtteri(props) {

  const store = useStore()

  const selectedDate = useSelector(state => state.selectedDate)
  const dispatch = useDispatch()

  const [event, setEvent] = useState(props.event)
  const [area, setArea] = useState()
  const [open, setOpen] = useState(false);

  let happening;

  const SeekName = (e) => {
    happening = e.target.value

    if (happening.length > 2) { setEvent(happening) }
    if (happening.length < 1) { setEvent(0) }

  }

  const handleClose = () => {
    props.ShowFilters(store.getState().selectedDate, event, store.getState().range);
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
    dispatch(setDate(ToDay))
    setEvent(0)
    document.getElementById("eventos").value = ""
    document.getElementById("selectday").value = ""
    dispatch(setLocationRange(1))
  }


  let text;
  if (event === 0) {
    text = 'event'
  } else {
    text = event
  }

  return (
    <div>

      <Button variant="primary" size='sm' className='mr-4 mb-2 float-right position-absolute' 
      style={{ 'top': '61px', 'right': '-1%' }} onClick={handleClickOpen}>Filters</Button>

      <Modal show={open} onClose={handleClose} >
        <Modal.Header>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="App">
            <p>name: <input id="eventos" placeholder={text} onChange={SeekName} /></p>
            <p>date: <input id="selectday" type="date" value={selectedDate} onChange={event => dispatch(setDate(event.target.value))} /></p>
            <Slider HandleSlider={HandleSlider} />
            <ShowTagOptions></ShowTagOptions>
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
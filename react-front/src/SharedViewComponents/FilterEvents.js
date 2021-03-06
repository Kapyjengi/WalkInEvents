import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'
import ShowTagOptions from './ShowTagOptions'
import SwitchAllTagOptions from '../LogicalFunctions/SwitchAllTagChecks'

export default function Filtteri(props) {
  const state = useSelector(state => state)
  const [open, setOpen] = useState(false);
  const numberOfFilteredEvents = state.filteredEvents.length

  const handleClose = () => {
    setOpen(false);
    RunEventFilters()
  }

  const handleClickOpen = () => {
    setOpen(true);
  }
  const checkOrUncheckAll = () => {
    SwitchAllTagOptions()
    console.log(state.allTags[0].isChecked)
  }

  const checkButtonText = () => {
    if (state.allTags[0].isChecked) {
      return "Uncheck All"
    } else {
      return "Check All"
    }
  }

  return (
    <div className="button-container">

      <Button variant="primary" size='md' className={props.css + " float-right filters-btn"} onClick={handleClickOpen}>Filters</Button>

      <Modal show={open} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title>Filters</Modal.Title>
          <p>Showing {numberOfFilteredEvents} events.</p>
        </Modal.Header>

        <Modal.Body>
          <div className="App">
            <ShowTagOptions></ShowTagOptions>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={checkOrUncheckAll}>{checkButtonText()}</Button>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
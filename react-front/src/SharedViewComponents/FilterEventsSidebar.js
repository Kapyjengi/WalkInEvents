import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'
import ShowTagOptions from './ShowTagOptions'
import SwitchAllTagOptions from '../LogicalFunctions/SwitchAllTagChecks'

export default function FilterEventsSidebar(props) {
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
  }

  return (
    <div>
      <p>Showing {numberOfFilteredEvents} events.</p>
      <ShowTagOptions />
      <Button variant="secondary" onClick={checkOrUncheckAll}>Check/Uncheck All</Button>  
    </div>
  )
}
import React from 'react'
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import ShowTagOptions from './ShowTagOptions'
import SwitchAllTagOptions from '../LogicalFunctions/SwitchAllTagChecks'

export default function FilterEventsSidebar(props) {
  const state = useSelector(state => state)
  const numberOfFilteredEvents = state.filteredEvents.length

  const checkOrUncheckAll = () => {
    SwitchAllTagOptions()
  }

  return (
    <div className="filterEventsSidebar">
      <p>Showing {numberOfFilteredEvents} events.</p>
      <ShowTagOptions />
      <Button variant="secondary" onClick={checkOrUncheckAll}>Check/Uncheck All</Button>

    </div>
  )
}
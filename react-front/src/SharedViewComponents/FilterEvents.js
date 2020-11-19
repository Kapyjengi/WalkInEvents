import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ShowTagOptions from './ShowTagOptions'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'

export default function Filtteri(props) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
    RunEventFilters()
  }

  const handleCancel = () => {
    setOpen(false);
  }

  const handleClickOpen = () => {
    setOpen(true);
  }

  return (
    <div>

      <Button variant="primary" size='sm' className='ml-auto mr-2' onClick={handleClickOpen}>Filters</Button>

      <Modal show={open} onHide={handleClose} >
        <Modal.Header>
          <Modal.Title>Filters</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="App">
            <ShowTagOptions></ShowTagOptions>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
          <Button variant="primary" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
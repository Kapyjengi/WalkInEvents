import React, { useState, useEffect } from 'react';
import { useStore, useDispatch, connect } from 'react-redux'
import { addTag, removeTag, setTags } from '../GlobalStore/TagActions'
import { Button } from 'react-bootstrap'


export default function TestScreen() {
    const store = useStore()
    //connect()

    const printState = () => {
        console.log(store.getState())
    }
    const printAllEvents = () => {
        console.log(store.getState().allEvents)
    }

    return (
        <div>
            < Button style={{ margin: 10 }} variant="primary" onClick={printAllEvents} >
                Print allEvents from store
        </Button >

            < Button style={{ margin: 10 }} variant="primary" onClick={printState} >
                Print Store State
        </Button >
        </div>
    )

}
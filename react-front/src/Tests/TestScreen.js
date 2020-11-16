import React, { useState, useEffect } from 'react';
import { useStore, useDispatch, connect } from 'react-redux'
import { addTag, removeTag, setTags } from '../GlobalStore/TagActions'
import { Button } from 'react-bootstrap'
import DistanceBetweenPoints from '../LogicalFunctions/DistanceBetweenPoints'

export default function TestScreen() {
    const store = useStore()
    //connect()

    const printState = () => {
        console.log(store.getState())
    }
    const printAllEvents = () => {
        console.log(store.getState().allEvents)
    }

    const testcalc = () => {
        console.log(DistanceBetweenPoints(51.5112139, -0.119824, 48.8567, 2.3508))
    }

    const timeRangeFiltering = () => {
    
    var t0 = performance.now()
    let t1 = performance.now()

    console.log("Filtering events by distance took " + (t1 - t0) + " milliseconds.")
    }

    return (
        <div>
            < Button style={{ margin: 10 }} variant="primary" onClick={printAllEvents} >
                Print allEvents from store
        </Button >

            < Button style={{ margin: 10 }} variant="primary" onClick={printState} >
                Print Store State
        </Button >

        < Button style={{ margin: 10 }} variant="primary" onClick={testcalc} >
                calc distance
        </Button >
        </div>
    )

}
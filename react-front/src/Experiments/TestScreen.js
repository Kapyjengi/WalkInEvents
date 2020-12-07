import React, { useState, useEffect } from 'react';
import { useStore, useDispatch, connect, useSelector } from 'react-redux'
import { addTag, removeTag, setTags } from '../GlobalStore/TagActions'
import { Button } from 'react-bootstrap'
import DistanceBetweenPoints from '../LogicalFunctions/DistanceBetweenPoints'
import FilterByDistance from '../LogicalFunctions/FilterByDistance'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'


export default function TestScreen() {
    const allEvents = useSelector(state => state.allEvents)

    const store = useStore()
    //connect()

    const printState = () => {
        console.log(store.getState())
    }
    const printAllEvents = () => {
        console.log(store.getState().allEvents)
    }

    const testcalc = () => {
        //console.log(DistanceBetweenPoints(51.5112139, -0.119824, 48.8567, 2.3508))
        console.log(DistanceBetweenPoints(60.185367584228516, 24.85649871826172, 60.2243072, 24.985599999999998))


        
    }

    const timeRangeFiltering = () => {
    
    var t0 = performance.now()
    let t1 = performance.now()

    console.log("Filtering events by distance took " + (t1 - t0) + " milliseconds.")
    }

    const testRangeFilter = () => {
        console.log('in tests there is this many events', allEvents.length)
        //console.log('in tests there is this many events', store.getState().length)
        let filtered = FilterByDistance(allEvents)
        console.log("events in range", filtered.length)
    }

    const runfilters = () => {
        console.log('Running events from allEvents => filters => filteredEvents')
        RunEventFilters()
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

        < Button style={{ margin: 10 }} variant="primary" onClick={testRangeFilter} >
                Test range filter
        </Button >

        < Button style={{ margin: 10 }} variant="primary" onClick={runfilters} >
                RunEventFilters
        </Button >
        </div>
    )

}

        
        
/* 
lat: 60.185367584228516
​lon: 24.85649871826172

latitude: 60.2243072
​​
longitude: 24.985599999999998

*/
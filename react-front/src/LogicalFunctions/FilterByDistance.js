import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DistanceBetweenPoints from './DistanceBetweenPoints'

// Takes input of event array, gets range and users location from store
// Outputs array of events that are within range

export default function FilterByDistance(events) {

    

    const range = useSelector(state => state.range)
    const userLocation = useSelector(state => state.userLocation)

    function isInRange(event) {
        // (lat1, lon1, lat2, lon2)
        let distance = DistanceBetweenPoints(event.location.lat, event.location.long, 
            userLocation.latitude, userLocation.longitude)
        if (distance <= range) {
            return true
        } else {
            return false
        }
    }

    let filtered = []

    events.forEach(event => {
        if (isInRange(event)) {
            filtered.push(event)
        }
    })

    return filtered
    
}
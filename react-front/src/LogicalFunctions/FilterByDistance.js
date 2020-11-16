import store from '../GlobalStore/Store';
import DistanceBetweenPoints from './DistanceBetweenPoints';

// Takes input of event array, gets range and users location from store
// Outputs array of events that are within range

export default function FilterByDistance(events) {

    console.log("incoming events: ", events.length)



    const range = store.getState().range
    const userLocation = store.getState().userLocation

    function isInRange(event) {
        let distance = DistanceBetweenPoints(event.location.lat, event.location.lon,
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
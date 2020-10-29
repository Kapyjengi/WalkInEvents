export function setUserLocation(lat, long) {
    return ({
        type: 'SET_USER_LOCATION',
        location: { latitude: lat, longitude: long }
    })
}

export function setLocationRange(range) {
    console.log('range', range)
    return ({
        type: 'SET_LOCATION_RANGE',
        range
    })
}
export function setUserLocation(lat, long) {
    return ({
        type: 'SET_USER_LOCATION',
        userLocation: { latitude: lat, longitude: long }
    })
}

export function setLocationRange(range) {
    return ({
        type: 'SET_LOCATION_RANGE',
        range
    })
}
//
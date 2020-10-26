//payload is array of events
export function setAllEvents(events) {
    return ({
        type: 'SET_ALL_EVENTS',
        allEvents: events
    })
}

//payload is array of events
export function setFilteredEvents(events) {
    return ({
        type: 'SET_FILTERED_EVENTS',
        filteredEvents: events
    })
}
/*  */
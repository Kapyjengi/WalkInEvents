export function setNow(timeNow) {
    return ({
        type: 'SET_TIME_NOW',
        time: timeNow
    })
}

export function setDate(selectedDate) {
    return ({
        type: 'SET_SELECTED_DATE',
        selectedDate
    })
}
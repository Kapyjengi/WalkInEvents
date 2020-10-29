export function setNow(timeNow) {
    return ({
        type: 'SET_TIME_NOW',
        time: timeNow
    })
}

export function setSelectedTime(selectedTime) {
    return ({
        type: 'SET_SELECTED_TIME',
        time: selectedTime
    })
}
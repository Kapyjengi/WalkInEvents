export function setNow(timeNow) {
    return ({
        type: 'SET_TIME_NOW',
        time: timeNow
    })
}
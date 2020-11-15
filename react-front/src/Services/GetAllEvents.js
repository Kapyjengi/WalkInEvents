import { setAllEvents } from '../GlobalStore/EventActions'
import { useDispatch } from 'react-redux'
import store from '../GlobalStore/Store'

export default async function GetAllEvents() {

    const dispatch = useDispatch()

    let events = [];
    await fetch('v1/events/')
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Getting all events failed');
            }
        })
        .then(data => {
            events = data.data
        })
        .catch(error => console.error(error));
    dispatch(setAllEvents(events))
    return events




}/*  */
import { setAllEvents } from '../GlobalStore/EventActions';
import store from '../GlobalStore/Store';
export default async function GetAllEvents() {

    //const dispatch = useDispatch()

    let events = [];
    await fetch('api/events/')
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

    store.dispatch(setAllEvents(events))
    //return events


}/*  */
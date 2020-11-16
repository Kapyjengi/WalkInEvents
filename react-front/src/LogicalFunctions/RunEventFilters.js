import { setFilteredEvents } from '../GlobalStore/EventActions';
import store from '../GlobalStore/Store';
import FilterByDistance from './FilterByDistance';
import SearchByDate from './SearchByDate';
import SearchByTag from './SearchByTag';
import SortEvents from './SortEvents';

// Takes all events from store and filters them, saves them in filteredEvents

export default function RunEventFilters() {

    const state = store.getState()
    const date = state.selectedDate

    //console.log('RunEventFilters. Events to filter', state.allEvents.length)

    let filteredEvents = state.allEvents


    filteredEvents = SearchByDate(filteredEvents, date)
    //console.log('After SearchByDate, events left: ', filteredEvents.length)

    filteredEvents = SearchByTag(filteredEvents)
    //console.log('After SearchByTag, events left: ', filteredEvents.length)


    filteredEvents = FilterByDistance(filteredEvents)
    //console.log('After FilterByDistance, events left: ', filteredEvents.length)
    filteredEvents = SortEvents(filteredEvents)

    //console.log('Filtered events: ', filteredEvents)

    store.dispatch(setFilteredEvents(filteredEvents))

}

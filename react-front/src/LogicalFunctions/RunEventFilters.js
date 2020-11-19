import { setFilteredEvents } from '../GlobalStore/EventActions';
import store from '../GlobalStore/Store';
import FilterByDistance from './FilterByDistance';
import SearchByDate from './SearchByDate';
import SearchByTag from './SearchByTag';
import SortEvents from './SortEvents';
import SearchByName from './SearchByName'

// Takes all events from store and filters them, saves them in filteredEvents

export default function RunEventFilters() {

    const state = store.getState()
    const date = state.selectedDate

    let filteredEvents = state.allEvents

    filteredEvents = SearchByDate(filteredEvents, date)
    //console.log("by date", filteredEvents.length)
    filteredEvents = SearchByTag(filteredEvents)
    //console.log("by tag", filteredEvents.length)
    filteredEvents = FilterByDistance(filteredEvents)
    //console.log("by distance", filteredEvents.length)
    filteredEvents = SortEvents(filteredEvents)

    filteredEvents = SearchByName(filteredEvents)

    store.dispatch(setFilteredEvents(filteredEvents))

}

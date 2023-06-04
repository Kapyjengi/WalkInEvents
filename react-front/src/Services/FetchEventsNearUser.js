import { setFilteredEvents } from '../GlobalStore/EventActions'
import store from '../GlobalStore/Store'
import SearchByDate from '../LogicalFunctions/SearchByDate';

export default async function FetcEventsNearUser(lati, long, area) {

  const state = store.getState()
  const date = state.selectedDate

  let events = [];

  try {
    let data = await fetch('/api/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area)
    let response = data;
    let json = await response.json();
    events = JSON.parse(json)
  } catch (error) {
    console.error(error);
    return [];
  }

  // Tässä tehdään myös ajan mukaan filtteröinti, sen jälkeen lähetetään storeen.
  events = SearchByDate(events, date)
  store.dispatch(setFilteredEvents(events))

  return events
}
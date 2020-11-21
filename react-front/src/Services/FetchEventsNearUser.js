import { setFilteredEvents } from '../GlobalStore/EventActions'
import { connect, dispatch } from 'react-redux'
import store from '../GlobalStore/Store'
import SearchByDate from '../LogicalFunctions/SearchByDate';

export default async function FetcEventsNearUser(lati, long, area) {

  const state = store.getState()
  const date = state.selectedDate

  let events = [];

  //   let data = await fetch('v1/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area, {
  let data = await fetch('/api/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area)
  let response = data;
  let json = await response.json();
  events = JSON.parse(json)

  // Tässä tehdään myös ajan mukaan filtteröinti, sen jälkeen lähetetään storeen.
  events = SearchByDate(events, date)
  store.dispatch(setFilteredEvents(events))

  return events


}
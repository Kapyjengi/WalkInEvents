import {setFilteredEvents } from '../GlobalStore/EventActions'
import { connect } from 'react-redux'
import store from '../GlobalStore/Store'

export default async function Fetching(lati, long, area) {

  let events = [];

  if (lati !== undefined && long !== undefined) {
    //   let data = await fetch('api/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area, {
    await fetch('api/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        events = data.data
      })
      .catch(error => console.error(error));
  }
  
  return events

}
import {setFilteredEvents } from '../GlobalStore/EventActions'
import { connect } from 'react-redux'
import store from '../GlobalStore/Store'

export default async function Fetching(lati, long, area) {

  let events = [];

    //   let data = await fetch('v1/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area, {
   let data = await fetch('/api/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area)
      let response = data;
      let json = await response.json();
      events = JSON.parse(json)
      
      return events
  }
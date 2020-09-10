import React from 'react'
import '../App.css'
import moment from 'moment'
import SearchByDate from './SearchByDate'
import SearchByEvent from './SearchByEvent'
import SearchByLocation from './SearchByLocation'
import SearchByTag from './SearchByTag'
export default function ShowAll(props) {

    
   let events = props.events
   //console.log(props.events)
   let filted;
   if (props.selectedDay !==0){
       filted=SearchByDate(props.events,props.selectedDay)
       events=filted
       if (props.event !==0) {
        events=(SearchByEvent(events,props.event))
       }
       if (props.longitude !==0 && props.latitude !==0) {
        events=(SearchByLocation(props.events, props.longitude, props.latitude))
       }
   }
   if (props.event !==0) {
       filted=(SearchByEvent(props.events,props.event))
       events=filted
       if (props.selectedDay !==0){
         events=(SearchByDate(events,props.selectedDay))
       }
       if (props.longitude !==0 && props.latitude !==0) {
        events=(SearchByLocation(props.events, props.longitude, props.latitude))
       }
   }

   if (props.longitude !==0 && props.latitude !==0) {
    filted=(SearchByLocation(props.events, props.longitude, props.latitude))
    events=filted
    if (props.selectedDay !==0){
      events=(SearchByDate(events,props.selectedDay))
    }
    if (props.event !==0) {
      events=(SearchByEvent(events,props.event))
     }
   }

   if (props.event==='' && props.selectedDay===0) {
       events=props.event
   }
   //events = SearchByTag(events)

    let letEvents = "";

    letEvents = events.map((events, i) => {

      
        let name = events.name.fi;
        let endingday = events.event_dates.ending_day;
        let lon = events.location.lon;
        let lat = events.location.lat;


        if (name === null) {
          name = events.name.en
        }
        if (name === null) {
          name = events.name.sv
        }

        if (endingday === null) {
          endingday = events.event_dates.starting_day;
        }

        return (
          <tr key={i} >
            <td>{i}</td>
            <td></td>
            {/* <td>name: {events.name.fi}</td> */}
            <td width={500}>{name}</td>
            <td>{events.location.address.street_address} </td>
            <td>{events.location.address.postal_code} </td>
            <td>{events.location.address.locality} </td>
            <td>{moment(events.event_dates.starting_day).format("DD.MM.YYYY HH:mm")}</td>
            <td> </td>
            <td>{moment(endingday).format("DD.MM.YYYY HH:mm")} </td>
            <td> </td>
            <td>{lon.toFixed(4)}</td>
            <td>{lat.toFixed(4)}</td>
          </tr>
        )      

        })     
    
  return (
    <div className="App">
      <table>
        <th>index</th>
        <th></th>
        <th>name</th>
        <th>address</th>
        <th>zipcode</th>
        <th>city</th>
        <th>startingday</th>
        <th></th>
        <th>endingday</th>
        <th></th>
        <th>longitude</th>
        <th>latitude</th>
        {letEvents}
      </table>

    </div>
  );
}



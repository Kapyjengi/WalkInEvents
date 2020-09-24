import React from 'react'
import '../App.css'
import moment from 'moment'
import SearchByDate from './SearchByDate'
import SearchByEvent from './SearchByEvent'
import SearchByTag from './SearchByTag'
export default function ShowAll(props) {


  let events = props.events
  let filted;
  //Jos päivämäärä on valittu ->

  //mennään etsimään isosta listasta kaikki tietyn päivämäärän tapahtumat SearchByDate -funktion kautta
  filted = SearchByDate(props.events, props.selectedDay)
  events = SearchByEvent(filted, props.event)

  //Mikäli käyttäjä on nollannut hakukentän ja päivämääräkentän niin isolista laitetaan filteröidynlistan päälle
  //Tämä ei toistaiseksi vaikuta mitenkään latitude/longitude muokkauksiin :/
  if (props.event === '' && props.selectedDay === 0) {
    events = props.event
  }

  // Tag filter
  events = SearchByTag(events)

  // letEventsista tulee lista jota aiemmin mahdollisesti jo filteröitiin ja sortattiin
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

    // Tässä määritellään mitä näytetään käyttäjälle
    return (
      <tr key={i} >
        <td>{i}</td>
        <td></td>
        <td width={500}>{name}</td>
        <td>{events.location.address.street_address} </td>
        <td>{events.location.address.postal_code} </td>
        <td>{events.location.address.locality} </td>
        <td>{moment(events.event_dates.starting_day).format("DD.MM.YYYY HH:mm")}</td>
        <td> </td>
        <td>{moment(endingday).format("DD.MM.YYYY HH:mm")} </td>
        <td> </td>
        <td>{lon.toFixed(7)}</td>
        <td>{lat.toFixed(7)}</td>
      </tr>
    )

  })

  if (events.length === 0) {
    return (
      <div>
        Sorry, no events were found.
      </div>
    )
  } else {
    return (
      <div className="App">
        <table>
          <thead>
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {letEvents}
          </tbody>
        </table>
      </div>
    );
  }
}
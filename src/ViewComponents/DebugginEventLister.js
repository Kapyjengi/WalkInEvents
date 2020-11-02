import React from 'react'
import '../App.css'
import moment from 'moment'
import SearchByDate from '../LogicalFunctions/SearchByDate'
import SearchByEvent from '../LogicalFunctions/SearchByEvent'
import SearchByTag from '../LogicalFunctions/SearchByTag'
import store from '../GlobalStore/Store'
import { connect } from 'react-redux'
import {setFilteredEvents} from '../GlobalStore/EventActions'
export default function ShowAll(props) {


  let events = props.events
  //let filted;
  //Jos päivämäärä on valittu ->

  //mennään etsimään isosta listasta kaikki tietyn päivämäärän tapahtumat SearchByDate -funktion kautta
  
  let filted = SearchByDate(props.events, props.selectedDay)
  
  events = SearchByEvent(filted, props.event)
  
  //Mikäli käyttäjä on nollannut hakukentän ja päivämääräkentän niin isolista laitetaan filteröidynlistan päälle
  //Tämä ei toistaiseksi vaikuta mitenkään latitude/longitude muokkauksiin :/
  if (props.event === 0 && props.selectedDay === 0) {
    events = props.event
  }

  // Tag filter
  
  //events = SearchByTag(events)
  // kaikki filterit käyty läpi, päivitetään store
  connect()
  store.dispatch(setFilteredEvents(events))
  
  return (
    <div></div>
  )
} 
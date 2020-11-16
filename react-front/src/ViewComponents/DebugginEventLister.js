import React from 'react'
import '../App.css'
import moment from 'moment'
import SearchByDate from '../LogicalFunctions/SearchByDate'
import SearchByEvent from '../LogicalFunctions/SearchByEvent'
import SearchByTag from '../LogicalFunctions/SearchByTag'
import store from '../GlobalStore/Store'
import { connect, useSelector, useDispatch } from 'react-redux'
import {setFilteredEvents} from '../GlobalStore/EventActions'
export default function ShowAll(props) {

  const selectedDay = useSelector(state => state.selectedDate) 
  const dispatch = useDispatch()

  let events = props.events
  //let filted;
  //Jos päivämäärä on valittu ->

  //mennään etsimään isosta listasta kaikki tietyn päivämäärän tapahtumat SearchByDate -funktion kautta
  
  let filted = SearchByDate(props.events, selectedDay)
  
  events = SearchByEvent(filted, props.event)
  events = SearchByTag(events)
  
  //Mikäli käyttäjä on nollannut hakukentän ja päivämääräkentän niin isolista laitetaan filteröidynlistan päälle
  //Tämä ei toistaiseksi vaikuta mitenkään latitude/longitude muokkauksiin :/
  if (props.event === 0 && selectedDay === 0) {
    events = props.event
  }

  // Tag filter
  
  //events = SearchByTag(events)
  // kaikki filterit käyty läpi, päivitetään store
  dispatch(setFilteredEvents(events))
  
  return (
    <div></div>
  )
} 
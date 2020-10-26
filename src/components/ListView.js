import React, { useEffect, useState } from 'react'
import GetToday from './GetToday'
import Loading from './Loading'
import Show from './Show'
import ShowTagOptions from './ShowTagOptions'
import MapView from './MapView'
import Filtteri from './Filter'
import Fetch from './Fetch'
import {useStore, useDispatch, connect} from 'react-redux'
import {setUserLocation} from '../GlobalStore/locationActions'
import GetAllEvents from '../LogicalFunctions/GetAllEvents'


export default function ListView() {
  const store = useStore()
  connect()

  const [events, setEvents] = React.useState('')
  const [selectedDay, setSelectedDay] = React.useState(0)
  const [event, setEvent] = React.useState(0)
  const [loading, setLoading] = React.useState('LOADING')
  const [loaded, setLoaded] = useState(false)
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [area, setArea] = useState(10)

  

  // Sivun alkuu käytetään useEffectiä jossa ladataan lista kun sivu aukeaa
  useEffect(() => {
    //Haetaan koordinaatit
    Coords();
  }, [lon, lat])
  useEffect(()=> {
    GetAllEvents();
  }, [])


  async function fetchData(lati, long, area) {
    let data=(Fetch(lati,long,area))
    // kutsutaan funktiota, joka hakee kaikki eventit
    setEvents((await data))
    if (events !== ''){
    setLoading('')
    setLoaded(true)
    }
  }

  const Coords =() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      store.dispatch(setUserLocation(position.coords.latitude, position.coords.longitude))
  
    });
    let lati = lat
    let long = lon
    //Haetaan funktion kautta päivämäärä joka muutetaan isomuotoon.
    let toDay = GetToday()
    setSelectedDay(toDay)
    //Haetaan API
    fetchData(lati, long, area);
  }
  
  const ShowFilters=(dayNew,eventNew,areaNew)=>{
    areaNew=parseInt(areaNew)
    console.log(eventNew)
    if (dayNew !== undefined) {
      setSelectedDay(dayNew)
    }
    if (eventNew!==undefined) {
      setEvent(eventNew)
    }
    if (area !== areaNew){
      console.log(area,areaNew)
      setArea(areaNew)
      const alueNew= areaNew
      fetchData(lat, lon,alueNew)
      setLoading('LOADING')
    }
    
  }
 
  // Niin kauan kuin loading state on 'LOADING' niin näytetään pelkästään lataus 'merkkiä'
  if (loading === 'LOADING' && !loaded) {
    return (
      <div className="App">
        <h1> </h1>
        <Loading loading={loading} loaded={loaded} />
      </div>
    )
  } else {
    // API Rest on ladattu kokonaan ja näytetään koko lista.
    return (
      <div className="App">
        <h1> </h1>
        <Filtteri ShowFilters={ShowFilters} selectedDay={selectedDay} event={event}/>
        <MapView latitude={lat} longitude={lon} events={events} event={event} area={area} selectedDay={selectedDay} ></MapView> 
        <ShowTagOptions events={events} />
        area:{area}km
        <Loading loading={loading} loaded={loaded} />
        <Show events={events} event={event} selectedDay={selectedDay} />
      </div>
    )

  }
}
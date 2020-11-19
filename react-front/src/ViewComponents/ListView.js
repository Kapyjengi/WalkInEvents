import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { setUserLocation } from '../GlobalStore/LocationActions'
import GetToday from '../LogicalFunctions/GetToday'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'
import Fetch from '../Services/FetchEventsNearUser'
import GetAllEvents from '../Services/GetAllEvents'
import Loading from '../SharedViewComponents/Loading'
import MapView from '../ViewComponents/MapView'

export default function ListView() {
  const store = useStore()
  const range = useSelector(state => state.range)
  const dispatch = useDispatch()

  const [events, setEvents] = React.useState('')
  const [selectedDay, setSelectedDay] = useState(store.getState().selectedDate)
  const [event, setEvent] = React.useState(0)
  const [loading, setLoading] = React.useState('LOADING')
  const [loaded, setLoaded] = useState(false)
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [area, setArea] = useState(store.getState().range)


  // Sivun alkuu käytetään useEffectiä jossa ladataan lista kun sivu aukeaa
  useEffect(() => {
    //Haetaan koordinaatit
    if (navigator.geolocation) {
      Coords();
      fetchData(lat, lon, range);
    }
  }, 
  [lon, lat])
  //[lon, lat, range])

  // Rangen muuttamine laukaisee filtteröinnin
  useEffect(() => {
    RunEventFilters()
  }, [range])

  useEffect(()=> {
    // haetaan kaikki eventit storeen
    GetAllEvents()
  }, [])


  async function fetchData(lati, long, area) {
    let data = (Fetch(lati, long, area))
    // kutsutaan funktiota, joka hakee kaikki eventit
    setEvents((await data))
    if (events !== '') {
      setLoading('')
      setLoaded(true)
    }
  }

  const Coords = () => {

    let id, target, options;

    function success(pos) {
      let crd = pos.coords;
      if (target.latitude !== crd.latitude && target.longitude !== crd.longitude) {
        setLat(crd.latitude)
        setLon(crd.longitude)
        dispatch(setUserLocation(crd.latitude, crd.longitude))
        navigator.geolocation.clearWatch(id);
      }
    }

    function error(err) {
      //console.warn('ERROR(' + err.code + '): ' + err.message);
      setLat(60.1733244)
      setLon(24.9410248)
      dispatch(setUserLocation(lat, lon))
    }

    target = {
      latitude: 0,
      longitude: 0
    };

    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    id = navigator.geolocation.watchPosition(success, error, options);

    // GetUserPosition()
    let lati = store.getState().userLocation.latitude
    let long = store.getState().userLocation.longitude
    if (lati === undefined && long === undefined) {
      lati = lat
      long = lon
    }
    //Haetaan funktion kautta päivämäärä joka muutetaan isomuotoon.
    let toDay = GetToday()
    setSelectedDay(toDay)
    //Haetaan API
    //console.log(lati, long, area)
    fetchData(lati, long, area);
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
        <MapView />
        {/* Range:{range}km
        <Slider /> */}
        <Loading loading={loading} loaded={loaded} />
        {/* <Show events={events} event={event} /> */}
      </div>
    )

  }
}
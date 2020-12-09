import React, { useEffect, useState } from 'react'
import { Col } from "react-bootstrap"
import { useDispatch, useSelector, useStore } from 'react-redux'
import { setUserLocation } from '../GlobalStore/LocationActions'
import GetToday from '../LogicalFunctions/GetToday'
import RunEventFilters from '../LogicalFunctions/RunEventFilters'
import Fetch from '../Services/FetchEventsNearUser'
import GetAllEvents from '../Services/GetAllEvents'
import MapView from '../ViewComponents/MapView'

export default function ListView() {
  const store = useStore()
  const range = useSelector(state => state.range)
  const dispatch = useDispatch()

  const [events, setEvents] = React.useState('')
  const [selectedDay, setSelectedDay] = useState(store.getState().selectedDate)
  const [loading, setLoading] = React.useState('LOADING')
  const [loaded, setLoaded] = useState(false)
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [area, setArea] = useState(store.getState().range)


  // Sivun alkuu käytetään useEffectiä jossa ladataan lista kun sivu aukeaa
  useEffect(() => {
    //Haetaan koordinaatit
    if (navigator.geolocation) {
      // FIXME
      Coords();
    }
  },
    [])
  //[lon, lat, range])

  // Rangen muuttamine laukaisee filtteröinnin
  useEffect(() => {
    RunEventFilters()
  }, [range])

  useEffect(() => {
    // haetaan kaikki eventit storeen
    //FetchEventsNearUser()
    GetAllEvents()
  }, [])


  async function fetchData(lati, long, area) {
    let data = (Fetch(lati, long, area))
    // kutsutaan funktiota, joka hakee kaikki eventit
    setEvents((await data))
    setLoading(await '')
    setLoaded(await true)
    console.log(await events)
  }

  const Coords = async () => {

    let id, target, options;

    async function success(pos) {
      let crd = await pos.coords;
      if (target.latitude !== crd.latitude && target.longitude !== crd.longitude) {
        setLat(crd.latitude)
        setLon(crd.longitude)
        dispatch(setUserLocation(await crd.latitude, crd.longitude))
        afterLocation()
        navigator.geolocation.clearWatch(id);
      }
    }

    function error(err) {
      setLat(60.1733244)
      setLon(24.9410248)
      dispatch(setUserLocation(60.1733244, 24.9410248))
      afterLocation()
      navigator.geolocation.clearWatch(id);
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
  }
  async function afterLocation() {

    let lati = await store.getState().userLocation.latitude
    let long = await store.getState().userLocation.longitude

    if (lati === undefined && long === undefined) {
      lati = lat
      long = lon
    }

    //Haetaan funktion kautta päivämäärä joka muutetaan isomuotoon.
    let toDay = GetToday()
    setSelectedDay(toDay)
    //Haetaan API
    if (lati === undefined && long === undefined) {
      lati = 20.1733244
      long = 24.9410248
    }
    fetchData(await lati, long, area);

  }

  // Niin kauan kuin loading state on 'LOADING' niin näytetään pelkästään lataus 'merkkiä'
  // API Rest on ladattu kokonaan ja näytetään koko lista.
  return (
    <Col className="map-col">
      {loading === '' ? (<MapView />) : 
      (<div class="text-center">
        <div class="spinner-border m-5 spinner-border-lg text-info" role="status">
        <span class="sr-only">Loading...</span>
        </div>
        </div>)}
      </Col>
  )


}
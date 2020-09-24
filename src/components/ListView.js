import React, { useEffect, useState } from 'react'
import GetToday from './GetToday'
import Loading from './Loading'
import Show from './Show'
import ShowTagOptions from './ShowTagOptions'
import MapView from './MapView'
import Slider from './Slider'
import axios from 'axios'


export default function ListView() {

  const [events, setEvents] = React.useState('')
  const [selectedDay, setSelectedDay] = React.useState(0)
  const [event, setEvent] = React.useState(0)
  const [loading, setLoading] = React.useState('LOADING')
  const [loaded, setLoaded] = useState(false)
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [area, setArea] = useState(1)

  let letEvent;

  // Sivun alkuu käytetään useEffectiä jossa ladataan lista kun sivu aukeaa
  useEffect(() => {
    //Haetaan koordinaatit
    Coords();
  }, [lon, lat])


  async function fetchData(lati, long, area) {
    
    if (lati !== undefined && long !== undefined) {
      // let data = await fetch('v1/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area, {
      await axios.get('/v1/events/?distance_filter=' + lati + '%2C' + long + '%2C' + area)
        .then(res => {
          //console.log(res.data.data)  
          setEvents(res.data.data)
        })
        .catch((error) => {
          console.error('Error:', error)
        })
      setLoading('')
      setLoaded(true)
    }
  }

  const Coords = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
    });
    let lati = lat
    let long = lon
    //Haetaan funktion kautta päivämäärä joka muutetaan isomuotoon.
    let toDay = GetToday()
    setSelectedDay(toDay)
    //Haetaan API
    fetchData(lati, long, area);
  }

  const ChangeDay = (event) => {
    setSelectedDay(event.target.value)
  }

  const SeekName = (event) => {
    letEvent = event.target.value
    // Mikäli hakukentässä on enemmän kuin kolme(3) merkkiä niin sitten aletaan etsimään vastaavia sanoja
    // Muuten käy niin että hakuaika on liiiian pitkä.
    if (letEvent.length > 2) {
      setEvent(letEvent)
    }
    if (letEvent.length < 1) {
      setEvent(0)
    }
  }

  const HandleSlider = (event) => {
    setArea(event)
    fetchData(lat, lon, event)
    setLoading('LOADING')
    //console.log(event)
  }

  const ShowAll = () => {
    //Nollataan kaikki filtterit ja lista alkaa taas
    setSelectedDay(0)
    setEvent(0)
    document.getElementById("name").value = ""
    document.getElementById("Paiva").value = ""
    setArea(1)
    let areaa = 1
    fetchData(lat, lon, areaa)
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
        <p>name: <input id="name" placeholder="event" onChange={SeekName} />
          <input type="date" id="Paiva" value={selectedDay} onChange={ChangeDay} />
          <br></br>
        Longitude: {lat}
          <br></br>
        Latitude: {lon}
        </p>
        <p><button onClick={ShowAll}>Show all</button></p>
        <MapView latitude={lat} longitude={lon} ></MapView>
        <Slider HandleSlider={HandleSlider} area={area} />
        <ShowTagOptions events={events} />
        area:{area}km
        <Loading loading={loading} loaded={loaded} />
        <Show events={events} event={event} selectedDay={selectedDay} />
      </div>
    )

  }
}
import React, { useEffect, useState } from 'react'
import './App.css'
import moment from 'moment'
import Show from './components/Show'
import Loading from './components/Loading'

function App() {

  const [events, setEvents] = React.useState('')
  const [selectedDay, setSelectedDay] = React.useState(0)
  const [event, setEvent] = React.useState(0)
  const [longitude, setLongitude] = React.useState(0)
  const [latitude, setLatitude] = React.useState(0)
  const [loading, setLoading] = React.useState('LOADING')

  let letEvent;

  // Sivun alkuu käytetään useEffectiä jossa ladataan lista kun sivu aukeaa
  useEffect(() => {
    fetchData()    
  }, [])

  async function fetchData() {
    let data = await fetch('https://cors-anywhere.herokuapp.com/http://open-api.myhelsinki.fi/v1/events/?limit=100', {

      method: 'GET',
      headers: {
        "accept": "application/json"
      }
    })
      .then(res => {
        return res.json();
      })

    setEvents(data.data);
    console.log(data.data)
    setLoading('')
    
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

  const getMyPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition)
    }
  }

  const getPosition = (position) =>  {
    console.log('latitude is: ', position.coords.latitude)
    console.log('longitude is: ', position.coords.longitude)
    setLongitude(position.coords.longitude)
    setLatitude(position.coords.latitude)
  }

  const handleLongitudeChange = (event) => {
    console.log(event.target.value)
    setLongitude(event.target.value)
  }

  const handleLatitudeChange = (event) => {
    console.log(event.target.value)
    setLatitude(event.target.value)
  }

  const ShowAll = () => {
    //Nollataan kaikki filtterit ja lista alkaa taas
    setSelectedDay(0)
    setEvent(0)
    document.getElementById("name").value = ""
    document.getElementById("Paiva").value = ""
    setLongitude(0)
    setLatitude(0)
  }

  // Niin kauan kuin loading state on 'LOADING' niin näytetään pelkästään lataus 'merkkiä'
  if (loading === 'LOADING') {
    return (
      <div className="App">
        <h1> </h1>
        <Loading loading={loading} />
      </div>
    )
  } else {
    // API Rest on ladattu kokonaan ja näytetään koko lista.
    return (
      <div className="App">
        <h1> </h1>
        <p>name: <input id="name" placeholder="event" onChange={SeekName} />
          <input type="date" id="Paiva" onChange={ChangeDay} />
        Longitude: <input type="text" id="Longitude" onChange={handleLongitudeChange} value={longitude} />
        Latitude: <input type="text" id="Latitude" onChange={handleLatitudeChange} value={latitude}  />
        </p>
        <p><button onClick={ShowAll}>Show all</button></p>
        <p><button onClick={getMyPosition}> Get my location</button></p>
        <Show events={events} event={event} selectedDay={selectedDay} longitude={longitude} latitude={latitude} />
      </div>
    )


  }
}

export default App
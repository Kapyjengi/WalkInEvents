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
  const [lat, setLat] = useState()
  const [lon, setLon] = useState()
  const [area, setArea] = useState(1)
  const [times, setTimes] = useState(0);

  let letEvent;

  // Sivun alkuu käytetään useEffectiä jossa ladataan lista kun sivu aukeaa
  useEffect(() => {
    if (times < 5) {
      Coords();
      setTimes(times + 1)
      }   
  }, [times])

  async function fetchData(lati,long,area) {
    let url =""
    if (lati == undefined || long == undefined) {
      url = 'http://open-api.myhelsinki.fi/v1/events/'
    }
    if (lati !== undefined && long  !== undefined){
      url = 'http://open-api.myhelsinki.fi/v1/events/?distance_filter='+lati+'%2C'+long+'%2C'+area
    }

    let data = await fetch(url, {

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

   const Coords = () => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude)
      setLon(position.coords.longitude)
      });
      let lati = lat
      let long = lon
      fetchData(lati,long,area);
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

  
  const AddArea = () =>{
    setArea(area+1)
    let aarea = area + 1
    fetchData(lat,lon,aarea);
  }

  const SubArea = () =>{
    if (area > 1){
    setArea(area-1)
    let aarea = area - 1
    fetchData(lat,lon,aarea);
    } else {
      setArea(1)
      let aarea = area
      fetchData(lat,lon,aarea);
    }
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
        <p><button onClick={AddArea}>+1km</button><button onClick={SubArea}>-1km</button></p>
        <Show events={events} event={event} selectedDay={selectedDay} longitude={longitude} latitude={latitude} />
      </div>
    )


  }
}

export default App
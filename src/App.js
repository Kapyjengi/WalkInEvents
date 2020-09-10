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
          async function fetchData() {
            var data = await fetch('https://cors-anywhere.herokuapp.com/http://open-api.myhelsinki.fi/v1/events/?limit=50', {
              
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
          fetchData();
        }, []);

  async function fetchData() {
    let data = await fetch('http://open-api.myhelsinki.fi/v1/events/', {
      method: 'GET',              
      headers: {
        "accept": "application/json", "Origin": "*"
      }
    })
    .then(res => {
    
      return res.json();
    })

    setEvents(data.data);
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

  const ChangeLongitude = (event) => {
    setLongitude(event.target.value)
    //console.log(longitude)
  }

  const ChangeLatitude = (event) => {
    setLatitude(event.target.value)
    //console.log(latitude)
  }

  const ShowAll = () => {
    //Nollataan kaikki filtterit ja lista alkaa taas
    setSelectedDay(0)
    setEvent(0)
    document.getElementById("name").value="";
    document.getElementById("Paiva").value="";
  }

  // Niin kauan kuin loading state on 'LOADING' niin näytetään pelkästään inputteja sekä lataus 'merkkiä'
  if (loading==='LOADING'){
  return (
    <div className="App">
      <h1> </h1>
      <p>name: <input id="name" placeholder="event" onChange={SeekName} />
      <input type="date" id="Paiva" onChange={ChangeDay} />
      Longitude: <input type="text" id="Longitude" onChange={ChangeLongitude} />
      Latitude: <input type="text" id="Latitude" onChange={ChangeLatitude} />
      </p>
      <p><button onClick={ShowAll}>Näytä kaikki</button></p>
      <Loading loading={loading}/>
    </div>
  )
  } else {
    // API Rest on ladattu kokonaan ja näytetään koko lista.
    return (
      <div className="App">
        <h1> </h1>
        <p>name: <input id="name" placeholder="event" onChange={SeekName} />
        <input type="date" id="Paiva" onChange={ChangeDay} />
        Longitude: <input type="text" id="Longitude" onChange={ChangeLongitude} />
        Latitude: <input type="text" id="Latitude" onChange={ChangeLatitude} />
        </p>
        <p><button onClick={ShowAll}>Näytä kaikki</button></p>
        <Show events={events} event={event} selectedDay={selectedDay} longitude={longitude} latitude={latitude} />
      </div>
    )

    
  }
}

export default App;

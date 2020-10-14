import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
const baseUrl = '/api/events'
//const query = '?distance_filter=60.1%2C24.9%2C8'
let query;
function App() {
  console.log('build 0.1.6')
  const [events, setEvents] = useState([]) 
  const [latlng, setLatLng] = useState({lat:'',lon:''})
  const [area, setArea] = useState(3)

  useEffect(() => {
   Coords();
  }, [])
 
  async function Coords() {
      navigator.geolocation.getCurrentPosition(function (position) {
      setLatLng({lat:position.coords.latitude, lon:position.coords.longitude})
      let lat = position.coords.latitude
      let lon = position.coords.longitude
      fetchData(lat, lon, area);
    });
    }

  async function fetchData(lati, long, area) {
  //const query = '?distance_filter=60.1%2C24.9%2C8'

  query = '?distance_filter='+lati +'%2C'+long+'%2C'+area
  //  axios
   //   .get(baseUrl.concat(query))
   await fetch(baseUrl.concat(query))
   .then(response => response.json())
   .then(data => setEvents(data))
   .catch(error => console.error(error)); 
} 
  
  const ShowEvents = () => {
    if (events.length > 0) {
      let parsedEvents = JSON.parse(events)
      return(
        <ul>
          {parsedEvents.data.map(event => (
            <li className="event" key={event.id}>{event.id} - {event.name.fi}</li>
          ))}
        </ul>
      )
    } else {
      return(
        <p>Loading...</p>
      )
    }
  }

  const ShowQuery = (props) => {
    return (
      <p><strong>Query!: {props.query}</strong></p>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        AREA: {area} km
        
        <ShowQuery query={query} />  
        <ShowEvents />
      </header>
    </div>
  );

}

export default App;

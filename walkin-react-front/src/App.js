import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
const baseUrl = '/api/events'
const query = '?distance_filter=60.1%2C24.9%2C8'

function App() {
  console.log('build 0.1.5')
  const [events, setEvents] = useState([]) 

  useEffect(() => {
    axios
      .get(baseUrl.concat(query))
      .then(response => {
        console.log('events: ', response.data)
        setEvents(response.data)
      })
  }, [])

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
        <ShowQuery query={query} />  
        <ShowEvents />
      </header>
    </div>
  );
}

export default App;

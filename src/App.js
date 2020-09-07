import React, { useEffect } from 'react';
import './App.css';
import moment from 'moment';
import Show from './components/Show';



function App() {

  const [events, setEvents] = React.useState('');
  const [selectedDay, setSelectedDay] = React.useState(0);
  const [event, setEvent] = React.useState(0);

  const [loading, setLoading] = React.useState('LOADING')
 
  
        useEffect(() => {
          async function fetchData() {
            var data = await fetch('http://open-api.myhelsinki.fi/v1/events/', {
              method: 'GET',
              headers: {
                "accept": "application/json", "origin": "*"
              }
            }).then(res => {
              return res.json();
            });
            setEvents(data.data);
            setLoading('')
          }
          fetchData();
        }, []);

          
      

 
  const ChangeDay = (event) => {
    setSelectedDay(event.target.value)

  }

  const SeekName = (event) => {
    letEvent = event.target.value
    if (letEvent.length > 2) {
      setEvent(letEvent)
    }
    if (letEvent.length < 1) {
      setEvent(0)
    }
  }




  const ShowAll = () => {
    setSelectedDay(0)
    setEvent(0)
    document.getElementById("name").value="";
    document.getElementById("Paiva").value="";
  }


  let letEvent;


  if (loading==='LOADING'){
  return (
    <div className="App">
      <h1> </h1>
      <p>name: <input id="name" placeholder="event" onChange={SeekName} /><input type="date" id="Paiva" onChange={ChangeDay}></input></p>
      <p><button onClick={ShowAll}>Näytä kaikki</button></p>
      {loading}
    </div>
  )
  } else {
    return (
      <div className="App">
        <h1> </h1>
        <p>name: <input id="name" placeholder="event" onChange={SeekName} /><input type="date" id="Paiva" onChange={ChangeDay}></input></p>
        <p><button onClick={ShowAll}>Näytä kaikki</button></p>
        <Show events={events} event={event} selectedDay={selectedDay}/>
      </div>
    )

    
  }
}

export default App;

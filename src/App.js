import React, { useEffect } from 'react';
import './App.css';
import moment from 'moment';


function App() {

  const [lista2, setLista2] = React.useState('');
  const [paiva, setPaiva] = React.useState(0);

  let lista = [];

  useEffect(() => {
    Hae()
  }, [])

  function Hae(){


    fetch('http://open-api.myhelsinki.fi/v1/events/', {
      method: 'GET',
      headers: {
        "accept": "application/json"        
      }
  })
    .then(response => response.json())
    .then(data => setLista2(data.data))
    }

  const MuutaPaiva = (event) => {
    setPaiva(event.target.value)
  }

  let eventit = 0;

  if (lista2 !== '') {
    eventit = lista2.map((lista, i) => {

      if (paiva === 0) {
        let nimi = lista.name.fi;
        let lopetus = lista.event_dates.ending_day;
        let lon = lista.location.lon;
        let lat = lista.location.lat;


        if (nimi === null) {
          nimi = lista.name.en
        }
        if (nimi === null) {
          nimi = lista.name.sv
        }

        if (lopetus === null) {
          lopetus = lista.event_dates.starting_day;
        }

        return (
          <tr key={i} >
            <td>{i}</td>
            <td></td>
            {/* <td>nimi: {lista.name.fi}</td> */}
            <td width={500}>{nimi}</td>
            <td>{lista.location.address.street_address} </td>
            <td>{lista.location.address.postal_code} </td>
            <td>{lista.location.address.locality} </td>
            <td>{moment(lista.event_dates.starting_day).format("DD.MM.YYYY HH:mm")}</td>
            <td> </td>
            <td>{moment(lopetus).format("DD.MM.YYYY HH:mm")} </td>
            <td> </td>
            <td>{lon.toFixed(3)}</td>
            <td>{lat.toFixed(3)}</td>

          </tr>

        )

      }
      if (moment(lista.event_dates.starting_day).format("DD.MM.YYYY") === moment(paiva).format("DD.MM.YYYY")) {

        let nimi = lista.name.fi;
        let lopetus = lista.event_dates.ending_day;
        let lon = lista.location.lon;
        let lat = lista.location.lat;


        if (nimi === null) {
          nimi = lista.name.en
        }
        if (nimi === null) {
          nimi = lista.name.sv
        }

        if (lopetus === null) {
          lopetus = lista.event_dates.starting_day;
        }

        return (
          <tr key={i} >
            <td>{i}</td>
            <td></td>
            {/* <td>nimi: {lista.name.fi}</td> */}
            <td width={500}>{nimi}</td>
            <td>{lista.location.address.street_address} </td>
            <td>{lista.location.address.postal_code} </td>
            <td>{lista.location.address.locality} </td>
            <td>{moment(lista.event_dates.starting_day).format("DD.MM.YYYY HH:mm")}</td>
            <td> </td>
            <td>{moment(lopetus).format("DD.MM.YYYY HH:mm")} </td>
            <td> </td>
            <td>{lon.toFixed(3)}</td>
            <td>{lat.toFixed(3)}</td>

          </tr>

        )
      }
    }
    )
  };

  const NaytaKaikki = () => {
    setPaiva(0)
  }




  return (
    <div className="App">
      <h1> </h1>
      <p><input type="date" name="Paiva" onChange={MuutaPaiva}></input></p>
      <p><button onClick={NaytaKaikki}>Näytä kaikki</button></p>
      <table>
        <th>index</th>
        <th></th>
        <th>nimi</th>
        <th>osoite</th>
        <th>postinumero</th>
        <th>kaupunki</th>
        <th>alkamisajankohta</th>
        <th></th>
        <th>lopetuskohta</th>
        <th></th>
        <th>longitude</th>
        <th>latitude</th>
        {eventit}
      </table>

    </div>
  );
}

export default App;

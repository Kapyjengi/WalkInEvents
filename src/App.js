import React, { useEffect } from 'react';
import './App.css';
import moment from 'moment';


function App() {

  const [lista, setLista] = React.useState('');
  const [paiva, setPaiva] = React.useState(0);
  const [tapahtuma, setTapahtuma] = React.useState(0);

  let tapahtuma2;

  useEffect(() => {
    Hae()
  }, [])

  function Hae(){
  
    fetch('http://open-api.myhelsinki.fi/v1/events/', {
      method: 'GET',
      headers: {
        "accept": "application/json","origin": "*"
      }
  })
    .then(response => response.json())
    .then(data => setLista(data.data))
    }

  const MuutaPaiva = (event) => {
    setPaiva(event.target.value)
    
  }

  const EtsiNimi = (event) => {
    tapahtuma2=event.target.value
    if (tapahtuma2.length > 2) {
    setTapahtuma(tapahtuma2)
    }
    if (tapahtuma2.length < 1) {
      setTapahtuma(0)
    }
    console.log(paiva)
  }

  let eventit = "";

  if (lista !== '') {
    eventit = lista.map((lista, i) => {

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

    
    
  

  /// Nimen mukaan
  if (tapahtuma !== 0 ) {
    
    eventit = lista.map((lista, i) => {

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
        
        if (nimi.includes(tapahtuma)===true){

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
        }})
        
};

// Päivämäärän sekä nimenmukaan
if (tapahtuma !== 0 && paiva !== 0) {

  
  eventit = lista.map((lista, i) => {

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
      
      if (nimi.includes(tapahtuma)===true){

      if(moment(lista.event_dates.starting_day).format("DD.MM.YYYY") === moment(paiva).format("DD.MM.YYYY")){

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
      }})
      
};

    


  const NaytaKaikki = () => {
    setPaiva(0)
    setTapahtuma(0)
  }




  return (
    <div className="App">
      <h1> </h1>
      <p>nimi: <input name="nimi" placeholder="tapahtuma" onChange={EtsiNimi}/><input type="date" name="Paiva" onChange={MuutaPaiva}></input></p>
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

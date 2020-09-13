import React from 'react'
import '../App.css'
import moment from 'moment'
import SearchByDate from './SearchByDate'
import SearchByEvent from './SearchByEvent'
import SearchByLocation from './SearchByLocation'
import SearchByTag from './SearchByTag'
export default function ShowAll(props) {

    
   let events = props.events
   let filted;

   //Jos päivämäärä on valittu ->
   if (props.selectedDay !==0){
        //mennään etsimään isosta listasta kaikki tietyn päivämäärän tapahtumat SearchByDate -funktion kautta
       filted=SearchByDate(props.events,props.selectedDay)
       // sortattu tiedosto laitetaan ison listan tilalle.
       events=filted
       // Mikäli päivän lisäksi on kirjoitettu hakukenttään jotain ->
       if (props.event !==0) {
         //mennään etsimään jo sortatusta tiedostosta kaikki hakukenttään sopivat tapahtumat SearchByEvent -funktion kautta
        events=(SearchByEvent(events,props.event))
       }
       //Mikäli päivän ja haku kentän lisäksi on laitettu etäisyyksiä niin ->
       if (props.longitude !==0 && props.latitude !==0) {
         //mennään etsimään jo kahteen kertaan sortatusta listasta hakemaan SearchByLocation -funktion kautta sopivat sijainnit
        events=(SearchByLocation(props.events, props.longitude, props.latitude))
       }
   }

   //Jos hakukenttä on valittu on valittu ->
   if (props.event !==0) {
      //mennään etsimään jo sortatusta tiedostosta kaikki hakukenttään sopivat tapahtumat SearchByEvent -funktion kautta
       filted=(SearchByEvent(props.events,props.event))
       // sortattu tiedosto laitetaan ison listan tilalle.
       events=filted
       //Jos hakukentän lisäksi on päivämäärä valittu ->
       if (props.selectedDay !==0){
      //mennään etsimään isosta listasta kaikki tietyn päivämäärän tapahtumat SearchByDate -funktion kautta
         events=(SearchByDate(events,props.selectedDay))
       }
       //Mikäli päivän ja haku kentän lisäksi on laitettu etäisyyksiä niin ->
       if (props.longitude !==0 && props.latitude !==0) {
        //mennään etsimään jo kahteen kertaan sortatusta listasta hakemaan SearchByLocation -funktion kautta sopivat sijainnit
        events=(SearchByLocation(props.events, props.longitude, props.latitude))
       }
   }

   //Jos etäisyyttä on ronkittu ->
   if (props.longitude !==0 && props.latitude !==0) {
    //mennään etsimään jo kahteen kertaan sortatusta listasta hakemaan SearchByLocation -funktion kautta sopivat sijainnit
    filted=(SearchByLocation(props.events, props.longitude, props.latitude))
    // sortattu tiedosto laitetaan ison listan tilalle.
    events=filted
    //Jos etäisyysmittarin lisäksi on päivämäärä valittu ->
    if (props.selectedDay !==0){
      //mennään etsimään isosta listasta kaikki tietyn päivämäärän tapahtumat SearchByDate -funktion kautta
      events=(SearchByDate(events,props.selectedDay))
    }
    // Mikäli päivän lisäksi on kirjoitettu hakukenttään jotain ->
    if (props.event !==0) {
     //mennään etsimään jo sortatusta tiedostosta kaikki hakukenttään sopivat tapahtumat SearchByEvent -funktion kautta
      events=(SearchByEvent(events,props.event))
     }
   }

   //Mikäli käyttäjä on nollannut hakukentän ja päivämääräkentän niin isolista laitetaan filteröidynlistan päälle
   //Tämä ei toistaiseksi vaikuta mitenkään latitude/longitude muokkauksiin :/
   if (props.event==='' && props.selectedDay===0) {
       events=props.event
   }
   
   // Tag filter
   //events = SearchByTag(events)

   // letEventsista tulee lista jota aiemmin mahdollisesti jo filteröitiin ja sortattiin
    let letEvents = "";
    letEvents = events.map((events, i) => {

      
        let name = events.name.fi;
        let endingday = events.event_dates.ending_day;
        let lon = events.location.lon;
        let lat = events.location.lat;


        if (name === null) {
          name = events.name.en
        }
        if (name === null) {
          name = events.name.sv
        }

        if (endingday === null) {
          endingday = events.event_dates.starting_day;
        }

        // Tässä määritellään mitä näytetään käyttäjälle
        return (
          <tr key={i} >
            <td>{i}</td>
            <td></td>
            <td width={500}>{name}</td>
            <td>{events.location.address.street_address} </td>
            <td>{events.location.address.postal_code} </td>
            <td>{events.location.address.locality} </td>
            <td>{moment(events.event_dates.starting_day).format("DD.MM.YYYY HH:mm")}</td>
            <td> </td>
            <td>{moment(endingday).format("DD.MM.YYYY HH:mm")} </td>
            <td> </td>
            <td>{lon.toFixed(6)}</td>
            <td>{lat.toFixed(6)}</td>
          </tr>
        )      

        })     
    
        return (
          <div className="App">
            <table>
            <thead>
              <tr>
              <th>index</th>
              <th></th>
              <th>name</th>
              <th>address</th>
              <th>zipcode</th>
              <th>city</th>
              <th>startingday</th>
              <th></th>
              <th>endingday</th>
              <th></th>
              <th>longitude</th>
              <th>latitude</th>
              </tr>
              </thead>
              <tbody>
              {letEvents}
              </tbody>
              
            </table>
      
          </div>
        );
}



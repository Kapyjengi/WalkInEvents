import moment from 'moment'
import Sort from './Sort'


export default function SearchByDate(events, selectedDay) {

  // Funktioon tuodaan kaikki eventit mitkä paketissa on, mikäli tämä on ainut/ensimmäinen filtteri, niin events on se iso lista
  // tuodaan päivämäärä jota haetaan
  
  let letEvents = "";
  //luodaan uusi taulukkomuuttuja
  let filtered = [];


  //käydään lista läpi ja tarkastellaan onko tapahtumalla ja toivotulla päivämäärällä samatieto.
  letEvents = events.map((events) => {

    //tässä olisi voitu olla käyttämättä momenttia, mutta käytin sen takia että pysyy ajatus kasassa... isostring sekoitti ajatusta
    if (moment(events.event_dates.starting_day).format("DD.MM.YYYY") === moment(selectedDay).format("DD.MM.YYYY")) {
      //kun päivämäärä täsmää niin lisätään uuteen taulukkoon tapahtuma
      filtered.push(events)
    }
  }
  )
  //filtteröidyt tapahtumat laitetaan vielä sorttausmyllyn läpi
  filtered = Sort(filtered)

  return filtered
}
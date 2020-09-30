import moment from 'moment'
import Sort from './Sort'

export default function SearchByDate(events, selectedDay) {

  // Funktioon tuodaan kaikki eventit mitkä paketissa on, mikäli tämä on ainut/ensimmäinen filtteri, niin events on se iso lista
  // tuodaan päivämäärä jota haetaan

  //luodaan uusi taulukkomuuttuja
  let filtered = [];
  if (selectedDay !== 0 && events !== undefined) {

    //käydään lista läpi ja tarkastellaan onko tapahtumalla ja toivotulla päivämäärällä samatieto.
    events.map((event) => {

      //tässä olisi voitu olla käyttämättä momenttia, mutta käytin sen takia että pysyy ajatus kasassa... isostring sekoitti ajatusta
      if (moment(event.event_dates.starting_day).format("DD.MM.YYYY") === moment(selectedDay).format("DD.MM.YYYY")) {

        let date = new Date();
        date.setDate(date.getDate() + 0);
        let isoDate = date.toISOString().substr(0, 10);

        //Mikäli etsitään eripäivän tapahtumia niin näytetään kaikki.
        if (isoDate === selectedDay) {

          let startTime = new Date(event.event_dates.starting_day)
          let endTime = new Date(event.event_dates.ending_day)
          let dateNow = new Date()
          let timeNow = dateNow.getTime()
          let diffStar = new Date()
          diffStar = startTime - timeNow
          diffStar = diffStar / 1000 / 60 / 60

          let diffEnd = new Date()
          diffEnd = endTime - timeNow
          diffEnd = diffEnd / 1000 / 60 / 60
          if (diffStar > 0 && diffStar < 3 || diffStar < 0 && diffEnd > 0) {
            filtered.push(event)
          }
        } else {
          filtered.push(event)
        }
      }
    }
    )
    //filtteröidyt tapahtumat laitetaan vielä sorttausmyllyn läpi
    filtered = Sort(filtered)
    return filtered
  }
  /// Mikäli päivämäärä on 0 niin funktio pomppaa suoraan tänne ja näyttää 
  //kaikki alueelta päivämäärästä riippumatta
  return events
}

import Sort from './Sort'

export default function SearchByEvent(events, event) {


  // Funktioon tuodaan kaikki eventit mitkä paketissa on, mikäli tämä on ainut/ensimmäinen filtteri, niin events on se iso lista
  // tuodaan myös event joka on haettu tapahtumanimi
  let letEvents = events;
  //luodaan uusi taulukkomuuttuja
  let filtered = [];
  if (event !== 0) {
    //käydään lista läpi ja tarkastellaan onko tapahtumalla suomalaista nimeä, jos ei niin tarkastetaan onko 
    //englantilaista nimeä ja siitä sitten ruotsin kielistä nimeä.
    letEvents = events.map((events, i) => {

      let name = events.name.fi;

      if (name === null) {
        name = events.name.en
      }

      if (name === null) {
        name = events.name.sv
      }

      //tapahtuman nimi sekä hakukentässä oleva teksti laitetaan pieneksi jolloin tarkastelu on paljon helpompaa
      name = name.toLowerCase();
      event = event.toLowerCase();
      //mikäli nimi sisältää hakusanan niin tapahtuma lisätään uuteen taulukkomuuttaajaan
      if (name.includes(event) === true) {
        filtered.push(events)
      }
    }
    )
    //filtteröidyt tapahtumat laitetaan vielä sorttausmyllyn läpi
    filtered = Sort(filtered)
    return filtered
  }
  /// Mikäli eventtitietoa ei olla rassattu niin funktio pomppaa tänne suoraan
  return letEvents
}
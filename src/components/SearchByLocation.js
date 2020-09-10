import Sort from './Sort'

export default function SearchByLocation(events, longitude, latitude) {

  // Funktioon tuodaan kaikki eventit mitkä paketissa on, mikäli tämä on ainut/ensimmäinen filtteri, niin events on se iso lista
  // tuodaan myös longitude / latitude tietoja joita lähdetään metsästämään.
  
  //luodaan uusia taulukkomuuttujia
  let filtered=[]
  let filtered2=[]

  events.map((events, i) => {

    // ensin käsitellään longitudea, kaikki mitkä on 0.01 + tai - tulee näkyviin... 
    let eventLongitude = events.location.lon

    if (eventLongitude >= longitude - 0.01 || eventLongitude <= longitude + 0.01) {
        filtered.push(events)
    }
  })

  // jo longituden filteröimä taulukko otetaan uusinta käsittelyyn ja otetaan tarkasteltavaksi latitude
  filtered.map((events, i) => {

    let eventLatitude = events.location.lat

    //kaikki mitkä on 0.01 + tai - tulee näkyviin...
    if (eventLatitude >= latitude - 0.01 || eventLatitude <= latitude + 0.01) {

        filtered2.push(events)
    }
  })

  //console.log(filtered2)
  //Kun longitude, anatude, latitude on jauhettu jiiriin ja mankeloidaan koko komeus vielä sorttiaseman kautta  
  filtered2=(Sort(filtered2))
  return filtered2
}


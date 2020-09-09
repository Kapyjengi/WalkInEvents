import Sort from './Sort'

export default function SearchByLocation(events, longitude, latitude) {

  let filtered=[]
  let filtered2=[]

  events.map((events, i) => {

    let eventLongitude = events.location.lon

    if (eventLongitude >= longitude - 0.01 || eventLongitude <= longitude + 0.01) {
        filtered.push(events)
    }
  })

  filtered.map((events, i) => {

    let eventLatitude = events.location.lat

    if (eventLatitude >= latitude - 0.01 || eventLatitude <= latitude + 0.01) {
        filtered2.push(events)
    }
  })

  console.log(filtered2)
  filtered2=(Sort(filtered2))
  return filtered2
}


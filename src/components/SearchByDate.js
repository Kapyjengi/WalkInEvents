import moment from 'moment'
import Sort from './Sort'


export default function SearchByDate(events, selectedDay) {

  let letEvents = "";
  let filtered=[];


  letEvents = events.map((events) => {

    if (moment(events.event_dates.starting_day).format("DD.MM.YYYY") === moment(selectedDay).format("DD.MM.YYYY")) {
      //console.log(events.event_dates.starting_day + "      " + selectedDay)
      filtered.push(events)
    }
  }
  )

  filtered = Sort(filtered)

  return filtered
}
import Sort from './Sort'

export default function SearchByEvent(events, event) {

  let letEvents = "";
  let filtered=[];


  letEvents = events.map((events, i) => {

    let name = events.name.fi;

    if (name === null) {
      name = events.name.en
    }

    if (name === null) {
      name = events.name.sv
    }

    name=name.toLowerCase();
    event=event.toLowerCase();
    if (name.includes(event) === true) {
      filtered.push(events)
    }
  }
  )
  
  filtered = Sort(filtered)

  return filtered
}


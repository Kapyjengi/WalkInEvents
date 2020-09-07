

import React from 'react';
import moment from 'moment';


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


    if (name.includes(event) === true) {
      filtered.push(events)
    }
  }
  )
  console.log(filtered)

  return filtered
}


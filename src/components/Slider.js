import React from 'react'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import RangeSlider from 'react-bootstrap-range-slider'

function Slider(props) {

  return (
    <RangeSlider
    min='1'
    max='20'
    size='lg'
    area={props.area}
    onChange={changeEvent => props.HandleSlider(changeEvent.target.value)}
  />
  )
}

export default Slider
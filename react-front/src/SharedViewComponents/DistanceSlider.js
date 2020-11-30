import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLocationRange } from '../GlobalStore/LocationActions'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css'
import RangeSlider from 'react-bootstrap-range-slider'

function Slider(props) {

  const range = useSelector(state => state.range)
  const dispatch = useDispatch()

  return (
    <div>
      <RangeSlider
        min='1'
        max='20'
        size='lg'
        tooltip='on'
        tooltipPlacement='top'
        value={range}
        tooltipLabel={range => `${range} km`}
        onChange={event => dispatch(setLocationRange(parseInt(event.target.value)))}
      />
    </div>
  )
}

export default Slider
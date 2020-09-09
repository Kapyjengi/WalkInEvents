import React from 'react'


export default function Loading(props) {

    const [point, setPoint] = React.useState('')
    const [times, setTimes] = React.useState(0)
    
    setTimeout(()=>{
        if (point==='...') {
            setPoint('.')
            setTimes(times+1)
        } else {
        setPoint(point+'.')
        setTimes(times+1)
        }

    },1000)

    if (times < 30) {
   return (
       <div>
           {props.loading}{point}
       </div>
   )
    } else {
        return (
            <div>
                Something isn't right :(
            </div>
        )
    }

  }
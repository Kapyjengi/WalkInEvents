import React from 'react'


export default function Loading(props) {

    const [point, setPoint] = React.useState('')
    const [times, setTimes] = React.useState(0)
    
    // Latauksen aikana Loading sanan perään tulee pisteitä sekunnin tahtiin. 
    setTimeout(()=>{
        if (point==='...') {
            setPoint('.')
            setTimes(times+1)
        } else {
        setPoint(point+'.')
        setTimes(times+1)
        }

    },1000)

    // Oletuksena on että mikäli 30 sekunttiin ei listaa ole tullut ruutuun niin meille heitetään jokin meni vikaan teksti.
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
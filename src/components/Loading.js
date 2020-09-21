import React from 'react'


export default function Loading(props) {

    //const [point, setPoint] = React.useState('')
    const [times, setTimes] = React.useState(0)
//    const [point, setPoint] = React.useState('')
    // Latauksen aikana Loading sanan perään tulee pisteitä sekunnin tahtiin. 
    let load=props.loading;
    
    //Mikäli tämä on ensimmäinen lataus niin lähtee pisteet rullailemaan.
    if (load==='LOADING' && !props.loaded) {
    setTimeout(()=>{    
            setTimes(times+1)
        }     
    ,1000)
}
    
    // Oletuksena on että mikäli 30 sekunttiin ei listaa ole tullut ruutuun niin meille heitetään 
    // 'jokin meni vikaan' teksti.
    if (times < 30) {
   return (
       <div>
           {load}
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
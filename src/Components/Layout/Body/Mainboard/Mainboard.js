import React, { useContext } from 'react'

import { Context } from '../../../HOCs/Context/Context'
import Playboard from './Playboard/Playboard'
import PopUpOverlay from '../../../HOCs/PopUpOverlay/PopUpOverlay'

import classes from './Mainboard.module.css'



const Mainboard = () => {

    const [state] = useContext(Context)

    const getLast = state.display.length > 0 ? state.display[state.display.length - 1] : 'no'
    
    if (state.health === 0 && state.popUpDisplay === true) {
        //setPopUp(true)
        return <div className = { classes.Mainboard }>
                    <PopUpOverlay />
                </div>
    } if ( state.shovel === 0 && state.money < 6 ){
        //setPopUp(true)
        return <div className = { classes.Mainboard }>
                    <PopUpOverlay />
                </div>
    } if ( getLast.name === 'coin' && state.popUpDisplay === true){
       // setPopUp(true)
        return <div className = { classes.Mainboard }>
                    <PopUpOverlay />
                </div>
    } if ( getLast.name === 'gold' && state.popUpDisplay === true){
       // setPopUp(true)
        return <div className = { classes.Mainboard } >
                    <PopUpOverlay />
                </div>
    } if ( getLast.name === 'rock' && state.popUpDisplay === true){
        // setPopUp(true)
         return <div className = { classes.Mainboard } >
                     <PopUpOverlay />
                 </div>
     } if ( getLast.name === 'scorpion' && state.popUpDisplay === true){
        // setPopUp(true)
         return <div className = { classes.Mainboard } >
                     <PopUpOverlay />
                 </div>
     } if (state.popUpDisplay === false){
        return <div className = { classes.Mainboard }>
                    <Playboard />
                </div>
    } 

}






export default Mainboard


// dispatch(state.display.pop(), state.display = [...state.display])
//         console.log(state.display)
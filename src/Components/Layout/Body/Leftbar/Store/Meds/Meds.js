import React, { useContext } from 'react'

import { Context } from '../../../../../HOCs/Context/Context'

import classes from './Meds.module.css'

const Meds = () => {

const [state, dispatch] = useContext( Context )

    const buttonOn = <div className = { classes.Icon } onClick = {() => {dispatch({type: 'NewLife'})} }>
                        <img alt = 'Meds' src = {require('../../../../../HOCs/images/Store/Meds.png')} />
                        <div className = { classes.InfoOn }>$4</div>  
                    </div>      
                    
    
    const buttonOff = <div className = { classes.Icon }>
                        <img alt = 'Meds' className = { classes.Meds } src = {require('../../../../../HOCs/images/Store/MedsNo.png')} />
                        <div className = { classes.InfoOff }>$4</div>
                    </div>

    const currentButton = state.money >= 4 && state.health === 1 ? buttonOn : buttonOff
    
    return (
        <div className = { classes.MedsContainer }>
            {currentButton}
        </div>
    )
}

export default Meds

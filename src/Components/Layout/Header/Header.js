import React, { useContext } from 'react'

import { Context } from '../../HOCs/Context/Context'

import classes from './Header.module.css'

const Header = ( props ) => {

    const [state] = useContext(Context)


    const buttonOn = <img onClick = { props.clicked } alt = 'Info' src = {require('../../HOCs/images/PopImages/InfoOn.png')}/>
    const buttonOff = <img onClick = { props.clicked } alt = 'Info' src = {require('../../HOCs/images/PopImages/InfoOff.png')}/>

    return (
        <div className = { classes.Header }>
            <div className = { classes.Title }>Treasure of the<br/>Sergio Monco</div>
            <div className = { classes.Options } >
                {state.info ? buttonOn : buttonOff} 
            </div>
            
        </div>
    )
}

export default Header

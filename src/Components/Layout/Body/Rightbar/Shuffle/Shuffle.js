import React, { useContext } from 'react'

import { Context } from '../../../../HOCs/Context/Context'

import classes from './Shuffle.module.css'

const Shuffle = ( props ) => {

    const [state, dispatch] = useContext(Context)
    
    const myShuffleHandler = () => {
        dispatch({type: 'removePopUp'})
        dispatch({type: 'New'})
        dispatch({type: 'setItems'})
        dispatch({type: 'UpClick'})
        dispatch({type: 'setUpBoard'})
    }

    const buttonOn = <button type = 'button' className = 'nes-btn' onClick = { myShuffleHandler }>Explore!</button>
    const buttonOff = <button type = 'button' className = 'nes-btn is-disabled' >Explore!</button>
    
    return (

        <div className = { classes.Shuffle } >
            <div className = { classes.Title} >New Dig Site?</div>
            <div className = { classes.Button }>
             {state.display.length === 0 || state.popUpDisplay === true ? buttonOff : buttonOn}
            </div>
        </div>
    )
}

export default Shuffle

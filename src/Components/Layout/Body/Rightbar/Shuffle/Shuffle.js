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

    const buttonOn = <button type = 'button' className = 'nes-btn' onClick = { myShuffleHandler }>New Map</button>
    const buttonOff = <button type = 'button' className = 'nes-btn is-disabled' >New Map</button>
    
    return (

        <div className = { classes.Shuffle } >
            {/* <div className = { classes.Title} >New Dig Site?</div> */}
            <span className = { classes.Button }>
             {state.display.length === 0 || state.popUpDisplay === true ? buttonOff : buttonOn}
            </span>
        </div>
    )
}

export default Shuffle

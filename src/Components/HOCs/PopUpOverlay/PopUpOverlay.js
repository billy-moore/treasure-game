import React, { useContext } from 'react'

import { Context } from '../Context/Context'
import classes from './PopUpOverlay.module.css'

const PopUpOverlay = ( props ) => {

const [state, dispatch] = useContext(Context)

const NewGameHandler = ( props ) => {
    dispatch({type: 'Reset'})
    dispatch({type: 'New'})
    dispatch({type: 'setItems'})
}

const getLast = state.display.length > 0 ? state.display[state.display.length - 1] : 'no'

const goBack = () => {
    dispatch({type: 'removePopUp'})
}

const youDied = () => {
    dispatch({type: 'iDied'})
    console.log(state.dead)
}

    if (state.dead) {
        // dispatch(state.popUpDisplay = true)
        return <div className = {classes.Popup}>
                <div className = { classes.Dead }>
                    <img src = {require('../images/PopImages/Tombstone.png')} alt = 'You Died'/>
                    <button className = {'nes-btn'} onClick = {NewGameHandler}>New Game?</button>
                </div>
            </div>
    } else 
    if ( state.shovel === 0 && state.money < 6 ) {
        //dispatch(state.popUpDisplay = true)
        return <div className = { classes.Popup }>
                <div className = { classes.Broke }>
                    <h2>You broke...</h2>
                    <img alt = 'Broke...' src = {require('../images/PopImages/Broke.png')}/>
                    <button className = {'nes-btn'} onClick = {NewGameHandler}>New Game?</button>
                </div>
            </div>
    } else if ( getLast.name === 'coin' ) {
        //dispatch(state.popUpDisplay = true)
        return <div className = { classes.Popup }>
                <div className = { classes.Coins }>
                    <img alt = 'Found coins!' src = {require('../images/PopImages/CoinGroup.png')}/>
                    <h2>You found some coins!</h2>
                    <button className = {'nes-btn'} onClick = { goBack }>Money +3</button>
                </div>
            </div>
    }  else if ( getLast.name === 'gold' ) {
        //dispatch(state.popUpDisplay = true)
        return <div className = { classes.Popup }>
                <div className = { classes.Gold }>
                    <img alt = 'Found gold!' src = {require('../images/PopImages/GoldCoin.png')}/>
                    <h2>You found a Gold coin!</h2>
                    <button className = {'nes-btn'} onClick = { goBack }>Money +5</button>
                </div>
            </div>
    } else if ( getLast.name === 'scorpion' && state.health > 0) {
        //dispatch(state.popUpDisplay = true)
        return <div className = { classes.Popup }>
                <div className = { classes.Scorpion }>
                    <img alt = 'Ouch!' src = {require('../images/Diggable/Scorpion.png')}/>
                    <h2>Stepped on a Scorpion!</h2>
                    <button className = {'nes-btn'} onClick = { goBack } >Health -1</button>
                </div>
            </div>
    } else if ( getLast.name === 'scorpion' && state.health <= 0) {
        //dispatch(state.popUpDisplay = true)
        return <div className = { classes.Popup }>
                <div className = { classes.Scorpion }>
                    <img alt = 'Ouch!' src = {require('../images/Diggable/Scorpion.png')}/>
                    <h2>Stepped on a Scorpion!</h2>
                    <button className = {'nes-btn'} onClick = { youDied } >Health -1</button>
                </div>
            </div>
    } else if ( getLast.name === 'rock' ) {
        //dispatch(state.popUpDisplay = true)
        return <div className = { classes.Popup }>
                <div className = { classes.Rock }>
                    <img alt = 'Found gold!' src = {require('../images/Diggable/Rock.png')}/>
                    <h2>Chunk!<br/>You hit a rock!</h2>
                    <button className = {'nes-btn'} onClick = { goBack } >Shovel -2</button>
                </div>
            </div>
    } else {
        return null
    }

}

export default PopUpOverlay

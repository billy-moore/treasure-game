import React, { useContext } from 'react'

import { Context } from '../../../../HOCs/Context/Context'

import Tile from './Tile/Tile'

import classes from './Playboard.module.css'


const Playboard = () => {

    const [state, dispatch] = useContext(Context)

    const holeImage = <img alt = 'tile' className = {classes.Landscape} src = {require('../../../../HOCs/images/DesertLandscape/LandscapeX.png')}/>

    //const randomize = (x) => {return x[Math.floor(Math.random() * x.length)]}

    const takeNames = (item, i) => {

        if(item.name === 'coin' || item.name === 'gold'){

            dispatch({type: 'clickedCoin', value: item.value})
            dispatch(state.display = [...state.display, i, {...item}])
            dispatch(state.popUpDisplay = true)
            console.log(state.shovel)
        } else if (item.name === 'rock'){

            dispatch({type: 'minusRock'})
            dispatch(state.shovel = state.shovel + item.value)
            dispatch(state.display = [...state.display, i, {...item}])
            dispatch(state.popUpDisplay = true)
            console.log(state.shovel)
        } else if ( item.name === 'scorpion'){

            dispatch({type: 'minusScorpion'})
            dispatch(state.health = state.health + item.value)
            dispatch(state.display = [...state.display, i, {...item}])
            dispatch(state.popUpDisplay = true)
            console.log(state.shovel)
        } else if (item.name === 'empty') {

            dispatch({type: 'emptyHanded'})
            dispatch(state.shovel = state.shovel - 1)
            dispatch(state.display = [...state.display, i, {...item}])
            console.log(state.shovel)
        } else if (state.shovel === 0 && state.money < 6) {

            dispatch(state.popUpDisplay = true)
            console.log(state.shovel)
        }
    }

    const myShuffleHandler = () => {
        dispatch({type: 'removePopUp'})
        dispatch({type: 'New'})
        dispatch({type: 'setItems'})
        dispatch({type: 'UpClick'})
        dispatch({type: 'setUpBoard'})
    }

    const currentBoard = state.new.map((item, i) => {
        return state.display.includes(i) ? 
                <Tile key = {item + i}>
                    {holeImage}
                </Tile> : (state.shovel <= 0) ? <Tile key = {item + i}>
                    <img alt = 'tile' className = {classes.Landscape} src = {require(`../../../../HOCs/images/DesertLandscape/Landscape${state.bgImage[i]}.png`)}/>
                </Tile> :
                <Tile key = {item + i} clicked = {() => {takeNames(item, i)}}>
                    <img alt = 'tile' className = {classes.Landscape} src = {require(`../../../../HOCs/images/DesertLandscape/Landscape${state.bgImage[i]}.png`)}/>
                </Tile>
            
    })

    return (
        <div className = { classes.Playboard }>
        { state.new.length > 9 ? <button className = {'nes-btn ' + classes.newBtn} onClick = { myShuffleHandler }>Start Game</button> : currentBoard }
        </div>
    )
}

export default Playboard

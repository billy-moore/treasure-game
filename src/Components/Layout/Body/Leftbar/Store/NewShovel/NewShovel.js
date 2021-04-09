import React, { useContext } from 'react'

import { Context } from '../../../../../HOCs/Context/Context'

import classes from './NewShovel.module.css'


const NewShovel = () => {

const [state, dispatch] = useContext(Context)

    const buttonOn =  <div className = { classes.Icon } onClick = {() => {dispatch({type: 'NewShovel'})}}>
                            <img src = {require('../../../../../HOCs/images/Store/NewShovel.png')} alt = 'New Shovel'/>
                            <div className = { classes.InfoOn }>$6</div>
                        </div>

    const buttonOff = <div className = { classes.Icon }>
                            <img src = {require('../../../../../HOCs/images/Store/NewShovelNo.png')} alt = 'No New Shovel' />
                            <div className = { classes.InfoOff}>$6</div>
                        </div>

    const currentShovel = state.shovel < 8 && state.money >= 6 ? buttonOn : buttonOff

    return (
        
        <div className = { classes.ShovelContainer }>
            { currentShovel }
        </div>
    )
}

export default NewShovel

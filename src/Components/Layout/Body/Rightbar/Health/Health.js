import React, { useContext } from 'react'

import { Context } from '../../../../HOCs/Context/Context'

import Hearts from './Hearts/Hearts'
import classes from './Health.module.css'

const Health = () => {
    
    const [state] = useContext(Context)

    const fullHealth = <Hearts 
                            container = { classes.HealthContainer } 
                            class = { classes.HealthBar}>
                                <img alt='Full-Life' 
                                    className = { classes.Heart} 
                                    src = {require('../../../../HOCs/images/Health/Heart.png')}  />
                                <img alt='Full-Life' 
                                    className = { classes.Heart} 
                                    src = {require('../../../../HOCs/images/Health/Heart.png')}  />
                        </Hearts>

    const halfHealth = <Hearts 
                            container = { classes.HealthContainer } 
                            class = { classes.HealthBar}>
                                <img alt='Half-Life' 
                                    className = { classes.Heart} 
                                    src = {require('../../../../HOCs/images/Health/Heart.png')}  />
                                <img alt = 'Half-Life' 
                                    className = { classes.Heart} 
                                    src={require('../../../../HOCs/images/Health/Heart-Empty.png')} />
                        </Hearts>

    const noHealth = <Hearts 
                            container = { classes.HealthContainer } 
                            class = { classes.HealthBar}>
                                <img alt='Half-Life' 
                                    className = { classes.Heart} 
                                    src = {require('../../../../HOCs/images/Health/Heart-Empty.png')}  />
                                <img alt = 'Half-Life' 
                                    className = { classes.Heart} 
                                    src = {require('../../../../HOCs/images/Health/Heart-Empty.png')} />
                        </Hearts>

    const youDied = <Hearts 
                        container = { classes.HealthContainer } 
                        class = { classes.HealthAlt }>
                            <h2>You Died</h2>
                    </Hearts>

    
    if (state.dead === true) {
        return youDied
    } else if ( state.health > 1) {
        return fullHealth
    } else if ( state.health === 1) {
        return halfHealth
    } else if (state.health === 0) {
        return noHealth
    } 
    // return state.health > 1 ? fullHealth : 
    //         (state.dead) ? youDied : halfHealth
                        
}

export default Health
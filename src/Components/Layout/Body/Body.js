import React from 'react'

import Mainboard from './Mainboard/Mainboard'
import classes from './Body.module.css'

import Points from './Leftbar/Points/Points'
import Shovel from './Leftbar/Shovel/Shovel'
import Store from './Leftbar/Store/Store'
import Diggable from './Rightbar/Diggable/Diggable'
import Health from './Rightbar/Health/Health'
import Shuffle from './Rightbar/Shuffle/Shuffle'


const Body = () => {
    return (
        <div className = {classes.Body}>
                <Mainboard /> 
                <Points />               
                <Shovel />
                <Store />
                <Diggable />
                <Health />
                <Shuffle />
            </div>
    )

}

export default Body

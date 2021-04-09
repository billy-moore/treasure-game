import React, { useEffect, useContext } from 'react'

import { Context } from '../../../../HOCs/Context/Context'

import classes from './Points.module.css'



const Points = () => {

   const [state, dispatch] = useContext( Context )

   useEffect(() => {
       if (state.money > state.high) {
           dispatch({type: 'SetHighScore'})}}
           , [state.money, dispatch, state.high])

    return (
        <div className = { classes.Points } >
            <div className = { classes.InfoL }>money</div>
            <div className = { classes.InfoR }>high</div>
            <div className = { classes.ScoresL }>${state.money}</div>
            <div className = { classes.ScoresR }>${state.high}</div>
        </div>
    )
}

export default Points

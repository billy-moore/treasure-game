import React from 'react'

import classes from './Tile.module.css'


const Tile = ( props ) => {
    return (
        <div onClick = { props.clicked } className = { classes.tile }>
            {props.children}
        </div>
    )
}

export default Tile

import React from 'react'

import Meds from './Meds/Meds'
import NewShovel from './NewShovel/NewShovel'
import classes from './Store.module.css'

const Store = ( props ) => {
    return (

            <div className = { classes.Store }>
                <Meds />
                <NewShovel />   
            </div>

    )
}

export default Store

import React, { useContext } from 'react'

import { Context } from '../HOCs/Context/Context'

import Header from './Header/Header'
import DialogBox from '../HOCs/PopUpOverlay/DialogBox/DialogBox'
import Body from './Body/Body'
import Footer from './Footer/Footer'

import classes from './Layout.module.css'

const Layout = () => {
    
    const [state, dispatch] = useContext(Context)

    const myInfoToggleHandler = () => {
        dispatch({type: 'infoToggle'})
        console.log(state.info)
    }

    const Dialog = <DialogBox />
    const Main = <Body />
    const Swapper = state.info === true ? Dialog : Main

    return (

            <div className = { classes.Layout }>
                <Header clicked = { myInfoToggleHandler }/>
                {Swapper}
                <Footer />
            </div>
    )
}

export default Layout

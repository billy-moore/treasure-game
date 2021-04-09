import React, { useContext } from 'react'

import { Context } from '../../Context/Context'

import classes from './DialogBox.module.css'


const DialogBox = () => {

    const [, dispatch] = useContext( Context )

    const infoToggler = () => {
        dispatch({type: 'infoToggle'})
    }

    const myShuffleHandler = () => {
        dispatch({type: 'HardReset'})
        dispatch({type: 'New'})
        dispatch({type: 'setItems'})
    }


    return (
            <div className = { classes.DialogBox } > 
                <div className = { classes.History }>
                    Legend says El Pollo Manchado and his gang robbed a 
                    train loaded with gold and silver, and disappeared into the desert.<br/> 
                <img alt = 'Manchado' className = { classes.Storyimg } src = {require('../../images/PopImages/Manchado.png')}/>
                    The story goes: Manchado went insane and either killed or ran
                    off his whole crew, and rode into the night loaded with bags of treasure.
                <img alt = 'On the Run' className = { classes.Storyimg2 } src = {require('../../images/PopImages/OntheRun.png')}/>
                    He then wandered the desert, driven by madness, scattering it as he went.
                <img alt = 'On the Run' className = { classes.Storyimg2 } src = {require('../../images/PopImages/Lost.png')}/>
                    Still today, treasure hunters from far and wide, bring their shovels, and dreams of riches, to search for the...
                </div>
                <img alt = 'logo for Treasure of Sergio Monco'/>
                <div className = {classes.Rules}>
                    Each spot in the desert has potential to unearth Manchado's treasure!
                
                <h3>Look For:</h3>
                <div className = {classes.imgBox}>
                    <img alt = 'coins' className = {classes.Limg} src = {require('../../images/PopImages/BigCoin.png')}/>
                    <img alt = 'gold' className = {classes.Rimg} src = {require('../../images/PopImages/GoldCoin.png')}/>
                </div>

                <div className = { classes.text }>
                    Does finding these, mean the legends are true?
                </div>
                <h3>Watch Out For:</h3>
                <div className = {classes.imgBox}>
                    <img alt = 'rocks' className = {classes.Limg} src = {require('../../images/Diggable/Rock.png')}/>
                    <img alt = 'scorpions' className = {classes.Rimg} src = {require('../../images/Diggable/Scorpion.png')}/>
                </div>
                <div className = { classes.text }>
                    Rocks will damage your shovel, and scorpions will sting you! Too many stings or a broken shovel in the middle
                    of the desert could mean tragedy!
                </div>
                <h3>Watch Your Stats!</h3>
                <div className = {classes.imgBox}>
                    <img alt = 'Meds' className = {classes.Limg} src = {require('../../images/Store/Meds.png')}/>
                    <img alt = 'New Shovel' className = {classes.Rimg} src = {require('../../images/Store/NewShovel.png')}/>
                </div>
                <div className = { classes.text }>
                    The Sergio Monco scorpions are very dangerous, and the dirt, sand, and rocks will wear out your shovel.
                    You can always buy medicine or a new shovel, if you can pay for them!
                </div> 
                </div>
                
                <div className = {classes.Buttondiv}>
                    <div className = {"nes-btn " + classes.LBtn} onClick = { infoToggler }>Close</div>
                    <div className = {"nes-btn " + classes.RBtn} onClick = {()=> { myShuffleHandler() } }>New Game</div>
                </div>
            </div>
    )
}

export default DialogBox

import React, { useContext } from 'react'

import { Context } from '../../../../HOCs/Context/Context'

import classes from './Diggable.module.css'

const Diggable = ( props ) => {

    const [state] = useContext( Context )

    const CoinDiv = <div className = { classes.Coins }>
                        <img alt = 'Coins Available' src = {require('../../../../HOCs/images/Diggable/Coins.png')} />
                        {/* x{state.coins} */}
                    </div>

    const RockDiv = <div className = { classes.Rocks }>
                        <img alt = 'Rocks Available' src = {require('../../../../HOCs/images/Diggable/Rock.png')} />
                        {/* x{state.rocks} */}
                    </div>

    const ScorpionDiv = <div className = { classes.Scorpions }>
                    <img alt = 'Scorpions Available' src = {require('../../../../HOCs/images/Diggable/Scorpion.png')} />
                        {/* x{state.scorpions} */}
                    </div>


    return (
        <div className = { classes.Diggable }>
            {state.coins > 0 ? CoinDiv : null}
            {state.rocks > 0 ? RockDiv : null}
            {state.scorpions > 0 ? ScorpionDiv : null}
        </div>
    )
}

export default Diggable

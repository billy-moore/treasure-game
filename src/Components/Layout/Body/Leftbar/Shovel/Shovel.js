import React, { useContext } from 'react'

import { Context } from '../../../../HOCs/Context/Context'

import ShovelLevel from './ShovelLevel/ShovelLevel'

import classes from './Shovel.module.css'

const Shovel = () => {

const [state] = useContext(Context)

    if ( state.shovel === 7) {
        return <ShovelLevel 
                class = { classes.Shovel}
                // item = { classes.Shovel}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel7.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    } else if ( state.shovel === 6) {
        return <ShovelLevel 
                class = { classes.Shovel  + ' ' + classes.Six}
                // item = { classes.Shovel  + ' ' + classes.Six}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel6.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    } else if ( state.shovel === 5) {
        return <ShovelLevel 
                class = { classes.Shovel  + ' ' + classes.Six}
                // item = { classes.Shovel  + ' ' + classes.Six}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel5.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    } else if ( state.shovel === 4) {
        return <ShovelLevel 
                class = { classes.Shovel  + ' ' + classes.Four}
                // item = { classes.Shovel  + ' ' + classes.Four}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel4.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    } else if ( state.shovel === 3) {
        return <ShovelLevel 
                class = { classes.Shovel  + ' ' + classes.Four}
                // item = { classes.Shovel  + ' ' + classes.Four}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel3.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    } else if ( state.shovel === 2) {
        return <ShovelLevel 
                class = { classes.Shovel  + ' ' + classes.Two}
                // item = { classes.Shovel  + ' ' + classes.Two}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel2.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    } else if ( state.shovel === 1) {
        return <ShovelLevel 
                class = { classes.Shovel  + ' ' + classes.One}
                // item = { classes.Shovel  + ' ' + classes.One}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel1.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    } else if ( state.shovel <= 0) {
        return <ShovelLevel 
                class = { classes.Shovel  + ' ' + classes.Zero}
                // item = { classes.Shovel  + ' ' + classes.Zero}
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/ShovelX.png')}
                info = { classes.Info }>{'0/8'}</ShovelLevel>
    } else if ( state.shovel === undefined || state.shovel === 'NaN'){
        return <ShovelLevel 
                class = { classes.Shovel }
                // item = { classes.Shovel }
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel8.png')}
                info = { classes.Info }>{'0/8'}</ShovelLevel>
    } else { 
        return <ShovelLevel 
                class = { classes.Shovel }
                // item = { classes.Shovel }
                alt = { '"' + state.shovel + '"'}
                pic = { require('../../../../HOCs/images/Shovel/Shovel8.png')}
                info = { classes.Info }>{state.shovel + '/8'}</ShovelLevel>
    }

}

export default Shovel

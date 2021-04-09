import React, { useReducer, createContext } from 'react'


    const Context = createContext()

    const allItems = {
        'coin': {name: 'coin', value: 3, type: 'point'},
        'gold': {name: 'gold', value: 5, type: 'point'},
        'scorpion': {name: 'scorpion', value: -1, type: 'health'},
        'rock': {name: 'rock', value: -2, type: 'strength'},
        'empty': {name: 'empty', value: -1, type: 'strength'}
        }

    const standard = [allItems.coin, allItems.coin, allItems.scorpion, allItems.rock, allItems.empty, allItems.empty, allItems.empty, allItems.empty, allItems.empty]
    const plus = [allItems.coin, allItems.coin, allItems.coin, allItems.scorpion, allItems.rock, allItems.empty, allItems.empty, allItems.empty, allItems.empty,]
    const goldrush = [allItems.coin, allItems.coin, allItems.gold, allItems.scorpion, allItems.rock, allItems.empty, allItems.empty, allItems.empty, allItems.empty]
    const rocky = [allItems.coin, allItems.gold, allItems.scorpion, allItems.rock, allItems.rock, allItems.empty, allItems.empty, allItems.empty, allItems.empty]
    const danger = [allItems.coin, allItems.coin, allItems.gold, allItems.scorpion, allItems.scorpion, allItems.empty, allItems.empty, allItems.empty, allItems.empty]

    const shuffle = (x) => {
        let currentIndex = x.length, temporaryValue, randomIndex
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            temporaryValue = x[currentIndex]
            x[currentIndex] = x[randomIndex]
            x[randomIndex] = temporaryValue
        }
        return x
    }

    
    
    const initialState =  {hold: [standard, standard, standard, standard, plus, plus, goldrush, goldrush, rocky, danger ],
                            new: [standard, standard, standard, standard, plus, plus, goldrush, goldrush, rocky, danger ],
                            coins: [],
                            rocks: [],
                            scorpions: [],
                            money: 0,
                            health: 2,
                            shovel: 8,
                            high: 0,
                            clickCount: 0,
                            bgImage: [0,1,2,3,4,5,6,7,7,7,8,8],
                            display: [],
                            info: false,
                            popUpDisplay: false,
                            dead: false
                        }

    const reducer = (state, action) => {

        switch(action.type) {
            case 'New':
                shuffle(state.hold)
                shuffle(state.hold[0])
                return {
                    ...state,
                    new: (shuffle(state.hold[0])),
                    display: []
                }
            case 'Reset':
                return {...state,
                    hold: [standard, standard, standard, standard, plus, plus, goldrush, goldrush, rocky, danger ],
                            new: [standard, standard, standard, standard, plus, plus, goldrush, goldrush, rocky, danger ],
                            coins: [],
                            rocks: [],
                            scorpions: [],
                            money: 0,
                            health: 2,
                            shovel: 8,
                            clickCount: 0,
                            bgImage: [0,1,2,3,4,5,6,7,7,7,8,8],
                            display: [],
                            info: false,
                            popUpDisplay: false,
                            dead: false
                }
            case 'HardReset':
                return {
                    ...initialState
                }
            case 'setItems':
                return{
                    ...state,
                    coins: state.new.filter(coin => coin.name === 'coin' || coin.name === 'gold').length,
                    rocks: state.new.filter(rock => rock.name === 'rock').length,
                    scorpions: state.new.filter(scorp => scorp.name === 'scorpion').length
                }
            case 'digItem':
                return {
                    ...state,
                    display: [...state.display, action.digup]
                }
            case 'clickedCoin':
                return {
                    ...state,
                    coins: (state.coins - 1),
                    money: (state.money + action.value)
                }
            case 'minusRock':
                return {
                    ...state,
                    rocks: (state.rocks - 1)
                }
            case 'minusScorpion':
                return {
                    ...state,
                    scorpions: (state.scorpions - 1)
                }
            case 'emptyHanded':
                return {
                    ...state
                    }
            case 'SetHighScore':
                return {
                    ...state,
                    high: (state.money)
                }
            case 'NewShovel':
                return {
                    ...state,
                    shovel: 8, 
                    money: (state.money - 6)
                }
            case 'NewLife':
                    return {
                        ...state,
                        health: 2, 
                        money: (state.money - 4)
                    }
            case 'UpClick':
                    return {
                        ...state,
                        clickCount: (state.clickCount + 1)
                    }
            case 'removePopUp':
                    return {
                        ...state,
                        popUpDisplay: false
                    }
            case 'setUpBoard':
                return {
                    ...state,
                    bgImage: (shuffle(state.bgImage))
                }
            case 'infoToggle':
                return {
                ...state,
                info: !state.info
            }
            case 'iDied':
                return {
                    ...state,
                    dead: true,
                }
            default:
                return state
        }
    }


    const ContextProvider = ( props ) => {
    
        const [state, dispatch] = useReducer(reducer, initialState)
    
        return (
            <Context.Provider value = { [state, dispatch] }>
                {props.children}
            </Context.Provider>
    )
}

export { ContextProvider, Context }
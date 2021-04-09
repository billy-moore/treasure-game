import React from 'react'

const ShovelLevel = ( props ) => {
    return (
        <div className = { props.class}>
            <img alt = { props.alt } className = { props.item } src = { props.pic } />
                    <div className = { props.info }>{ props.children }</div>
        </div>
    )
}

export default ShovelLevel

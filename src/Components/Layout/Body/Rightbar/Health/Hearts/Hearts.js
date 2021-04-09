import React from 'react'

const Hearts = ( props ) => {
    return (
        <div className = { props.container } >
        <div className = { props.class }>
            { props.children }
        </div>
        </div>
    )
}

export default Hearts

//<img alt = { props.alt } className = { props.item } src = { props.pic } />
//<div className = { props.info }></div>
import React from 'react'

function AgeButtonComponent(props) {
    console.log('Age button component is rendering..')
    return (
        <div>
            <button onClick={props.incrementAge}>Age increment</button>
        </div>
    )
}

export default React.memo(AgeButtonComponent)

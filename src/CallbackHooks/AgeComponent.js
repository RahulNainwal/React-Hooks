import React from 'react'

function AgeComponent(props) {
    console.log('Age component is rendering..')
    return (
        <div>
            age is {props.age}
        </div>
    )
}

export default React.memo(AgeComponent)

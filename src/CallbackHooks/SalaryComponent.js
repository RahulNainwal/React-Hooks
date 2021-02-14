import React from 'react'

function SalaryComponent(props) {
    console.log('salary component is rendering..')
    return (
        <div>
           salary is {props.salary} 
        </div>
    )
}

export default React.memo(SalaryComponent)

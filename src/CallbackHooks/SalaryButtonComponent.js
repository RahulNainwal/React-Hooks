import React from 'react'

function SalaryButtonComponent(props) {//function SalaryButtonComponent({incrementSalary}) {
    console.log('SalaryButton is rendering..')
    return (
        <div>
            <button onClick={props.incrementSalary}>Increment Salary</button>
        </div>
    )
}

export default React.memo(SalaryButtonComponent)
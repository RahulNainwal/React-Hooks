import React, { useState, useCallback } from 'react'
import TitleComponent from './TitleComponent'
import AgeComponent from './AgeComponent'
import AgeButtonComponent from './AgeButtonComponent'
import SalaryComponent from './SalaryComponent'
import SalaryButtonComponent from './SalaryButtonComponent'

function ParentComponent() {
    const [age, setAge] = useState(24)
    const [salary, setSalary] = useState(5000)
    const incrementAge = useCallback(() => {
        return setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        return setSalary(salary + 1000)
    }, [salary])
    // what ??
    // Usecallback hook is a hook that will return a memoized version of the callback function that only changes if 
    // one of the dependencies has changed.
    // why ??
    // It is usefull when passing callback to optimized child components that rely on reference equality to prevent 
    // unnecessary renders.
    // How to use it
    // import useCallback from react and then it take two arguments one is callback function and second is dependency array.

    return (
        <div>
            <TitleComponent />
            <AgeComponent age={age} />
            <AgeButtonComponent incrementAge={incrementAge} />
            <SalaryComponent salary={salary} />
            <SalaryButtonComponent incrementSalary={incrementSalary} />
        </div>
    )
}

export default ParentComponent

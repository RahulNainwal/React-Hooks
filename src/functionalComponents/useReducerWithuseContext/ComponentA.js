import React, { useContext } from 'react'
import { countContext } from './MainComponent'

function ComponentA() {
    const count = useContext(countContext)
    return (
        <div>
            count value in component is {count.stateValue}
            <button onClick={() => count.actionValue('increment1')}>Increment1</button>
            <button onClick={() => count.actionValue('decrement1')}>Decrement1</button>
            <button onClick={() => count.actionValue('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA

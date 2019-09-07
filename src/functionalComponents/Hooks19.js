import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment1':
            return state + 1;
        case 'decrement1':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
// Multiple useReducer with same state and actions.
function Hooks19() {
    const [count1, dispatch] = useReducer(reducer, initialState)
    const [count2, dispatch2] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count1 value is {count1} for First one</div>
            <button onClick={() => dispatch('increment1')}>Increment1</button>
            <button onClick={() => dispatch('decrement1')}>Decrement1</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <div>Count1 value is {count2} for second one</div>
            <button onClick={() => dispatch2('increment1')}>Increment1</button>
            <button onClick={() => dispatch2('decrement1')}>Decrement1</button>
            <button onClick={() => dispatch2('reset')}>Reset</button>
        </div>
    )
}

export default Hooks19

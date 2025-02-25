import React, { useReducer } from 'react'

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
// useReducer is a hook that is used for state management in.it is alternative to useState.useState is build using useReducer.
function Hooks15() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count is {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Hooks15

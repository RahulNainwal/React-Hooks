import React, { useReducer } from 'react'

// simple useReducer using object as a state and action has it's type an value.
const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}
function Hooks16() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count value = {count.firstCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Hooks16

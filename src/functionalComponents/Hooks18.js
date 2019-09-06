import React, { useReducer } from 'react'

// simple useReducer using object as a state and action has it's type an value.new state object has two variables.
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment1':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement1':
            return { ...state, secondCounter: state.secondCounter - action.value }
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
            <div>Count value for 2 = {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment1', value: 10 })}>increment</button>
            <button onClick={() => dispatch({ type: 'decrement1', value: 10 })}>decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default Hooks16

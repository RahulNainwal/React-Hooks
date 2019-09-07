import React, { useReducer } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentD from './ComponentD'

// useReducer - local state management.
// share state between components -Global state management using useReducer + useContext.

export const countContext = React.createContext();
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

// In this example we are using useReducer with useContext to that state will act as a global state and 
// can be accessed and modifyed from any components under context provider.

function MainComponent() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            count value is  {count}
            <countContext.Provider value={{ stateValue: count, actionValue: dispatch }}>
                <ComponentA />
                <ComponentB />
                <ComponentD />
            </countContext.Provider>
        </div>
    )
}
export default MainComponent
import React from 'react'
import useCount from '../useCountCustomHook'

function useCountHooksUse1() {
    const [count, increment, decrement, reset] = useCount(10)
    return (
        <div>
            count is {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default useCountHooksUse1

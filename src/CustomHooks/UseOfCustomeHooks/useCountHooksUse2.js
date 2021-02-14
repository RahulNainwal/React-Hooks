import React from 'react'
import useCount from '../useCountCustomHook'

function useCountHooksUse2() {
    const [count, increment, decrement, reset] = useCount()
    return (
        <div>
            count is {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default useCountHooksUse2

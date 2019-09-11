import React, { useMemo, useState } from 'react'

function UseMemoHooks1() {
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)

    const incrementCount1 = () => {
        setCount1(count1 + 1)
    }
    const incrementCount2 = () => {
        setCount2(count2 + 1)
    }
    const isEven = () => {
        for (let i = 0; i < 200000000; i++) {
            i++;
        }
        return (count1 % 2 === 0)
    }
    // this is without memo hooks which is used to avoid expensive recomputation.
    // memoHooks is used to cache function value while callbackHooks is useto cache function itself.
    return (
        <div>
            <div>
                <button onClick={incrementCount1}>count1 - {count1}</button>
                {isEven() ? 'Even' : 'Odd'}
            </div>
            <div>
                <button onClick={incrementCount2}>count2 - {count2}</button>
            </div>
        </div>
    )
}

export default UseMemoHooks1

import React, { useState, useEffect } from 'react'
// useEffect with incorrect dependency.
function Hooks10() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [count])
    const tick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            {count}
        </div>
    )
}

export default Hooks10

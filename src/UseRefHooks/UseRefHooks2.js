import React, { useEffect, useState, useRef } from 'react'


// useRef is use to access dom node directly but it also used to store mutable values.
function UseRefHooks2() {
    const [timer, setTimer] = useState(0)
    const tiimerRef = useRef()
    useEffect(() => {
        tiimerRef.current = setInterval(() => { // timerRef.current replace here const interval which is not accessable outside of this function.
            setTimer(prevTimer => prevTimer + 1) // so useRef is used to rescue in such a situations.
        }, 1000)
        return () => {
            clearInterval(tiimerRef.current)// timerRef.current replace here const interval
        }
    }, [])
    return (
        <div>
            counter value = {timer}
            <button onClick={() => clearInterval(tiimerRef.current)}> 
                clearInterval
            </button>
        </div>
    )
}

export default UseRefHooks2

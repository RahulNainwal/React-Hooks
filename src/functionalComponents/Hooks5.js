import React, { useState, useEffect } from 'react'

function Hooks5() {
    const [count, setCount] = useState(0)
    // hooks using useEffect which is used to perform side effect in our application.
    // useEffect after render 
    // useEffect is run after every single render. 
    useEffect(()=>{
        document.title = `You clicked ${count} time`;
    })
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Click {count} time</button>
        </div>
    )
}

export default Hooks5

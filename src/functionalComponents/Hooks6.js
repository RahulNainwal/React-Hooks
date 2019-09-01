import React, { useState, useEffect } from 'react'
// useEffect is run after every single render that might create performance issue thats why we are using 
// run effects conditionaly 
function Hooks6() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} time`;
    },[count])
    return (
        <div>
            <input type='text' value ={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Clicked {count} time</button>
        </div>
    )
}

export default Hooks6
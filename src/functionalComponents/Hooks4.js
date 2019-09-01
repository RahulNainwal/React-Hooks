import React, { useState } from 'react'

// use state with array
function Hools4() {
    const [count, setCount] = useState([])
    const addItems = () => {
        setCount([...count, {
            id: count.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick={addItems}>Add items into list</button>
            <ul>
                {count.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default Hools4

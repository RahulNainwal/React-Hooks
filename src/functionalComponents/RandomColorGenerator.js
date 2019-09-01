import React, { useState } from 'react'

function RandomColorGenerator() {
    const [color, setcolor] = useState([]);
    const stateSet = () => {
        setcolor([...color, { setRbg: setRbg(), id: Math.random() * 1000 }])
    }
    return (
        <div >
            <button onClick={stateSet}>Click to add</button>
            {
                color.map(item => <div style={{
                    width: 100, height: 100, borderRadius: 50, borderWidth: 5, backgroundColor: item.setRbg
                }} key={item.id}></div>)
            }
        </div >
    )
}
const setRbg = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}
export default RandomColorGenerator

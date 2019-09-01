import React, { useState } from 'react'


// state increment based upon previous state.
// this approach is usefull when next count depends on previous  one.
function Hooks2() {
    const initial = 0;
    const [count, setCount] = useState(initial);
    const incrementByFive = () => {
        for (let i = 0; i < 5; i++) {
            //setCount(count+1) // this is unsafe
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div className="App">
            <h1>Hello World !! using React native hooks</h1>
            <h1>Value of state in functional components is {count}</h1>
            <h1>To increse state click the button blow</h1>
            <button onClick={() => setCount(count + 1)}>increment BY ONE</button>
            <button onClick={() => setCount(count - 1)}>decrease BY ONE</button>
            <button onClick={incrementByFive}>increment BY FIVE</button>
            <button onClick={() => setCount(initial)}>Reset State</button>
        </div>
    );
}
export default Hooks2;
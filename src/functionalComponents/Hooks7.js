import React, { useEffect, useState } from 'react'

// what if we want to execute useEffect only once after initial rander then we use an empty array as a optional arguments.
function Hooks7() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log("Use effect is running....")
    },[])
    // in this case useEffect is callled every time state change and data is rendered.
    {/* <div>
            <p>Hello rahul count is {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>increse count</button> 
        </div> */}

    // to avoid the above case we pass an additionl parameter to useEffect like this.
    {/* <div>
        <p>Hello rahul count is {count}</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>increse count</button>
    </div> */}
    return (
        <div>
            <p>Hello rahul count is {count}</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>increse count</button>
        </div>

    )
}

export default Hooks7

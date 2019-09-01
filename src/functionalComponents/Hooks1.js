import React,{useState} from 'react'

function Hooks1() {
    const [count,setCount] = useState(0)
    return (
      <div className="App">
        <h1>Hello World !! using React native hooks</h1>
        <h1>Value of state in functional components is {count}</h1>
        <h1>To increse state click the button blow</h1>
        <button onClick={()=>setCount(count+1)}>Click Me</button>
      </div>
    );
  }
  export default Hooks1;
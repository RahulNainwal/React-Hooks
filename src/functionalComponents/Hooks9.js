import React, { useEffect, useState } from 'react'
import Hooks8 from './Hooks8'
// use effect with cleanup in hooks equevalent to componentWillUnmount 
function Hooks9() {
    const [display, setDisplay] = useState(true)    
    return (
        <div >
            <button onClick={() => setDisplay(!display)}>Toggle Button</button>
            {display && <Hooks8 />}
        </div>
    )
}

export default Hooks9
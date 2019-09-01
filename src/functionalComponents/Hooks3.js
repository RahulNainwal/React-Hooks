import React, { useState } from 'react'
// hooks with object in react.
function Hooks3() {
    const [name, setName] = useState({ firstName:'', lastName:'' })
    return (
        <div>
            <form>
                {/* in react hooks state marge is not perform automatically like in state that's why we use ... (spread operator) for marge state */}
                <input type="text" value={name.firstName} onChange={e => setName({...name, firstName: e.target.value })} />
                <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value })} />
                <h1>First name is {name.firstName}</h1>
                <h1>Last name is {name.lastName}</h1>
                <h1>{JSON.stringify(name)}</h1>
            </form>
        </div>
    )
}

export default Hooks3;

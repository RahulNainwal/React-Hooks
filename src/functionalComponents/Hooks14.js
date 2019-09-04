import React from 'react'
import Hooks14Child from './Hooks14Child'
// UseContext
// Context provide a way to pass data through component tree without having to pass props down 
// manually at every level.
export const UserContext = React.createContext()
export const ChanelContext = React.createContext()
function Hooks14() {
    return (
        <div>
            <UserContext.Provider value={'Rahul'}>
                <ChanelContext.Provider value={"Rahul Nainwal"}>
                    <Hooks14Child />
                </ChanelContext.Provider>
            </UserContext.Provider>
        </div>
    )
}

export default Hooks14

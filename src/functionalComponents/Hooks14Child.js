import React, { useContext } from 'react'
import { ChanelContext, UserContext } from './Hooks14'

function Hooks14Child() {
    const user = useContext(UserContext)
    const channel = useContext(ChanelContext)
    return (
        <div>
            User-{user} and Channel-{channel}
        </div>
    )
}

export default Hooks14Child

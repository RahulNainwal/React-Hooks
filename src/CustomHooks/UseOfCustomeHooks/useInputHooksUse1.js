import React from 'react'
import UseInputCustomHooks from '../UseInputCustomHooks'

function useInputHooksUse1() {
    const [firstName, bindFirstName, resetFirstName] = UseInputCustomHooks('')
    const [lastName, bindLastName, resetLastName] = UseInputCustomHooks('')
    const submitHandler = (e) => {
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName();
        resetLastName();
    }
    return (
        <div>
            <label>Firstname</label>
            <input {...bindFirstName} type="text"></input>
            <label>Lastname</label>
            <input {...bindLastName} type="text"></input>
            <button onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default useInputHooksUse1

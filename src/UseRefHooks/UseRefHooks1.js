import React,{useRef,useEffect} from 'react'

// useRef is used to access dom node directly in functional components.
// predefine focuse in input field.
function UseRefHooks1() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus();
    },[])
    return (
        <div>
            <input type='text' ref={inputRef}/>
        </div>
    )
}

export default UseRefHooks1

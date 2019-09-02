import React, { useEffect, useState } from 'react'

function Hooks8() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const logMousePosition = e => {
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    // useEffect(() => {
    //     console.log('Running into useeffect')
    //     window.addEventListener('mousemove', logMousePosition)
    // }, [])

    useEffect(() => {
        console.log('Running into useeffect')
        window.addEventListener('mousemove', logMousePosition)
        return () => {
            console.log('return method inside usEeffect is used for cleanup and is equevalent to componentWillUnmount in class based components.')
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div >
            hook x-{x} and hook y-{y}
        </div>
    )
}

export default Hooks8

import React, { useEffect } from 'react'

// custome hooks are basically javascript functions whose name start with use. A custome hooks can call other hooks if needed.
// why ?
// share logic - alternative to HOCs and Render props.
function UseDocumentTitle(count) {
    useEffect(() => {
        document.title = `Count ${count}`
    }, [count])
}

export default UseDocumentTitle

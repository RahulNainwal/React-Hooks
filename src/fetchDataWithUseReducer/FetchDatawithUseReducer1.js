import React, { useState, useEffect } from 'react'
import axios from 'axios'

// Although useState and useReducer both are used for state management but in this we use useState and useReducer in next one.

function FetchDatawithUseReducer1() {
    const [isLoading, setLoading] = useState(true);
    const [error, setErroe] = useState('');
    const [post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((Response) => {
                setLoading(false)
                setPost(Response.data)
                setErroe('')
            })
            .catch((error) => {
                setLoading(false)
                setPost({})
                setErroe('Something went wrong')
            })
    }, [])
    return (
        <div>
            {isLoading ? 'Loading...' : post.title}
            {error ? error : null}
        </div>
    )
}

export default FetchDatawithUseReducer1


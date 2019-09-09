import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    isLoading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                isLoading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return {
                isLoading: false,
                post: {},
                error: 'Something went wrong'
            }
        default:
            return state;
    }
}

// in this part we will use useReducer for state management.
function FetchDatawithUseReducer2() {
    const [value, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((Response) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: Response.data })
            })
            .catch((error) => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            {value.isLoading ? 'Loading.....' : value.post.title}
            {value.error ? value.error : false}
        </div>
    )
}

export default FetchDatawithUseReducer2

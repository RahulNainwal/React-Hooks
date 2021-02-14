import React, { useState, useEffect } from 'react'
import axios from 'axios'

// we are using axios to featch data from end point in functional components.
function Hooks11() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => console.log(error));
    },[])
    return (
        <div>
            <ul>
                {
                    post.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Hooks11

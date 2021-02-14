import React, { useState, useEffect } from 'react'
import axios from 'axios'

// we are using axios to featch data from end point in functional components. this time we are getting special post based upon post id.
function Hooks12() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => console.log(error));
    }, [id])
    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)}></input>
            <div>
                {post.title}
            </div>
        </div>
    )
}

export default Hooks12

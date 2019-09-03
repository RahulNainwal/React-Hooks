import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Hooks13() {
    // Get post only when button is clicked.
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [btnId, setBtnclick] = useState(1)
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(error => console.log(error));
    }, [btnId])
    return (
        <div>
            <input type='text' value={id} onChange={(e) => setId(e.target.value)}></input>
            <button onClick={() => setBtnclick(btnId + 1)}>Click</button>
            <div>
                {post.title}
            </div>
        </div>
    )
}

export default Hooks13

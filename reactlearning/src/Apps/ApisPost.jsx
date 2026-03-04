import React, { useState } from 'react'
import axios from 'axios';


axios.interceptors.request.use(request=>{
    console.log('Starting Request');
    return request;
})

const ApisPost = () => {
    const [data,setData]=useState();

    function handleSubmit(event) {
        event.preventDefault();
        const newPost = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        axios.post('https://jsonplaceholder.typicode.com/posts',newPost)
        .then(Response=>{
            console.log('New Post Added:- ',Response.data);
            setData([Response.data]);
        })
        
    }

    return (
        <div>
            <h1>Post Api</h1>
            <form action="">
                <button type='submit' onClick={handleSubmit}>Add Post</button>
            </form>
        </div>
    )
}

export default ApisPost

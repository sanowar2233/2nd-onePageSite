import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Post2 = ({post}) => {
    const {id,title,body}=post
    const navigate=useNavigate()
    const handleNavigate=()=>{
        navigate(`/posts/${id}`)
    }
    return (
        <div>
            <h1>{id}</h1>
            <h1>{title}</h1>
            <h1>{body}</h1>
            <button onClick={handleNavigate} >Show Detail</button>
        </div>
    );
};

export default Post2;
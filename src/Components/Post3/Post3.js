import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const Post3 = () => {
    const post=useLoaderData();
    const {id, userId, body,title}=post
    const navigate=useNavigate();
    const handleNavigate=()=>{
        navigate(`/home/${userId}`)
    }
    return (
       
        <div>
            <h1>id:---{id}</h1>
            <h1>Tittle:={title}</h1>
            <h1>userID:--{body}</h1>
            <button onClick={handleNavigate}>Last button</button>

        </div>
    );
};

export default Post3;
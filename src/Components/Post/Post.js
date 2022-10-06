import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post2 from '../Post2/Post2';

const Post = () => {
    const posts=useLoaderData()
    return (
        <div>
            {
                posts.map(post=><Post2 key={post} post={post}></Post2>)
            }
        </div>
    );
};

export default Post;
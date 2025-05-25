import React from 'react';
import Post from './Post';
import './PostList.css';

function PostList(){
    return(
        <div className="postlist-container">
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        </div>
    )

}

export default PostList;
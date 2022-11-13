import React, { useState, useEffect } from 'react';
import PostCard from './PostCard';


export default function Home(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://kekambas-blog.herokuapp.com//blog/posts")
        .then(response => response.json())
        .then(result => {
            console.log(result)
            setPosts(result)
        })
        .catch(error => console.log('error', error));
    }, [])

  return (
    <>
        <div>
        <h1 className="text-center my-3">Blog</h1>
        {posts.map(post => <PostCard key={post.id} post={post}/>)}
        </div>
    </>
  )
}

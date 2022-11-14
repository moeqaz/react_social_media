import React, { useEffect } from 'react';

// Spent hours trying to find a way to grab a single post; don't think i would be able to update or delete a post without being able to grab a single post. Aside from that, able to log in, log out, create new user, create new post, and view all posts.


export default function SinglePost({ post }) {

    useEffect(() => {
        fetch(`https://kekambas-blog.herokuapp.com/blog/posts/${post.id}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }, [])

  return (
    <>
        <div className="card my-3 bg-light">
            {/* <img src={post.content} className="card-img-top h-50" alt="No Photo is Attached to this Post"></img> */}
            <div className="card-body">
                <h5 className="card-title mx-1">{post.title}</h5>
                <h6 className="card-title mb-3 mx-3">By {post.author.username}</h6>
                <p className="card-text mx-3">{post.content}</p>
                <p className="card-text fst-italic text-secondary mt-2 mb-0 mx-3">Created on: {post.date_created}</p>
            </div>
        </div>
    </>
  )
}

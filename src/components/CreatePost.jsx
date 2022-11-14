import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {
    const navigate = useNavigate()
    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage("You need to be logged in to see this page!", "warning");
            navigate('/login');
        }
    })

    const handleSubmit = async event => {
        event.preventDefault();
        console.log(event);

        let title = event.target.title.value;
        let content = event.target.content.value;

        let token = localStorage.getItem('token')

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${token}`);

        let requestContent = JSON.stringify({title, content});

        let res = await fetch("https://kekambas-blog.herokuapp.com/blog/posts", {
            method: 'POST',
            headers: myHeaders,
            body: requestContent
        })
        if (res.ok){
            let data = await res.json()
            props.flashMessage(`Your post titled ${data.title} has been created!`, "info");
            navigate('/');
        } else{
            props.flashMessage('There was an issue, please try again!', 'warning');
        }
    }


  return (
    <>
        <h2 className="text-center mt-3">New Post</h2>
        <form onSubmit={handleSubmit}>
            <div className="my-3">
                <label htmlFor="title" className="form-label">Post Title</label>
                <input type="text" className="form-control" placeholder="Post Title" name='title' />
                <label htmlFor="content" className="form-label">Post Content</label>
                <textarea className="form-control" name='content' rows="3"/>
                <input type="submit" value="Create Post" className='btn btn-primary w-100 mt-4' />
            </div>
        </form>
    </>
  )
}

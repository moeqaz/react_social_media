import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from './components/SignUp';
import Alert from './components/Alert';
import Login from './components/Login';
import CreatePost from './components/CreatePost';
import SinglePost from './components/SinglePost';

function App() {
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    const [loggedIn, setLoggedIn] = useState((localStorage.getItem('token')));

    const flashMessage = (message, category) => {
      setMessage(message);
      setCategory(category);
    }

    const logUserIn = () => {
      setLoggedIn(true)
    }

    const logUserOut = () => {
      setLoggedIn(false);
      localStorage.removeItem('token');
    }
  

  return (
    <>

        <Navbar loggedIn={loggedIn} logUserOut={logUserOut}/>
        <div className="container">
          {message ? <Alert message={message} category={category} flashMessage={flashMessage}/> : null}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp flashMessage={flashMessage} />} />
            <Route path='/login' element={<Login flashMessage={flashMessage} logUserIn={logUserIn} />} />
            <Route path='/create' element={<CreatePost flashMessage={flashMessage} loggedIn={loggedIn}/>} />
            <Route path={`/post/`} element={<SinglePost />} />
          </Routes>
        </div>
    
    </>
    )
}

export default App;

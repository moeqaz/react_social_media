import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SignUp from './components/SignUp';
import Alert from './components/Alert';
import Login from './components/Login';

function App() {
    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null)

    const flashMessage = (message, category) => {
      setMessage(message);
      setCategory(category);
    }

  return (
    <>

        <Navbar />
        <div className="container">
          {message ? <Alert message={message} category={category} flashMessage={flashMessage}/> : null}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp flashMessage={flashMessage} />} />
            <Route path='/login' element={<Login flashMessage={flashMessage} />} />
          </Routes>
        </div>
    
    </>
    )
}

export default App;

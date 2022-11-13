import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const navigate = useNavigate();

    const handleLogin = async e => {
        e.preventDefault();
        console.log(e)
        let username = e.target.username.value;
        let password = e.target.password.value;

        let confidential = `${username}:${password}`;

        
        let myHeaders = new Headers();
        myHeaders.append('Authorization', `Basic ${btoa(confidential)}`)

        let response = await fetch('https://kekambas-blog.herokuapp.com//auth/token', {
            method: 'POST',
            headers: myHeaders
            })
            if (response.ok){
                let data = await response.json()
                let token = data.token;
                localStorage.setItem('token', token);
                props.flashMessage(`Welcome ${username}! You are now logged in!`, "success");
                navigate('/')
            } else{
                props.flashMessage("Invalid username and/or password :(", "danger")
            }
                
        }
            
            
            
            return (
                <>    
                    <h1 className="text-center">Login</h1>
                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username" className='mt-3'>Username</label>
                            <input type="text" className='form-control my-2' placeholder='Enter Username' name='username' />
                            <label htmlFor="password" className='mt-3'>Password</label>
                            <input type="password" className='form-control my-2' placeholder='Enter Password' name='password' />
                            <input type="submit" value="Log In" className='btn btn-primary w-100 mt-4' />
                        </div>
                    </form>
                </>
            )
        }
    
    




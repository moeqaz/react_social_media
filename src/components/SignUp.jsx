import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: false,
            to: '/'
        }
    }

    handleSignUp = e => {
        e.preventDefault();

        let password = e.target.password.value;
        let confirmPass = e.target.confirmPass.value;
            if (password !== confirmPass){
                this.props.flashMessage('Passwords do not match', 'danger')
            } else{
                console.log('Passwords match!')

                let myHeaders = new Headers();
                myHeaders.append('Content-type', 'application/json');

                let formData = JSON.stringify({
                    email: e.target.email.value,
                    username: e.target.username.value,
                    password
                })
                fetch("https://kekambas-blog.herokuapp.com//auth/users", {
                    method: 'POST',
                    headers: myHeaders,
                    body:formData
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.error){
                            this.props.flashMessage(data.error, 'danger')
                        } else {
                            console.log(data)
                            this.props.flashMessage(`${data.username}'s account has been created!`, 'success')
                            this.setState({
                                redirect: true
                            })
                        }
                    })
                    .catch(err => console.error(err))
            }
    }

    render(){
        return (
            <>
                {this.state.redirect ? <Navigate to='/' /> : (
                <>    
                    <h1 className="text-center mt-3">Sign Up</h1>
                    <form onSubmit={this.handleSignUp} className='my-4'>
                        <div className="form-group">
                        <label htmlFor="email" className='mt-1'>Email</label>
                            <input type="text" className='form-control my-2' placeholder='Enter Email' name='email' />
                            <label htmlFor="username" className='mt-3'>Username</label>
                            <input type="text" className='form-control my-2' placeholder='Enter Username' name='username' />
                            <label htmlFor="password" className='mt-3'>Password</label>
                            <input type="password" className='form-control my-2' placeholder='Enter Password' name='password' />
                            <label htmlFor="confirmPass" className='mt-3'>Confirm Password</label>
                            <input type="password" className='form-control my-2' placeholder='Re-Enter Password' name='confirmPass' />
                            <input type="submit" value="Sign Up" className='btn btn-primary w-100 mt-4' />
                        </div>
                    </form>
                </>
                )}
            </>

        )
    }
}

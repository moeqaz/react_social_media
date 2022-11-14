import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-info">
        <div className="container-fluid">
            <a className="navbar-brand text-primary" href="/"><strong>React Social Media</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse">
            <div className="navbar-nav">

                {props.loggedIn ? (
                    <>
                    <Link className="nav-link active" to="/">Home</Link>
                    <Link className="nav-link active" to="/create">Create</Link>
                    <Link className="nav-link active" to="/login" onClick={props.logUserOut}>Logout</Link>
                    </>
                ): (
                    <>
                    <Link className="nav-link active" to="/signup">Sign Up</Link>
                    <Link className="nav-link active" to="/login">Login</Link>
                    </>
                )}
            </div>
            </div>
        </div>
    </nav>

  )
}

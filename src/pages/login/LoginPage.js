import React from 'react'

 import {Link, useNavigate} from "react-router-dom"

 
 function LoginPage  (props){
    // window.location.assign('page.html')
    // router navigate to a path ( /home/index dashboard)
    let navigation = useNavigate();

    function onHandleSubmit(e){
        e.preventDefault();
        navigation('dashboard')
        // firebase auth signInWithUsernameAndPassword({email, password})
        // true or error
        // try again
        // true the navigate to the dashboard
    }

     return( 
       <>
            <div className="login-page">
                <div className="login-container">
                    <img src="images/car-img.png" alt="CS Diecast garage" />
                    <form onSubmit={onHandleSubmit}>
                        <img className="logo" src="images/logo.svg" alt="the CS Diecast logo" />
                        <h2>Welcome to CS Diecast!</h2>
                        <label for="email">Email</label>
                        <input type="email" required />
                        <label>Password</label>
                        <input type="password" required />
                        <button type="submit">Login</button>
                        <div className="recovery-links">
                            <Link to="/">Recover Username</Link>
                            <Link to="/">Recover Password</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
     )
     // temporal dead zone....
 }
 
 export default LoginPage 
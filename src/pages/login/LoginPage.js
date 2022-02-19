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
        <nav>
            <ul>
                <li>
                    <Link to="/">LoginPage</Link>
                </li>
                <li>
                    <Link to="/dashboard">DashBoard Page</Link>
                </li>
            </ul>
        </nav>
        <header>
            <h1>Login Page</h1>
        </header>
        <form onSubmit={onHandleSubmit}>
            <input type="email" required />
            <button type="submit">form submission</button>
        </form>
        </>
     )
     // temporal dead zone....
 }
 
 export default LoginPage 
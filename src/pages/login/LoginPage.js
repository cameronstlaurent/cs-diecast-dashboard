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
       <><nav>
       <ul>
           <li>
               <Link to="/">LoginPage</Link>
           </li>
           <li>
               <Link to="/dashboard">DashBoard Page</Link>
           </li>
       </ul>
   </nav>
            <div class="login-page">
                <div class="login-container">
                    <img src="images/car-img.png" alt="car" />
                    <form onSubmit={onHandleSubmit}>
                        <img class="logo" src="images/logo.png" alt="the CS Diecast logo" />
                        <h2>Welcome to CS Diecast!</h2>
                        <label for="email">Email</label>
                        <input type="email" required />
                        <label>Password</label>
                        <input type="password" required />
                        <button type="submit">Login</button>
                        <div class="recovery-links">
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
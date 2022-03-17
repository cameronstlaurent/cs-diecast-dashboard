import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {BiMessageSquareError} from 'react-icons/bi';
import {signInWithEmailAndPassword} from "firebase/auth";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth} from './../../libs/firebase';
import {Link} from "react-router-dom";
import Branding from 'assets/images/logo.svg';

 
 function LoginPage  (props){
        const navigator = useNavigate();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');

        const notify = (error) => toast.error(error.code,{
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            CloseOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            icon:<BiMessageSquareError/>
        });

        function onHandleSignIn(e){
            e.preventDefault();
            signInWithEmailAndPassword(auth, email, password)
            .then(userCrediental=>{
                //move dashboard page
                // useNavigate() react router
                navigator('dashboard')
                console.log(userCrediental)
            })
            .catch(error=>{
                notify(error)
            })
    }

     return( 
       <>
            <div className="login-page">
                <ToastContainer/>
                <div className="login-container">
                    <img src="images/car-img.png" alt="CS Diecast garage" />
                    <form onSubmit={onHandleSignIn}>
                        <img className="logo" src={Branding} alt="the CS Diecast logo" />
                        <h2>Welcome to CS Diecast!</h2>
                        <label for="email">Email</label>
                        <input type="email" onChange={(e)=> setEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" onChange={(e)=> setPassword(e.target.value)} />
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
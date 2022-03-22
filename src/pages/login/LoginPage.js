import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {BiMessageSquareError} from 'react-icons/bi';
import {signInWithEmailAndPassword} from "firebase/auth";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {auth} from './../../libs/firebase';
import {Link} from "react-router-dom";
import Branding from 'assets/images/logo.svg';
import {LoginPageStyles, FormControl} from './styles';
import { Label } from 'ui/forms';
import { Input } from 'ui/forms';
import { SubmitButton } from 'ui/buttons';

 
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
            <LoginPageStyles>
                <ToastContainer/>
                <form onSubmit={onHandleSignIn}>
                <div className="login-branding">
                <img className="logo" src={Branding} alt="the CS Diecast logo" />
                </div>
                <div className="login-form-container">
                <h1>Welcome to CS Diescast!</h1>
                <FormControl>
                    <Label>Email</Label>
                    <Input type="text" placeholder="janedoe@gmail.com" onChange={(e)=> setEmail(e.target.value)} />
                </FormControl>
                <FormControl>
                    <Label>Password</Label>
                    <Input type="password" placeholder="account password" onChange={(e)=> setPassword(e.target.value)}/>
                </FormControl>
                <FormControl>
                <SubmitButton>
                Sign In
                </SubmitButton>
                <div className="recovery-links">
                <Link to="#">Recover Password</Link>
                <Link to="#">Recover Username</Link>
                </div>
                </FormControl>
                </div>
                </form>
            </LoginPageStyles>
        </>
     )
     // temporal dead zone....
 }
 
 export default LoginPage 
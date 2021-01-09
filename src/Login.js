import React, { useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import { auth } from './firebase';
import "./Login.css"
function Login() {
    const history = useHistory();
    const [email,setEmail]=useState('');
    const [password ,setPassword]=useState('');
    const signIn = e =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            if(auth){
                history.push('/')
            }
        }).catch(error =>alert(error.message))
    }
    const register = e =>{
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
            console.log(auth);
            if(auth){
                history.push('/')
            }
        }).catch(error =>alert(error.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img src="https://www.acisolutions.net/wp-content/uploads/2019/09/amazon-logo-vector-png-amazon-logo-vector-512.png" className="AmazonLogoLogin"/>
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5 className='login__h5'>E-mail</h5>
                    <input  className="login__input"  type='text' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5 className='login__h5'>Password</h5>
                    <input className="login__input" type='password' value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="login__SignIn" type='submit' onClick={signIn}>Sign In</button>
                </form>
                <p className="login__text">By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & sale.</p>
                <button className="login__register" onClick={register}>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login

import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user; 

                window.location.href = "Dashboard"
        })
        .catch((error) =>{
            console.log(error);
        });

    };

    return(
        <div className="li-wrapper">
            <div className="li-left">
                <a className="logo" href="/"><h1>Ecotrack</h1></a>
            </div>
            <div className="li-right">
                <div className="li-header">
                    <h3>Welcome back.</h3>
                    <h3>You have been missed.</h3>
                </div>
                <form className="li-form" onSubmit={signIn}>
                <input type="email" name="E-mail*" placeholder="E-mail*" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" name="Password*" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type="submit">Log in</button>
                <p>We haven't met yet? <span><a>Create an account →</a></span></p>
                </form>
            </div>
        </div>
    )

}

export default LogIn;
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Dashboard from "./Dashboard/dashboard";

const CreateAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password, confirmPassword)
            .then((userCredential) => {
            const user = userCredential.user; 

            window.location.href = "Dashboard"
        })
        .catch((error) =>{
            console.log(error);
        });

    };

    return(
        <div className="ca-wrapper">
            <div className="ca-left">
                <a className="logo" href="/"><h1>Ecotrack</h1></a>
            </div>
            <div className="ca-right">
                <div className="ca-header">
                    <h3>Create an account.</h3>
                    <h3>Begin the adventure.</h3>
                </div>
                <form className="ca-form" onSubmit={signUp}>
                <input type="email" name="E-mail*" placeholder="Email*" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password" name="Password*" placeholder="Password*" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <input type="password" name="Password*" placeholder="Confirm your password*" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                <button type="submit">Create an account</button>
                <p>Already a valued member? <Link to="LogIn"><span><a>Log in →</a></span></Link></p>
                </form>
            </div>
        </div>
    )

}

export default CreateAccount;
import React, { useState } from 'react'
import "./CSS/Login.css" 
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [name, setName] = useState ("");
  const [profilePic, setProfilePic] = useState ("")
  
  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => {
    if (!name) {
    return alert("Please enter a full name")
    }
    auth.createUserWithEmailAndPassword(email, password)
    .then ((userAuth) => {
      userAuth.user.updatePrrofile ({
        displayName: name,
        photoURL: profilePic,
      })
    })
  };
  
  

  return (
    <div className='login'>
      {/* Insert image logo here when ready */}
      <h1>UPBEAT</h1>

      <form>
        <input value={name} onChange={e => setName(e.target.value)} placeholder='Full Name' text="text"/>
        <input value={profilePic} onChange={e => setProfilePic(e.target.value)} placeholder='Profile Pic URL' text="text" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder='Email' text="text" />
        <input value={password} onChange={e => setPassword(e.target.value)}  placeholder='Password' type="Password" />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p> Not a member? {" "}
        <span classname="logintoRegister" onClick={register}> Register Now</span>
      </p>

    </div>
  )
}

export default Login
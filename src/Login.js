import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "./CSS/Login.css" 
import { login } from './features/userSlice';
import { auth } from './firebase';

function Login() {
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [name, setName] = useState ("");
  const [profilePic, setProfilePic] = useState ("")
  const dispatch = useDispatch();
  
  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.photoURL,
      }));
    }) .catch((error) => alert (error));
  };

  const register = () => {
    if (!name) {
    return alert("Please enter a full name");
    }

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile ({
        displayName: name,
        photoURL: profilePic,
      })

      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          profileUrl: profilePic,

        }));
      });
      
    })
    .catch((error) => alert(error)); 
  };
  
  

  return (
    <div className='login'>
      {/* Insert image logo here when ready */}
      <h1>UPBEAT</h1>

      <form>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder='Full Name' text="text"/>
        <input value={profilePic} onChange={(e) => setProfilePic(e.target.value)} placeholder='Profile Pic URL' text="text" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' text="text" />
        <input value={password} onChange={(e) => setPassword(e.target.value)}  placeholder='Password' type="Password" />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>

      <p> Not a member? {" "}
        <span classname="logintoRegister" onClick={register}> Register Now</span>
      </p>

    </div>
  )
}

export default Login
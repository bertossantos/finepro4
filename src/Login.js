import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './appfine.css'

const firebaseConfig = {
  apiKey: "AIzaSyDPSGTUT-_PGKzUuWeCV1vGvi56tyxiLEs",
  authDomain: "finepro-2.firebaseapp.com",
  projectId: "finepro-2",
  storageBucket: "finepro-2.appspot.com",
  messagingSenderId: "225347617248",
  appId: "1:225347617248:web:f8eab674a94138dec1eb85",
  measurementId: "G-5H086NKQ7X"
};

firebase.initializeApp(firebaseConfig);

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Login successful
      console.log('Login successful');
      onLoginSuccess();
    } catch (error) {
      // Login failed
      const errorMessage = error.message;
      console.log('Login failed:', errorMessage);
    }
  };
  

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
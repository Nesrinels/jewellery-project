import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Login.css';
import { useNavigate } from 'react-router-dom'; 

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
      event.preventDefault();
  
      // Get the user data from localStorage
      const storedUser = JSON.parse(localStorage.getItem('user'));
  
      // Check if the email and password match the stored user details
      if (storedUser && storedUser.email === email && storedUser.password === password) {
        alert("Login successful!");
        navigate("/");  
      } else {
        setErrorMessage("Invalid email or password");
      }
    }
  return (
    <div className="login-page">
      <div className="container">
          <h1>Log In</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}/>
          <div><a href='#'>Forgot password?</a></div>
        </div>
        <div>
          <button type="submit" disabled={!validateForm()}>Login</button>
          {errorMessage && <div className="error">{errorMessage}</div>} 
        </div>
        </form>
        <p>Don't have an account?</p>
        <Link to='/register'>Sign up</Link>
      </div>
    </div>
  )
}
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Register.css';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  function validateForm() {
    return email.length > 0 && password.length > 0 && password === confirmPassword ;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const userData = {
      email: email,
      password: password
    };

    // Store user data in localStorage
    localStorage.setItem('user', JSON.stringify(userData));

    alert("Registration successful! You can now log in.");
    navigate("/login"); 
  }

  return (
    <div className="register-page">
      <div className="container">
          <h1>Sign up</h1>
          <form onSubmit={handleSubmit}>
        <div>
          <input type="email" placeholder="email" required onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <input type="password" placeholder="password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div>
          <input type="password" placeholder="confirm password" required onChange={(e) => setConfirmPassword(e.target.value)}/>
        </div>
        <div>
          <button type="submit" disabled={!validateForm()}>Sign up</button>
        </div>
        </form>
        <p>Already have an account?</p>
        <Link to='/login'>Log in</Link>
      </div>
    </div>
  )
}

export default Register
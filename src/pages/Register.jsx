import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config';
import { toast } from 'react-toastify';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    const data = { username, email, password };

    axios.post(`${API_BASE_URL}/register/`, data)
      .then(response => {
        toast.success("Registration successful!");
        // Redirect or update state as necessary
      })
      .catch(error => {
        console.error("Registration error:", error);
        toast.error("Registration failed. Please try again.");
      });
  };

  return (
    <form onSubmit={handleRegister}>
      <input 
        type="text" 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        required 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
        required 
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

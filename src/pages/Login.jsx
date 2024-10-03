import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { toast } from 'react-toastify'; // Ensure you have react-toastify installed for notifications

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ username, password });
      toast.success('Login successful!');
      // You can store the token and redirect or perform other actions here
      console.log(response.data);
    } catch (error) {
      toast.error('Login failed: ' + error.response.data.error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

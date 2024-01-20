import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async () => {
    signup(email, password);

    navigate('/signin');
  };

  return (
    <div>
      <h2>Signup</h2>
      <form>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignup}>Signup</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      <br />
      <p>Go To Home<Link to="/">Home</Link></p>
    </div>
  );
};


export default Signup;
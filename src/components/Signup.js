import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { users, signup } = useAuth();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async () => {
    const userExists = users.some((u) => u.email === email);
    if (userExists) {
      setErrorMessage('A user with this email already exists.');
      return;
    }

    setErrorMessage('');

    signup(email, password);

    setEmail('');
    setPassword('');

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
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <p>Already have an account? <Link to="/signin">Sign In</Link></p>
      <p>Go To Home<Link to="/">Home</Link></p>
    </div>
  );
};

export default Signup;

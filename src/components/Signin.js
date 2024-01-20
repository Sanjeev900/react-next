import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSignin = async () => {
    signin(email, password);

    const username = email.split('@')[0];

    window.location.href = `https://xperium-next-c2ofsil47-sanjeevs-projects-dafd5770.vercel.app/user-profile?data=${encodeURIComponent(username)}`;
  };

  return (
    <div>
      <h2>Signin</h2>
      <form>
        <label>Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label>Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleSignin}>Signin</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      <br />
      <p>Go To Home <Link to="/">Home</Link></p>
    </div>
  );
};


export default Signin;

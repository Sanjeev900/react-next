import React from 'react';

const UserProfile = () => {

  const handleSignout = async () => {
    window.location.href = 'http://localhost:3000/';
  };
  return (
    <div>
      <h1>User Profile Page (Next.js)</h1>
      <br />
      <button type="button" onClick={handleSignout}>Sign Out</button>
    </div>

  );
};

export default UserProfile;

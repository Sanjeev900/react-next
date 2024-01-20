import React from 'react';
import { useRouter } from 'next/router';

const UserProfile = () => {

  const router = useRouter();
  const receivedUsername = router.query.data || 'User';

  const handleSignout = async () => {
    window.location.href = 'http://localhost:3000/';
  };
  return (
    <div>
      <h1>User Profile Page (Next.js)</h1>
      <br />
      <h3>Hi {receivedUsername}</h3>
      <br />
      <button type="button" onClick={handleSignout}>Sign Out</button>
    </div>

  );
};

export default UserProfile;

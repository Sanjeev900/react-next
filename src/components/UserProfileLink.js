// import React from 'react';

// const UserProfileLink = () => {
//   return (
//     <div>
//       <a href="/user-profile">Go to User Profile (Next.js)</a>
//     </div>
//   );
// };

// export default UserProfileLink;


import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const UserProfileLink = () => {
  const { user, signout } = useAuth();

  return (
    <div>
      <h2>User Profile</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}!</p>
          <button onClick={signout}>Sign Out</button>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
      <a href="/user-profile">Go to User Profile (Next.js)</a>
      <p></p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default UserProfileLink;

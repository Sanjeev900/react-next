import React from 'react';
// import { useRouter } from 'next/router';

const UserProfile = ({ user }) => {
  return (
    <div>
      <h1>User Profile Page (Next.js)</h1>
      <br />
      <h3>Hi {user.name}</h3>
    </div>
  );
};

export const getServerSideProps = async ({ query }) => {
  const user = {
    name: decodeURIComponent(query.data || 'User'),
  };

  return {
    props: { user },
  };
};

export default UserProfile;

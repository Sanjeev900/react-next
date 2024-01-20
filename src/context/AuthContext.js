import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);

  const signup = (email, password) => {
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      console.log("User already exists.");
      return;
    }

    const newUser = { email };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUser(newUser);
  };

  const signin = (email, password) => {
    const currentUser = users.find((user) => user.email === email);
    if (currentUser) {
      setUser(currentUser);
    } else {
      console.log("User not found.");
    }
  };

  const signout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, users, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const name = localStorage.getItem('name');
    const picture = localStorage.getItem('picture');

    if (token) {
      setIsAuthenticated(true);
      setUserEmail(email);
      setUserName(name);
      setUserPicture(picture);
    }
  }, []);

  const login = ({ token, email, name, picture }) => {
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
    localStorage.setItem('name', name);
    localStorage.setItem('picture', picture);

    setIsAuthenticated(true);
    setUserEmail(email);
    setUserName(name);
    setUserPicture(picture);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('name');
    localStorage.removeItem('picture');
    console.log('User info and token have been removed');

    setIsAuthenticated(false);
    setUserEmail('');
    setUserName('');
    setUserPicture('');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userEmail,
        userName,
        userPicture,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

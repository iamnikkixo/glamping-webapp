import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();
const server = import.meta.env.VITE_BASE_URL;

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userPicture, setUserPicture] = useState('');

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await axios.get(`${server}/api/users/login/success`, {
          withCredentials: true,
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
        });

        if (response.status === 200 && response.data.user) {
          console.log(response.data.user);
          login(response.data.user);
        } else {
          throw new Error('Authentication has failed!');
        }
      } catch (err) {
        console.error(err);
      }
    };

    getUser();
  }, []);

  const login = (user) => {
    let email = '';
    let displayName = '';
    let picture = '';
    let token = '';

    if (user.token) {
      token = user.token;
      email = user.user.email;
    } else {
      email = user.emails[0].value;
      displayName = user.displayName;
      picture = user.photos[0].value;
    }

    // Set token if available
    if (token) {
      localStorage.setItem('token', token);
    }

    // Store user details in local storage
    localStorage.setItem('email', email);
    localStorage.setItem('name', displayName);
    localStorage.setItem('picture', picture);

    setIsAuthenticated(true);
    setUserEmail(email);
    setUserName(displayName);
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

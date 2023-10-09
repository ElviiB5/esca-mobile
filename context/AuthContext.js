import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState(null); 
  const [userRol, setUserRol] = useState(null); 

  const login = (status, rol) => {
    setIsLoggedIn(true)
    setUserName(status)
    setUserRol(rol)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserName(null)
    setUserRol(null)   
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, userName, userRol, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
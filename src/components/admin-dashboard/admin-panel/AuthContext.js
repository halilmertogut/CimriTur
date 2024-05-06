import React, { createContext, useContext, useState } from 'react';

// Providing a default object with empty functions can prevent null reference errors.
const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {}
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const adminUser = process.env.REACT_APP_ADMIN_USER;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
    if (username === adminUser && password === adminPassword) {
      setUser({ username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  isLoading: false,
  error: null
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Update localStorage when user state changes
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (username, password) => {
    const adminUser = process.env.REACT_APP_ADMIN_USER;
    const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
  
    console.log("Login attempt with:", username, password);
    
    if (username === adminUser && password === adminPassword) {
      setUser({ username });
      console.log("Login successful");
      return true;
    } else {
      console.log("Login failed");
      return false;
    }
  };
  

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    setIsLoading(false);
    setError(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

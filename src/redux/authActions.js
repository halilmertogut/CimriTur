// src/redux/authActions.js

import { setCredentials, removeCredentials } from './authSlice';

export const checkSession = () => async (dispatch, getState) => {
  const token = getState().auth.token;
  if (!token) {
    dispatch(removeCredentials());
    return false;
  }

  try {
    const response = await fetch('http://localhost:3000/api/users/check-token', { // Adjust URL as needed
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error('Session expired or invalid.');
    }

    const data = await response.json();
    dispatch(setCredentials({ user: data.user, token }));
    return true;
  } catch (error) {
    console.error('Session check failed:', error);
    dispatch(removeCredentials());
    return false;
  }
};

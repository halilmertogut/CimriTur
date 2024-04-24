// src/redux/authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  isAuthenticated: false
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = true;
    },
    removeCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
    logout: (state) => {
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
    }
  }
});

export const { setCredentials, removeCredentials } = authSlice.actions;

export default authSlice.reducer;

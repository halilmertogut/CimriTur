import { createSlice } from '@reduxjs/toolkit';

const registerInitialState = {
  isAuthenticated: false,
  user: null,
  registerError: null,
};

const loginInitialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loginError: null,
};

const registerSlice = createSlice({
  name: 'register',
  initialState: registerInitialState,
  reducers: {
    registerSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      state.registerError = null;
    },
    registerFail: (state, action) => {
      state.registerError = action.payload;
    },
  },
});

const loginSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loginError = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
    loginFail: (state, action) => {
      state.loginError = action.payload;
    },
  },
});

export const { loginSuccess, logout, loginFail } = loginSlice.actions;
export const { registerSuccess, registerFail } = registerSlice.actions;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login: loginSlice.reducer,
  register: registerSlice.reducer,
};

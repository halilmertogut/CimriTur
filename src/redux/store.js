// store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

export default configureStore({
  reducer: {
    login: authReducer.login,
    register: authReducer.register,
  },
});

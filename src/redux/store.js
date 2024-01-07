// store.js
import { loginReducer, registerReducer } from './authSlice'; // Corrected import names
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can use localStorage for persistent storage

// Redux Persist configuration
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  login: loginReducer,
  register: registerReducer,
})); // Combine your reducers here

const store = configureStore({
  reducer: persistedReducer, // Use the persisted reducer here
});

export const persistor = persistStore(store); // Redux Persist persistor

export default store;

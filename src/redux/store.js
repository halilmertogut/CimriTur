// store.js
import { loginReducer, registerReducer } from './authSlice'; 
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
  login: loginReducer,
  register: registerReducer,
})); 

const store = configureStore({
  reducer: persistedReducer, 
});

export const persistor = persistStore(store);

export default store;

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwwUujxXAJ8WDO4mhNN_ceCcT1wQSIVt4",
  authDomain: "cimritur-2ef9c.firebaseapp.com",
  projectId: "cimritur-2ef9c",
  storageBucket: "cimritur-2ef9c.appspot.com",
  messagingSenderId: "767815097154",
  appId: "1:767815097154:web:a02eacf143b82a30fbc6db",
  measurementId: "G-93Q7FFY6C9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyCSDvXvMvvWw3dCIvKH6x6xoKy8iqeL_JM",
  authDomain: "react-authentication-34a21.firebaseapp.com",
  projectId: "react-authentication-34a21",
  storageBucket: "react-authentication-34a21.appspot.com",
  messagingSenderId: "891095944922",
  appId: "1:891095944922:web:2032ac342465734a041fe3",
  measurementId: "G-YBG7KP15PG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
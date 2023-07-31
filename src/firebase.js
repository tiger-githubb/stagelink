// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import {getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCISwylwnb6EGFziVWu3CS5ZuyTYWt6MhM",
  authDomain: "stage-link-d6a20.firebaseapp.com",
  projectId: "stage-link-d6a20",
  storageBucket: "stage-link-d6a20.appspot.com",
  messagingSenderId: "766522059596",
  appId: "1:766522059596:web:b80766754ae0ce095f3de9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
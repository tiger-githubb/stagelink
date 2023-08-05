// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARmIvW5nH9FAJ4w1XuKsQHYqEFAvgE09o",
  authDomain: "gestag-b97bf.firebaseapp.com",
  projectId: "gestag-b97bf",
  storageBucket: "gestag-b97bf.appspot.com",
  messagingSenderId: "88988297026",
  appId: "1:88988297026:web:61e0e4672d583cba980adb"
};

export const hasUserCreatedCompany = async (userId) => {
  const db = getFirestore();
  const companiesRef = collection(db, 'entreprises');

  const q = query(companiesRef, where('userId', '==', userId));
  const querySnapshot = await getDocs(q);

  return !querySnapshot.empty;
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;
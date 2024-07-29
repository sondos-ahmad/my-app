// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADUwaJfVJYqHrIHeFeRpY5mwaFmvA1R0s",
  authDomain: "viva-7839d.firebaseapp.com",
  projectId: "viva-7839d",
  storageBucket: "viva-7839d.appspot.com",
  messagingSenderId: "617989171632",
  appId: "1:617989171632:web:32f1c31abc07211e824e75",
  measurementId: "G-Q0864NZD0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
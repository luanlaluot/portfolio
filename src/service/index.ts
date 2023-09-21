// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEh-m-CJJ4OVZSZ5r1lkKqQ1pqdHV0fxU",
  authDomain: "portfolio-c595a.firebaseapp.com",
  projectId: "portfolio-c595a",
  storageBucket: "portfolio-c595a.appspot.com",
  messagingSenderId: "904591068950",
  appId: "1:904591068950:web:52d0b93c43990952070a37",
  measurementId: "G-L21RQ5LPW9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseStore = getFirestore(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDMcU7C9sU2BNsgUopn4-xZgAlXfooPGrA",
  authDomain: "netflixgpt-7b2de.firebaseapp.com",
  projectId: "netflixgpt-7b2de",
  storageBucket: "netflixgpt-7b2de.firebasestorage.app",
  messagingSenderId: "10260262954",
  appId: "1:10260262954:web:f69f31df3bf7e3efc0d353",
  measurementId: "G-110NE49BH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();


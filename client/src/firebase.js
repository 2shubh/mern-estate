// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d9e30.firebaseapp.com",
  projectId: "mern-estate-d9e30",
  storageBucket: "mern-estate-d9e30.firebasestorage.app",
  messagingSenderId: "135012556496",
  appId: "1:135012556496:web:067e285096dd6c57a048d5",
  measurementId: "G-G4YDTLLDXW"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
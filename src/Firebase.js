import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgC0FFjMWCwToceQjvfHDLrqmST3voza4",
  authDomain: "expensetracker-2f9ee.firebaseapp.com",
  projectId: "expensetracker-2f9ee",
  storageBucket: "expensetracker-2f9ee.firebasestorage.app",
  messagingSenderId: "273725603626",
  appId: "1:273725603626:web:ee06655fe0cf2e85816853",
};

// Check if Firebase app is already initialized
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

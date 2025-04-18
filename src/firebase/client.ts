// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1_cVPGldmibxrGU18QB3quGt5XtxVVks",
  authDomain: "crypto-static-data.firebaseapp.com",
  databaseURL: "https://crypto-static-data-default-rtdb.firebaseio.com",
  projectId: "crypto-static-data",
  storageBucket: "crypto-static-data.firebasestorage.app",
  messagingSenderId: "605469026274",
  appId: "1:605469026274:web:5041cc8c540b82230ffbbb",
  measurementId: "G-Y4JNFVJDE9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
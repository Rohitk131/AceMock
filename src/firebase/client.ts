// Import the functions you need from the SDKs you need
import { initializeApp , getApp , getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOlANVDNDo-nCzWwJK2mttpPCakNtA0cE",
  authDomain: "acemock-4992f.firebaseapp.com",
  projectId: "acemock-4992f",
  storageBucket: "acemock-4992f.firebasestorage.app",
  messagingSenderId: "822591230301",
  appId: "1:822591230301:web:2a57dc80b60d5f445ad8b4",
  measurementId: "G-7DCTF6JH74"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);
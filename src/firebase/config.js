import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAYoJsUL0x7dBAGNX69psNZpmquqaoTnjM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "awesomemathj.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "awesomemathj",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "awesomemathj.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "292281127249",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:292281127249:web:aac1072b2d9f67d77d0370",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-G2BZYXCEFM"
};

// Initialize Firebase safely (prevent duplicate initialization during HMR)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

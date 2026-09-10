import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYoJsUL0x7dBAGNX69psNZpmquqaoTnjM",
  authDomain: "awesomemathj.firebaseapp.com",
  projectId: "awesomemathj",
  storageBucket: "awesomemathj.firebasestorage.app",
  messagingSenderId: "292281127249",
  appId: "1:292281127249:web:aac1072b2d9f67d77d0370",
  measurementId: "G-G2BZYXCEFM"
};

// Initialize Firebase safely (prevent duplicate initialization during HMR)
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;

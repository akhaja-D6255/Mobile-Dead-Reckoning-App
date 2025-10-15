// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Paste your web config here from Firebase console
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  // ...other fields
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBDszS1UUSr9zpU2Kea72sNKYIb8Fi5OfA",
  authDomain: "ecommerce-c8438.firebaseapp.com",
  projectId: "ecommerce-c8438",
  storageBucket: "ecommerce-c8438.firebasestorage.app",
  messagingSenderId: "14004892451",
  appId: "1:14004892451:web:14be4358374e471f011296"
};  

const app = initializeApp(firebaseConfig);


export const auth = getAuth(app); 
export const db = getFirestore(app); 
export const storage = getStorage(app); 
export default app;

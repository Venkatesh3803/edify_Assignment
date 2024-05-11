// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey:  import.meta.env.VITE_API_KEY,
    authDomain: "user-managment-1dd65.firebaseapp.com",
    projectId: "user-managment-1dd65",
    storageBucket: "user-managment-1dd65.appspot.com",
    messagingSenderId: "717538226280",
    appId: "1:717538226280:web:c66990ee6fc17cca570bdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);



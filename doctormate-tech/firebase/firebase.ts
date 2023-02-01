import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAsdR2A_2OBxaRllZoH9j8VLIQneOVRbgw",
  authDomain: "doctormate-tech-admin.firebaseapp.com",
  projectId: "doctormate-tech-admin",
  storageBucket: "doctormate-tech-admin.appspot.com",
  messagingSenderId: "135217145719",
  appId: "1:135217145719:web:47390f00b8e7a869496372",
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

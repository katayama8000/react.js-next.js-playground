// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAcR2rPqIGzfliTmCioEDwyClGr7QeF790',
  authDomain: 'katayama-sandbox-639ef.firebaseapp.com',
  projectId: 'katayama-sandbox-639ef',
  storageBucket: 'katayama-sandbox-639ef.appspot.com',
  messagingSenderId: '1013992427003',
  appId: '1:1013992427003:web:71e59240398188c6bd0f5e',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

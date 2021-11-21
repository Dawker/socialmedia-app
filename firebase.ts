// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt1t1VFaKGUOdgfQzhCtJNL8pn13HpqWo",
  authDomain: "insta-clone-fe4c6.firebaseapp.com",
  projectId: "insta-clone-fe4c6",
  storageBucket: "insta-clone-fe4c6.appspot.com",
  messagingSenderId: "960930495180",
  appId: "1:960930495180:web:60ac41a234e00cd92b2069"
}

// Initialize Firebase
const app = !getApp() ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
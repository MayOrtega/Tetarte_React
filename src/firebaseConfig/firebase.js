import { initializeApp } from "firebase/app";
import{ getFirestore } from "@firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyACJ2cIU6e6vj8pzDOI9HlPRQzOrwhIQcE",
  authDomain: "tetarte-4850c.firebaseapp.com",
  projectId: "tetarte-4850c",
  storageBucket: "tetarte-4850c.appspot.com",
  messagingSenderId: "769837233908",
  appId: "1:769837233908:web:b76acfbd3a46a0dd8b90a1"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
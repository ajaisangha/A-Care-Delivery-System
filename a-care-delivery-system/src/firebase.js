// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4eTE84NoHZ8JLy51olVPnTuWko93-weM",
  authDomain: "a-care-delivery-2d788.firebaseapp.com",
  projectId: "a-care-delivery-2d788",
  storageBucket: "a-care-delivery-2d788.firebasestorage.app",
  messagingSenderId: "117003887250",
  appId: "1:117003887250:web:c88aea02cb00ed97fcbc4b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

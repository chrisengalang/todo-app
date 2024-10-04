import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAtBjrrPbOnMUkLARUNXT-OHHWBJNbWsK4",
  authDomain: "todo-app-59f03.firebaseapp.com",
  projectId: "todo-app-59f03",
  storageBucket: "todo-app-59f03.appspot.com",
  messagingSenderId: "1040532800727",
  appId: "1:1040532800727:web:eb0737409b19891aef9c92",
  measurementId: "G-H0RFMSQ2F5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const db = getFirestore(app)

export {
  auth,
  provider,
  db
}

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDS4lQxW6Bovn-FbH9X8U4l8MYGoABFvqk",
  authDomain: "news-8b392.firebaseapp.com",
  databaseURL: "https://news-8b392-default-rtdb.firebaseio.com",
  projectId: "news-8b392",
  storageBucket: "news-8b392.appspot.com",
  messagingSenderId: "330192618686",
  appId: "1:330192618686:web:fbd7195064d7c972e24aef",
  measurementId: "G-LL56NC6ENV"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export {auth,provider}
export {database}

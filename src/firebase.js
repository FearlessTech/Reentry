import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1pxEo1d7x1fsBozLFsdu5jj9L3IjWoEU",
  authDomain: "mainereentrynetwork-d719e.firebaseapp.com",
  projectId: "mainereentrynetwork-d719e",
  storageBucket: "mainereentrynetwork-d719e.appspot.com",
  messagingSenderId: "439700418780",
  appId: "1:439700418780:web:175e3c4944713a75e14419",
  measurementId: "G-7TRRF90XN9"
};


const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
  
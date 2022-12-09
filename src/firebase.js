import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLmVhe7jVs9W2W3sWPUl5FCjy-CRdCTlg",
    authDomain: "mainereentrynetwork.firebaseapp.com",
    projectId: "mainereentrynetwork",
    storageBucket: "mainereentrynetwork.appspot.com",
    messagingSenderId: "390820952347",
    appId: "1:390820952347:web:fd93c9235c3cfdebeebbbe",
    measurementId: "G-VEDC1QVDR2"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new auth.GoogleAuthProvider();
const storage = getStorage(firebaseApp);


export { auth, provider, storage };
export default db;

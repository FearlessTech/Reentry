import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCKlbiyPeccZc_E5wnfYs_wApRw3gjKENY",
  authDomain: "mainereentry.firebaseapp.com",
  projectId: "mainereentry",
  storageBucket: "mainereentry.appspot.com",
  messagingSenderId: "844001971791",
  appId: "1:844001971791:web:85349a067d13a6b32e643a",
  measurementId: "G-P1RQH1BG36",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
export { db, auth };

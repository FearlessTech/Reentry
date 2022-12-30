import firebase from 'firebase';
import "firebase/auth";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKlbiyPeccZc_E5wnfYs_wApRw3gjKENY",
  authDomain: "mainereentry.firebaseapp.com",
  projectId: "mainereentry",
  storageBucket: "mainereentry.appspot.com",
  messagingSenderId: "844001971791",
  appId: "1:844001971791:web:85349a067d13a6b32e643a",
  measurementId: "G-P1RQH1BG36"
};


  // No need to change anything below this line
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebaseApp.storage();
  
  export { auth, provider, storage, db };
  export default db;
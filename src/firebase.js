import firebase from 'firebase';

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


  // No need to change anything below this line
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebaseApp.storage();
  
  export { auth, provider, storage };
  export default db;
  
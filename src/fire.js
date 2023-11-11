import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBD6aqq94dB5sl8_FqnmhR6lykK4Zl5mQE",
    authDomain: "netflix-ae828.firebaseapp.com",
    projectId: "netflix-ae828",
    storageBucket: "netflix-ae828.appspot.com",
    messagingSenderId: "271204326067",
    appId: "1:271204326067:web:db22a4e4286c2679e56ec6",
    measurementId: "G-9H92W6NBE6"
  };

const firebaseApp =  firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage;

export {auth, provider, storage};
export default db;
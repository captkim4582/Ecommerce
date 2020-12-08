import firebase from 'firebase/app';
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
  // export;

  export const auth = firebase.auth();
  export const googleProviderAuth = new firebase.auth.GoogleAuthProvider();
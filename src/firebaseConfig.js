import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC8yT4oEDFdMhC5k08FS6kfcnLMhBAE_sU",
    authDomain: "onlinefundtransfer-5055e.firebaseapp.com",
    projectId: "onlinefundtransfer-5055e",
    storageBucket: "onlinefundtransfer-5055e.appspot.com",
    messagingSenderId: "595307233210",
    appId: "1:595307233210:web:f8a06f3030b82c1adc2783",
    measurementId: "G-MEWLFMSMZT"
  };

  firebase.initializeApp(firebaseConfig);
let auth = firebase.auth();
export { auth, firebase };
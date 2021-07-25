import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyDUMVXpraValtnE-BTkvYChkLgRMcU-OHc",
    authDomain: "workfinder-3c132.firebaseapp.com",
    databaseURL: "https://workfinder-3c132-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "workfinder-3c132",
    storageBucket: "workfinder-3c132.appspot.com",
    messagingSenderId: "888619309953",
    appId: "1:888619309953:web:1d9386dc03ef0a3e92e680"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();
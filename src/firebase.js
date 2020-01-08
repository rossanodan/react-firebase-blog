import firebase from 'firebase/app';
import database from 'firebase/database';

const config = {
  apiKey: "AIzaSyDg6N1wKeI2v2z-jAHCcc3aGNX-YLAP0dQ",
  authDomain: "react-firebase-blog-34af6.firebaseapp.com",
  databaseURL: "https://react-firebase-blog-34af6.firebaseio.com",
  projectId: "react-firebase-blog-34af6",
  storageBucket: "react-firebase-blog-34af6.appspot.com",
  messagingSenderId: "755306819723",
  appId: "1:755306819723:web:d409f1363f2278ecf6e48e"
};

let firebaseCache;

export const getFirebase = () => {
  if (firebaseCache) {
    return firebaseCache;
  }

  firebase.initializeApp(config);
  firebaseCache = firebase;
  return firebase;
};
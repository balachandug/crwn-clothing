import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD2nLpDkWW8Np7PUmUm4s5e6WpgMbmHps0",
    authDomain: "crwn-db-767f0.firebaseapp.com",
    databaseURL: "https://crwn-db-767f0.firebaseio.com",
    projectId: "crwn-db-767f0",
    storageBucket: "crwn-db-767f0.appspot.com",
    messagingSenderId: "211108227322",
    appId: "1:211108227322:web:63b3270ceba0da914c0143",
    measurementId: "G-D0T7HD5VW7"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
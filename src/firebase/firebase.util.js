import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDjM4BKHrlK5OPPnTmxqwgkMUSvYOpV9aI",
    authDomain: "crwn-db-50fb9.firebaseapp.com",
    databaseURL: "https://crwn-db-50fb9.firebaseio.com",
    projectId: "crwn-db-50fb9",
    storageBucket: "crwn-db-50fb9.appspot.com",
    messagingSenderId: "521777560394",
    appId: "1:521777560394:web:4f3c57eca2bf9f874b5fb3",
    measurementId: "G-D5KFGSH8F3"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
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

export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName, 
                email, 
                createdAt,
                ...additionalData
            })
        } catch(error){
            console.log('Error creating user',error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase; 
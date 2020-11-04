import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =   {
    apiKey: "AIzaSyCEifRTaxI_cwd7122y6G5duppkxpDi1po",
    authDomain: "crwn-db-cdb65.firebaseapp.com",
    databaseURL: "https://crwn-db-cdb65.firebaseio.com",
    projectId: "crwn-db-cdb65",
    storageBucket: "crwn-db-cdb65.appspot.com",
    messagingSenderId: "816570070359",
    appId: "1:816570070359:web:6cf8c4dd40fb493a697a12",
    measurementId: "G-8LV298VP4E"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({  prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
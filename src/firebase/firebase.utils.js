import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config={
    apiKey: "AIzaSyAIxyTPN7faa8XpAotkHjoCvpL6fANO_CE",
    authDomain: "crown-db-7f4f6.firebaseapp.com",
    databaseURL: "https://crown-db-7f4f6.firebaseio.com",
    projectId: "crown-db-7f4f6",
    storageBucket: "crown-db-7f4f6.appspot.com",
    messagingSenderId: "406853460923",
    appId: "1:406853460923:web:a1ca1cc5b10c4d7cc31a9e",
    measurementId: "G-PCHCT9Q5KJ"
  };

  firebase.initializeApp(config);

  export const auth     = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);


  export default firebase;
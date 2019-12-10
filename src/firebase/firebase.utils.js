import firebase from 'firebase/app';

import 'firebase/firestore';

import 'firebase/auth';


const config={
    apiKey: "AIzaSyDMkhuFQxRYLe41Qv-LG0RP454ssnxwVm0",
    authDomain: "crown-98d7f.firebaseapp.com",
    databaseURL: "https://crown-98d7f.firebaseio.com",
    projectId: "crown-98d7f",
    storageBucket: "crown-98d7f.appspot.com",
    messagingSenderId: "509021124659",
    appId: "1:509021124659:web:0417a738f6ba7da281cb46",
    measurementId: "G-ES37CJT3ZG"
  };

export const createUserProfileDocument = async (userAuth, aditionalData)=>{
// Create a document in firestore for a new user who haven't 
// stored in the database firestore
    if(!userAuth) return;

    /* const userRef  = firestore.doc('users/3232333');
    const snapShot = await userRef.get();
    console.log(snapShot); */
    //console.log(firestore.doc('users/425454545'));

    const userRef = firestore.doc(`users/${userAuth.uid}`);
     //return the user refrence : the exact user object reference in firestore 
    const snapShot =await userRef.get();
    // get() return the snapshot or the object with relative reference
    if (!snapShot.exists) 
    {   // if the object doesn't exist,  
        const {displayName, email} = userAuth;
        const createdAt = new Date();   
        try {
            // await for asynchronous  function, talking with api
            // trying to create new document with new refrence
 
            await userRef.set ({
                displayName,
                email,
                createdAt,
                ...aditionalData

            })
           
        } catch (error) {
            console.log("erroe creating user ", error.message);
        }
        //console.log(userRef);
    }
    return userRef;
   
}


  firebase.initializeApp(config);

  export const auth     = firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);

  export default firebase;
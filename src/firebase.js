import firebase from "firebase/app";
import "firebase/firestore";

//step-1
import "firebase/auth";
// step-1 ended

const firebaseConfig = {
  apiKey: "AIzaSyAOxPxq1kD4zo3SIahvv0cXQ8ij75HcuG4",
  authDomain: "reels-29769.firebaseapp.com",
  projectId: "reels-29769",
  storageBucket: "reels-29769.appspot.com",
  messagingSenderId: "629328972249",
  appId: "1:629328972249:web:339275e33b7ac92ba6f1c8",
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

// step-2 
export const auth = firebase.auth();

// step-3 firbase console; enable google login in auth panel

// step-4 
let provider = new firebase.auth.GoogleAuthProvider();

// step-5
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

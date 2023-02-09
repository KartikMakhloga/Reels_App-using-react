import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

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
export const auth = firebase.auth();
let provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

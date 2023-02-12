import { auth, signInWithGoogle, firestore } from "./firebase";
import { useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { userContext } from "./App";

let Login = (props) => {
  let value = useContext(userContext);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        // destructuring of user object
        let { displayName, email, uid } = user;
        let docRef = firestore.collection("users").doc(uid);
        let document = docRef.get();
        if (!document.exists) {
          docRef.set({
            displayName,
            email,
            posts: [],
          });
        }
        props.handleUser({ displayName, email, uid });
      } else {
        props.handleUser(user);
      }
    });
  }, []);

  return (
    <div>
      {value ? <Redirect to="home" /> : ""}
      <button
        type="button"
        className="btn btn-primary m-4"
        onClick={signInWithGoogle}
      >
        Login With Google
      </button>
    </div>
  );
};

export default Login;

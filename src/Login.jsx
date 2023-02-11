import { auth, signInWithGoogle } from "./firebase";
import { useEffect } from "react";

let Login = (props) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // destructuring of user object
        let { displayName, email } = user;
        props.handleUser({ displayName, email });
      } else {
        props.handleUser(user);
      }
    });
  }, []);

  return (
    <button
      type="button"
      className="btn btn-primary m-4"
      onClick={signInWithGoogle}
    >
      Login With Google
    </button>
  );
};

export default Login;

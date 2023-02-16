import { signInWithGoogle } from "./firebase";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

let Login = (props) => {
  let value = useContext(AuthContext);

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

import { signInWithGoogle } from "./firebase";

let Login = () => {
  return (
    <button type="button" className="btn btn-primary m-4" onClick={signInWithGoogle}>
      Login With Google
    </button>
  );
};

export default Login;

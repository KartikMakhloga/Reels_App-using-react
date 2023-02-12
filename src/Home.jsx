import { Redirect } from "react-router-dom";
import { auth } from "./firebase";
import { userContext } from "./App";
import { useContext } from "react";

let Home = () => {
  let value = useContext(userContext);

  return (
    <div>
      {value ? (
        <>
          
          <button
            type="button"
            className="btn btn-primary m-2"
            onClick={() => {
              auth.signOut();
            }}
          >
            LogOut
          </button>
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;

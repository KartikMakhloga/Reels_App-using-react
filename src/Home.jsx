import { auth } from "./firebase";

let Home = (props) => {
  return (
    <div>
      <h1>{props.user.displayName}</h1>
      <p>{props.user.email}</p>
      <button
        type="button"
        className="btn btn-primary m-2"
        onClick={()=>{
          auth.signOut();
        }}
      >
        LogOut
      </button>
    </div>
  );
};

export default Home;

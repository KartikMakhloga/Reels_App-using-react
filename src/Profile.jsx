import { AuthContext } from "./AuthProvider";
import { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { firestore } from "./firebase";
import "./Profile.css";

let Profile = () => {
  let value = useContext(AuthContext);

  let [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    let f = async () => {
      let querySnapshot = await firestore
        .collection("posts")
        .where("username", "==", value.displayName)
        .get();

      setTotalPosts(querySnapshot.size);
    };
    f();
  }, []);
  return (
    <>
      {value ? (
        <div>
          <img className="profile-img" src={value.photoURL}/>
          <p className="profile-name">{value.displayName}</p>
          <p className="profile-posts">Total Posts: {totalPosts}</p>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
};

export default Profile;

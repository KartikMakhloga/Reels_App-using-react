import { Redirect } from "react-router-dom";
import { auth, storage, firestore } from "./firebase";
import { userContext } from "./App";
import { useContext, useEffect } from "react";
import VideoCard from "./VideoCard";
import "./Home.css";

let Home = () => {
  let value = useContext(userContext);

  useEffect(() => {}, []);

  return (
    <div>
      {value ? (
        <>
          <div className="posts-container">
            <VideoCard />
            <VideoCard />
          </div>
          <button
            className="logout-btn"
            onClick={() => {
              auth.signOut();
            }}
          >
            LogOut
          </button>
          <input
            onChange={(e) => {
              //handler for if user will not upload anything and just cancel
              if (!e.target.files[0]) return;

              //get file name size and type
              let { name, size, type } = e.target.files[0];
              //store the selected file so that we can upload it later on
              let file = e.target.files[0];
              //convert the file size into mb
              size = Math.ceil(size / 1000000);
              console.log(size);
              //get file type

              type = type.split("/")[0];

              //checks
              if (type !== "video") {
                alert("Please upload a video only");
              } else if (size >= 10) {
                alert("file is too large");
              } else {
                //upload

                //These functions are called by state_changed Event
                let f1 = (snapshot) => {
                  //this function shows the progress of upload
                  // console.log(snapshot.bytesTransferred);
                  // console.log(snapshot.totalBytes);
                };
                let f2 = (error) => {
                  //its an error handler function
                  // console.log(error);
                };
                let f3 = () => {
                  //this function passed to state_change event which executes when file is uploaded so that we can get the uploaded file url

                  //getDownloadURL method is used to generate the url, it gives a promise
                  uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                    firestore.collection("posts").add({
                      username: value.displayName,
                      url,
                      likes: 0,
                      comments: [],
                    });
                  });
                };

                //using the firebase storage object we are getting reference of a file location
                //in our case posts/userId/filename and uploading our file to that location
                let uploadTask = storage
                  .ref(`/posts/${value.uid}/${name}`)
                  .put(file);

                //the upload method gives us upload which can be used to set up state_changed event
                //this takes 3 callbacks
                uploadTask.on("state_changed", f1, f2, f3); //state_changed is an event
              }
            }}
            className="upload-btn"
            type="file"
          />
        </>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
};

export default Home;

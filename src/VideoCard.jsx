import { useState, useContext, useEffect } from "react";
import { firestore } from "./firebase";
import { AuthContext } from "./AuthProvider";

function VideoCard(props) {
  let value = useContext(AuthContext);
  let [boxOpen, setBoxOpen] = useState(false);
  let [playing, setPlaying] = useState(false);
  let [currUserComment, setCurrUserComment] = useState("");
  let [allComments, setAllComments] = useState([]);

  useEffect(() => {
    let f = async () => {
      let allCommentId = props.post.comments;
      let arr = [];

      for (let i = 0; i < allCommentId.length; i++) {
        let id = allCommentId[i];
        let doc = await firestore.collection("comments").doc(id).get();
        let commentData = { ...doc.data(), id: doc.id };
        arr.push(commentData);
      }
      setAllComments(arr);
    };
    f();
  }, [props]);

  return (
    <div className="video-card">
      <video
        onClick={(e) => {
          if (playing) {
            setPlaying(false);
            e.currentTarget.pause();
          } else {
            setPlaying(true);
            e.currentTarget.play();
          }
        }}
        src={props.post.url}
      ></video>
      <span
        className="material-icons-outlined like"
        onClick={(el) => {
          if (el.currentTarget.innerText === "favorite_border") {
            el.currentTarget.innerText = "favorite";
          } else {
            el.currentTarget.innerText = "favorite_border";
          }
        }}
      >
        favorite_border
      </span>
      <span
        className="material-icons-outlined comment"
        onClick={() => {
          if (boxOpen) {
            setBoxOpen(false);
          } else {
            setBoxOpen(true);
          }
        }}
      >
        comment
      </span>
      <p className="username">
        <b>{props.post.username}</b>
      </p>
      <p className="song">
        <span className="material-icons-outlined">music_note</span>
        <marquee>Song_Name</marquee>
      </p>

      {boxOpen ? (
        <div className="comment-box">
          <span
            className="material-icons-outlined close"
            onClick={() => {
              setBoxOpen(false);
            }}
          >
            close
          </span>
          <div className="all-comments">
            {/* {console.log(allComments)} */}
            {allComments.map((comment, index) => {
              return (
                <div key={index}>
                  <img src={comment.pic} />
                  <div>
                    <p>
                      <b>{comment.username}</b>
                    </p>
                    <p className="inner-comment">{comment.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="comment-form">
            <input
              type="text"
              placeholder="Write Comment"
              value={currUserComment}
              onChange={(e) => {
                setCurrUserComment(e.currentTarget.value);
              }}
              onKeyDown={(el) => {
                if (el.code === "Enter") {
                  let p = firestore.collection("comments").add({
                    comment: currUserComment,
                    username: value.displayName,
                    pic: value.photoURL,
                  });
                  setCurrUserComment("");
                  p.then((docRef) => {
                    return docRef.get();
                  }).then((doc) => {
                    firestore
                      .collection("posts")
                      .doc(props.post.id)
                      .update({
                        comments: [...props.post.comments, doc.id],
                      });
                  });
                }
              }}
            />
            <button
              className="send"
              onClick={() => {
                let p = firestore.collection("comments").add({
                  comment: currUserComment,
                  username: value.displayName,
                  pic: value.photoURL,
                });

                setCurrUserComment("");

                p.then((docRef) => {
                  return docRef.get();
                }).then((doc) => {
                  firestore
                    .collection("posts")
                    .doc(props.post.id)
                    .update({
                      comments: [...props.post.comments, doc.id],
                    });
                });
              }}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default VideoCard;
